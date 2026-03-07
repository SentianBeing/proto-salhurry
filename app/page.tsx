import Navbar from '@/layouts/navbar';
import Hero from '@/components/hero';
import Services from '@/components/services';
import About from '@/components/about';
import Process from '@/components/process';
import Projects from '@/components/projects';
import Blog from '@/components/blog';
import Testimonials from '@/components/testimonials';
import Partners from '@/components/partners';
import CTA from '@/components/cta';
import Footer from '@/layouts/footer';
import { sanityClient } from '@/lib/sanity.client';
import { latestBlogsQuery, allCaseStudiesQuery } from '@/lib/sanity.queries';
import { constructMetadata } from '@/lib/seo';
import { Suspense } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = constructMetadata({
  title: 'SalHurry Growth Systems: Scale Your Business in Kerala & UAE',
  description: 'SalHurry is a Growth Systems and Sales Acceleration company helping businesses in Kerala & UAE (Dubai, Abu Dhabi) with GTM strategy, SEO, and web development.',
  path: '/',
});

export const revalidate = 60; // Revalidate the homepage periodically

export default async function Home() {
  const latestBlogs = await sanityClient.fetch(latestBlogsQuery, { limit: 3 });
  const allCaseStudies = await sanityClient.fetch(allCaseStudiesQuery);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: 'SalHurry',
    url: 'https://salhurry.in',
    parentOrganization: {
      '@type': 'Organization',
      name: 'Divegrid Pvt Ltd',
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Kerala' },
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'UAE' },
      { '@type': 'City', name: 'Dubai' },
      { '@type': 'City', name: 'Abu Dhabi' },
    ],
    sameAs: [
      'https://www.linkedin.com/company/salhurryconnect/posts/?feedView=all',
      'https://www.instagram.com/salhurryconnect/',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <div className="relative bg-[#0A0A0A] overflow-hidden">
          {/* Neon Smudge Effect */}
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#2D3321] blur-[120px] rounded-full opacity-40 pointer-events-none"></div>
          <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-[#1A1C18] blur-[100px] rounded-full opacity-30 pointer-events-none"></div>

          <Navbar />
          <Hero />
        </div>
        <Services />
        <About />
        <Process />
        <Projects initialCaseStudies={allCaseStudies.slice(0, 4)} />
        <Suspense fallback={<div className="py-12 bg-[#0A0A0A] text-center text-gray-500">Loading Latest Insights...</div>}>
          <Blog initialPosts={latestBlogs} />
        </Suspense>
        <Testimonials />
        <Partners />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
