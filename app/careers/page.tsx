import React from 'react';
import Navbar from '@/layouts/navbar';
import Footer from '@/layouts/footer';

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

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <div className="bg-[#F9FAFB] p-12 md:p-20 rounded-[40px] border border-gray-100">
          <h2 className="text-3xl font-bold mb-6">Current Openings</h2>
          <p className="text-gray-500 text-lg">
            Thank you for your interest in joining SalHurry. <br />
            Currently, there are <span className="text-black font-bold">no positions open</span>. 
          </p>
          <p className="text-gray-400 mt-4">
            Please check back later or follow us on our social media for updates.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
