import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getContactAutoReplyTemplate } from '@/lib/email-templates';
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
    const projectType = formData.get('projectType') as string;
    const message = formData.get('message') as string;
    const file = formData.get('file') as File | null;

    // Server-side validation
    if (!name || !email || !phone || !projectType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Basic phone validation (at least 10 digits)
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json({ error: 'Invalid phone number format' }, { status: 400 });
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
    }

    const internalEmailPayload: any = {
      from: process.env.EMAIL_FROM || 'SalHurry <no-reply@salhurry.in>',
      to: process.env.EMAIL_TO || 'info@salhurry.in',
      subject: `New Contact Form Submission: ${projectType} from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Project Type: ${projectType}
        Message: ${message || 'No message provided'}
      `,
    };

    if (attachments.length > 0) {
      internalEmailPayload.attachments = attachments;
    }

    const autoReplyPayload: any = {
      from: process.env.EMAIL_FROM || 'SalHurry <no-reply@salhurry.in>',
      to: email,
      subject: 'Thank you for reaching out to SalHurry',
      html: getContactAutoReplyTemplate(name, projectType),
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
      // We still mark it as success to the user so they aren't blocked from submitting just because auto-reply failed
    }

    console.log('Resend Delivery Success');

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
