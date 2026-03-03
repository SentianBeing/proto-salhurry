import React from 'react';
import Navbar from '@/layouts/navbar';
import Footer from '@/layouts/footer';
import JobBoard from '@/components/job-board';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers at SalHurry | Join Our Digital Growth Team',
  description: 'Join SalHurry in Trivandrum, Kerala. We are always looking for talented digital marketers, web developers, and SEO engineers.',
  alternates: {
    canonical: '/careers',
  },
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative bg-[#0A0A0A] overflow-hidden pb-24">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#2D3321] blur-[120px] rounded-full opacity-40 pointer-events-none"></div>
        <Navbar />
        <div className="px-6 md:px-12 max-w-7xl mx-auto pt-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">Careers</h1>
          <p className="text-xl text-gray-400">Join our team of digital magicians.</p>
        </div>
      </div>

      <JobBoard />

      <Footer />
    </main>
  );
}
