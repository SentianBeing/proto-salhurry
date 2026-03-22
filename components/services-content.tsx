'use client';

import React from 'react';
import { Share2, Tag, Quote, Target, TrendingUp, Search, BarChart, ArrowRight, Activity, Map, MousePointerClick, PieChart, Focus, Crosshair } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';
import ContactButton from './contact-button';

export default function ServicesContent() {
  return (
    <section className="py-24 relative bg-[#060606] px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto z-10 w-full space-y-12 md:space-y-16">
      
      {/* Section 1: Go-To-Market Strategy */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#1A1A1A] rounded-[40px] md:rounded-[60px] p-8 sm:p-12 md:p-16 w-full shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/5 relative overflow-hidden"
      >
        {/* Glow Effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#A3E635]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="lg:w-1/2 flex flex-col items-start">
             <span className="inline-block px-4 py-1.5 border border-[#A3E635]/50 text-[#A3E635] rounded-full text-[10px] tracking-[0.2em] font-medium uppercase mb-6 shadow-[0_0_15px_rgba(163,230,53,0.15)] bg-[#A3E635]/5">
                Go-To-Market Strategy
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Launch the right way. Reach the right people. <span className="font-serif italic font-normal text-white">From day one.</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-xl">
              Most businesses launch and hope. We launch with a plan. Whether you&apos;re introducing a new product, entering a new market, or repositioning an existing brand — we build the complete strategy that takes you from idea to market with clarity and confidence.
            </p>

            {/* Who this is for pills */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-white/80">
                <Tag className="w-4 h-4 text-[#A3E635]" /> Who this is for
              </div>
              <div className="flex flex-wrap gap-2">
                {['New Product Launches', 'Service Business Launches', 'D2C Brand Launches', 'Startups Going To Market', 'Local Businesses Expanding Online', 'International Brands Entering India'].map((pill, i) => (
                  <span key={i} className="inline-block px-3 py-1.5 border border-white/10 rounded-full text-[11px] sm:text-xs text-gray-300 bg-white/5 whitespace-nowrap">
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <ContactButton
                    text={
                        <span className="flex items-center gap-2">
                            Plan My Launch <ArrowRight className="w-4 h-4" />
                        </span>
                    }
                    className="inline-flex items-center justify-center gap-2 bg-[#A3E635] text-black px-8 py-3.5 rounded-full font-bold hover:bg-white transition-all hover:scale-105 shadow-[0_0_20px_rgba(163,230,53,0.2)]"
                />
                <Link href="/services/growth-strategy" className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white transition-colors group">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center">
            {/* What's included */}
            <div className="space-y-6 mb-10 bg-white/5 rounded-[30px] p-8 border border-white/10">
              <h3 className="text-lg font-bold text-white border-b border-white/10 pb-4 mb-4">What&apos;s Included</h3>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#A3E635]/10 flex items-center justify-center shrink-0">
                  <Search className="w-5 h-5 text-[#A3E635]" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">Market & Competitor Research</h4>
                  <p className="text-gray-400 text-sm">Know exactly who you&apos;re up against and where the gap is.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#A3E635]/10 flex items-center justify-center shrink-0">
                  <Crosshair className="w-5 h-5 text-[#A3E635]" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">Target Audience & Positioning</h4>
                  <p className="text-gray-400 text-sm">Define who you&apos;re for and why they should choose you.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#A3E635]/10 flex items-center justify-center shrink-0">
                  <Map className="w-5 h-5 text-[#A3E635]" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">Launch Roadmap</h4>
                  <p className="text-gray-400 text-sm">A clear, step-by-step plan from pre-launch to first 90 days.</p>
                </div>
              </div>
            </div>

            {/* Pull Quote */}
            <div className="relative pl-6 py-2">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#A3E635] rounded-full"></div>
              <Quote className="w-6 h-6 text-[#A3E635] opacity-50 mb-2" />
              <p className="text-lg md:text-xl font-serif italic text-white leading-relaxed">
                "Most brands don't fail because of a bad product. They fail because the wrong people heard about it, in the wrong way, at the wrong time."
              </p>
            </div>
          </div>
        </div>
      </motion.div>


      {/* Section 2: Paid Advertising & Performance Marketing */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#1A1A1A] rounded-[40px] md:rounded-[60px] p-8 sm:p-12 md:p-16 w-full shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/5 relative overflow-hidden"
      >
         {/* Glow Effect */}
         <div className="absolute top-0 left-0 w-64 h-64 bg-[#A3E635]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20">
          <div className="lg:w-1/2 flex flex-col items-start">
            <span className="inline-block px-4 py-1.5 border border-[#A3E635]/50 text-[#A3E635] rounded-full text-[10px] tracking-[0.2em] font-medium uppercase mb-6 shadow-[0_0_15px_rgba(163,230,53,0.15)] bg-[#A3E635]/5">
                Paid Advertising
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Your ad budget should make money. <span className="font-serif italic font-normal text-white">Not just spend it.</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-xl">
              We run performance-driven campaigns across Google, Meta, and Instagram — built entirely around results you can measure. Every campaign is tracked, tested, and optimised continuously so your cost per lead goes down and your returns go up. No vanity metrics. No guesswork. Just growth.
            </p>

            {/* Who this is for pills */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-white/80">
                 <Tag className="w-4 h-4 text-[#A3E635]" /> Who this is for
              </div>
              <div className="flex flex-wrap gap-2">
                {['E-commerce Brands', 'Service Businesses', 'Startups Scaling Fast', 'Local Businesses', 'D2C Brands', 'Businesses Unhappy With Current Agency Results'].map((pill, i) => (
                  <span key={i} className="inline-block px-3 py-1.5 border border-white/10 rounded-full text-[11px] sm:text-xs text-gray-300 bg-white/5 whitespace-nowrap">
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                 <ContactButton
                    text={
                        <span className="flex items-center gap-2">
                            Get A Free Ad Audit <ArrowRight className="w-4 h-4" />
                        </span>
                    }
                    className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-[#A3E635] px-8 py-3.5 rounded-full font-bold hover:bg-[#A3E635] hover:text-black transition-all hover:scale-105 shadow-[0_0_20px_rgba(163,230,53,0.1)]"
                />
                <Link href="/services/performance-marketing" className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white transition-colors group">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center">
             {/* Metric Strip */}
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                <div className="bg-[#A3E635]/10 border border-[#A3E635]/20 rounded-2xl p-4 flex flex-col items-center justify-center text-center group hover:bg-[#A3E635]/20 transition-colors">
                    <span className="text-2xl md:text-3xl font-bold text-[#A3E635] mb-1">4.1x</span>
                    <span className="text-[10px] uppercase tracking-wider text-gray-300 font-medium">Avg. ROAS<br/>Delivered</span>
                </div>
                <div className="bg-[#A3E635]/10 border border-[#A3E635]/20 rounded-2xl p-4 flex flex-col items-center justify-center text-center group hover:bg-[#A3E635]/20 transition-colors">
                    <span className="text-2xl md:text-3xl font-bold text-[#A3E635] mb-1">62%</span>
                    <span className="text-[10px] uppercase tracking-wider text-gray-300 font-medium">Reduction in<br/>Cost Per Lead</span>
                </div>
                <div className="bg-[#A3E635]/10 border border-[#A3E635]/20 rounded-2xl p-4 flex flex-col items-center justify-center text-center group hover:bg-[#A3E635]/20 transition-colors">
                    <span className="text-2xl md:text-3xl font-bold text-[#A3E635] mb-1">90</span>
                    <span className="text-[10px] uppercase tracking-wider text-gray-300 font-medium">Days to full<br/>performance</span>
                </div>
            </div>

            {/* What's included */}
            <div className="space-y-6 bg-white/5 rounded-[30px] p-8 border border-white/10">
               <h3 className="text-lg font-bold text-white border-b border-white/10 pb-4 mb-4">What&apos;s Included</h3>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#A3E635]/10 flex items-center justify-center shrink-0">
                  <MousePointerClick className="w-5 h-5 text-[#A3E635]" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">Google & Meta Ads Management</h4>
                  <p className="text-gray-400 text-sm">Full campaign setup, management, and optimisation across the platforms that matter.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#A3E635]/10 flex items-center justify-center shrink-0">
                  <Activity className="w-5 h-5 text-[#A3E635]" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">Audience Targeting & Creative Testing</h4>
                  <p className="text-gray-400 text-sm">Finding who converts and what messaging works, through continuous A/B testing.</p>
                </div>
              </div>

               <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#A3E635]/10 flex items-center justify-center shrink-0">
                  <PieChart className="w-5 h-5 text-[#A3E635]" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">Performance Reporting</h4>
                  <p className="text-gray-400 text-sm">Clear reporting on ROAS, cost per lead, and revenue — in plain language.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
