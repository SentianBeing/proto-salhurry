import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://salhurry.in';

export const viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'SalHurry Growth Systems: Scaling Businesses in Kerala & UAE',
    template: '%s | SalHurry Growth Systems',
  },
  description: 'SalHurry is a Growth Systems and Sales Acceleration company helping businesses in Kerala & UAE (Dubai, Abu Dhabi) with GTM strategy, SEO, and web development.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: baseUrl,
    siteName: 'SalHurry',
    images: [
      {
        url: '/images/og-image.jpg', // You can update this to the actual image path
        width: 1200,
        height: 630,
        alt: 'SalHurry Growth Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Salhurry',
    creator: '@Salhurry',
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  verification: {
    google: 'zkeSgv8mjH7qkHS0ccgWGHA1Sd4MCIvCRBMPnotsXWk',
  },
};

import { ContactModalProvider } from '@/context/contact-modal-context';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ContactModalProvider>
          {children}
        </ContactModalProvider>
      </body>
    </html>
  );
}
