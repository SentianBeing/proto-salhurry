import { Metadata } from 'next';
import ContactView from '@/components/contact-view';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Contact Us | SalHurry Growth Systems',
  description: 'Have a bold vision? Leave your details and an executive from Divegrid will reach out to you within hours to discuss your next big move in Trivandrum, UAE, or Germany.',
  path: '/contact',
});

export default function ContactPage() {
  return <ContactView />;
}
