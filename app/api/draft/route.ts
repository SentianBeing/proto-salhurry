import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');
    const slug = searchParams.get('slug');
    const type = searchParams.get('type') || 'blog';

    // Check the secret and next parameters
    // This secret should only be known to this API route and the CMS
    if (secret !== process.env.SANITY_API_READ_TOKEN || !slug) {
        return new Response('Invalid token', { status: 401 });
    }

    // Enable Draft Mode by setting the cookie
    const draft = await draftMode();
    draft.enable();

    // Redirect to the path from the fetched post
    // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities
    if (type === 'blog') {
        redirect(`/blog/${slug}`);
    } else {
        redirect(`/case-studies/${slug}`);
    }
}
