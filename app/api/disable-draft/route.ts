import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
    draftMode().disable();
    // Redirect to the home page after disabling draft mode
    redirect('/');
}
