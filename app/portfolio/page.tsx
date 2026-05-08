import React from 'react';
import Navbar from '@/layouts/navbar';
import Footer from '@/layouts/footer';
import CTA from '@/components/cta';
import { Metadata } from 'next';
import { sanityClient } from '@/lib/sanity.client';
import { allPortfolioQuery } from '@/lib/sanity.queries';
import PortfolioGrid from '@/components/portfolio-grid';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Our Portfolio | SalHurry Growth Systems',
  description: 'Explore our recent works, case studies, and projects across Digital Marketing, Web Development, and Custom Software Solutions.',
  path: '/portfolio',
});

export const revalidate = 60;

export default async function PortfolioPage() {
  const portfolioItems = await sanityClient.fetch(allPortfolioQuery).catch(() => []);

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative bg-[#0A0A0A] overflow-hidden pb-24 px-6 rounded-b-[40px] md:rounded-b-[80px]">
        {/* Neon Smudge Effect */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#A3E635] blur-[150px] opacity-10 pointer-events-none rounded-full"></div>
        <Navbar />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center pt-12">
          <span className="inline-block px-4 py-1.5 border border-[#A3E635]/30 text-[#A3E635] bg-[#A3E635]/10 rounded-full text-[10px] tracking-[0.2em] uppercase mb-8 font-bold backdrop-blur-sm">
            Our Work
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Work That <span className="text-[#A3E635] italic font-serif">Speaks</span> For Itself
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            We don't just build websites and run campaigns. We build growth engines. Explore our latest projects and see how we've helped businesses scale.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <section className="py-24 px-6">
        <PortfolioGrid items={portfolioItems} />
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
