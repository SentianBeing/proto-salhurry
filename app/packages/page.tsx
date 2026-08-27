import React from 'react';
import Navbar from '@/layouts/navbar';
import Footer from '@/layouts/footer';
import Partners from '@/components/partners';
import CTA from '@/components/cta';
import DigitalMarketingPackagesContent from '@/components/digital-marketing-packages-content';
import { constructMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = constructMetadata({
  title: 'Digital Marketing Packages & Pricing | Starter, Business Growth & Premium Brand | SalHurry',
  description: 'Simple, transparent digital marketing tiers by SalHurry. Meta & Google performance marketing, social reels, SEO groundwork, and brand build-outs for businesses in Kerala and UAE.',
  path: '/packages',
});

export default function PackagesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'SalHurry Digital Marketing Packages',
    description: 'Performance marketing, social media content, and SEO execution tiers.',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Starter Package',
        price: '9999',
        priceCurrency: 'INR',
        description: 'Launch ads on Meta or Google with 4 static creatives per month.',
        url: 'https://www.salhurry.in/packages#starter'
      },
      {
        '@type': 'Offer',
        name: 'Business Growth Package',
        price: '19999',
        priceCurrency: 'INR',
        description: 'Meta Ads + Google Ads, 8-10 creatives, 2 video reels, on-page SEO groundwork, and website maintenance.',
        url: 'https://www.salhurry.in/packages#business-growth'
      },
      {
        '@type': 'Offer',
        name: 'Premium Brand Package',
        price: '29999',
        priceCurrency: 'INR',
        description: 'Full brand build-out with dedicated manager, 15+ creatives, 4-6 reels, 1 shoot/mo, advanced SEO, and an included 3-page landing page.',
        url: 'https://www.salhurry.in/packages#premium-brand'
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DigitalMarketingPackagesContent />
      <Partners />
      <CTA />
      <Footer />
    </main>
  );
}
