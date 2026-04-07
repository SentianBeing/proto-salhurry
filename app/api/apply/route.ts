import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getCareersAutoReplyTemplate } from '@/lib/email-templates';
export async function POST(req: NextRequest) {
    try {
        const resendApiKey = process.env.RESEND_API_KEY;
        if (!resendApiKey) {
            console.error('RESEND_API_KEY is not defined');
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
        }
        const resend = new Resend(resendApiKey);

        const formData = await req.formData();
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const role = formData.get('role') as string;
        const file = formData.get('file') as File | null;

        // Server-side validation
        if (!name || !email || !phone || !role) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        let attachments = [];
        if (file && file.size > 0) {
            // Validate file size (10MB)
            if (file.size > 10 * 1024 * 1024) {
                return NextResponse.json({ error: 'File size exceeds 10MB limit' }, { status: 400 });
            }

            // Validate file type
            const allowedTypes = [
                'application/pdf',
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            ];
            if (!allowedTypes.includes(file.type)) {
                return NextResponse.json({ error: 'Invalid file type. Only PDF, DOC, and DOCX are allowed.' }, { status: 400 });
            }

            const buffer = Buffer.from(await file.arrayBuffer());
            attachments.push({
                filename: file.name,
                content: buffer,
            });
        } else {
            return NextResponse.json({ error: 'Resume is required' }, { status: 400 });
        }

        const internalEmailPayload: any = {
            from: process.env.EMAIL_FROM_CAREERS || 'SalHurry Careers <no-reply@salhurry.in>',
            to: process.env.EMAIL_TO || 'info@salhurry.in',
            subject: `New Job Application: ${role} from ${name}`,
            text: `
        New Career Application!

        Applicant Details:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Applied Role: ${role}
        
        Resume attached.
      `,
        };

        if (attachments.length > 0) {
            internalEmailPayload.attachments = attachments;
        }

        const autoReplyPayload: any = {
            from: process.env.EMAIL_FROM_CAREERS || 'SalHurry Careers <no-reply@salhurry.in>',
            to: email,
            subject: `Application Received: ${role} at SalHurry`,
            html: getCareersAutoReplyTemplate(name, role),
        };

        const [internalResult, autoReplyResult] = await Promise.all([
            resend.emails.send(internalEmailPayload),
            resend.emails.send(autoReplyPayload)
        ]);

        if (internalResult.error) {
            console.error('Resend internal error:', internalResult.error);
            return NextResponse.json({ error: internalResult.error.message }, { status: 500 });
        }
        
        if (autoReplyResult.error) {
            console.error('Resend auto-reply error:', autoReplyResult.error);
            // Ignore auto-reply error for user flow
        }

        console.log('Resend Delivery Success');

        return NextResponse.json({ success: true });
    } catch (err: any) {
        console.error('API error:', err);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
