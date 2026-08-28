import React from 'react';
import Navbar from '@/layouts/navbar';
import Footer from '@/layouts/footer';
import CTA from '@/components/cta';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import AllWebsiteProjectsContent from '@/components/all-website-projects-content';
import WebsiteProjectsHero from '@/components/website-projects-hero';

export const metadata: Metadata = constructMetadata({
  title: 'Website Projects | Design & Build Quality Showcase | SalHurry',
  description: 'Explore recent website designs done by SalHurry across finance, e-commerce, fashion, healthcare, photography, coaching, HVAC, construction, and IT.',
  path: '/website-projects',
  openGraph: {
    title: 'Website Projects | SalHurry Web Showcase',
    description: 'Explore recent website designs done by SalHurry across diverse industries for a general sense of our design and build quality.',
    url: 'https://www.salhurry.in/website-projects',
    siteName: 'SalHurry Growth Systems',
    type: 'website'
  }
});

export default function WebsiteProjectsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Website Projects by SalHurry',
    description: 'Showcase of recent website designs engineered by SalHurry across diverse industries.',
    url: 'https://www.salhurry.in/website-projects',
    provider: {
      '@type': 'Organization',
      name: 'SalHurry by Divegrid',
      url: 'https://www.salhurry.in'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        {/* Navigation */}
        <div className="relative bg-[#0A0A0A] z-50">
          <Navbar />
        </div>

        {/* Dynamic Framer Polaroid Explode Hero Section */}
        <WebsiteProjectsHero />

        {/* Featured Video Showcase Card (Clean Whitespace below Hero) */}
        <section className="relative max-w-6xl mx-auto px-4 sm:px-6 my-16 sm:my-24 z-30">
          <div className="relative rounded-[28px] sm:rounded-[38px] overflow-hidden bg-[#0D0D0D] border-2 border-black/80 p-2 sm:p-3 shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
            <video
              src="https://res.cloudinary.com/der2xk0cv/video/upload/v1787922694/salhurry-website-developement_brtqdz.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-[22px] sm:rounded-[32px] object-cover"
            />
          </div>
        </section>

        {/* Website Projects Grid Showcase Section */}
        <section id="projects-grid" className="py-12 sm:py-20 px-6 md:px-12">
          <AllWebsiteProjectsContent />
        </section>

        {/* Quality Commitment Banner */}
        <section className="bg-neutral-900 py-20 px-6 text-white text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <span className="text-[#A3E635] text-xs font-bold uppercase tracking-widest block mb-4">
              WHY OUR CLIENTS TRUST US
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              Need a High-Performance Website for Your Brand?
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you need a full custom build, an e-commerce platform, or a website revamp, our engineering and design team is ready to scale your online presence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/916282687001"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#A3E635] text-black font-bold rounded-full hover:bg-white transition-all text-xs uppercase tracking-wider"
              >
                Discuss Your Website Project
              </a>
            </div>
          </div>
        </section>

        <CTA />
        <Footer />
      </main>
    </>
  );
}
