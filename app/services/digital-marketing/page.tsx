import React from 'react';
import Navbar from '@/layouts/navbar';
import Footer from '@/layouts/footer';
import Partners from '@/components/partners';
import CTA from '@/components/cta';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Target, TrendingUp, BarChart3, Megaphone, ArrowRight, CheckCircle2, Zap, Users, Globe } from 'lucide-react';

export default function DigitalMarketingPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative bg-[#0A0A0A] overflow-hidden pb-24">
        {/* Neon Smudge Effect */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#2D3321] blur-[120px] rounded-full opacity-40 pointer-events-none"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-[#1A1C18] blur-[100px] rounded-full opacity-30 pointer-events-none"></div>
        
        <Navbar />
        
        <div className="px-6 md:px-12 max-w-7xl mx-auto pt-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Digital Marketing <br />
              <span className="text-[#A3E635]">Growth Systems</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-12">
              We don&apos;t just run ads. We build comprehensive growth engines that capture, nurture, and convert high-quality leads into loyal customers.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#A3E635] text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all">
                Get Started
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>

      <Partners />

      {/* Core Services Grid */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 border border-gray-200 rounded-full text-[10px] uppercase tracking-widest text-gray-500 mb-6">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Comprehensive Growth Solutions
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Performance Marketing',
              description: 'Data-driven campaigns across Google, Meta, and LinkedIn optimized for ROI.',
              icon: Target
            },
            {
              title: 'SEO & Content',
              description: 'Dominating search results through technical excellence and authority building.',
              icon: TrendingUp
            },
            {
              title: 'Analytics & Insights',
              description: 'Deep-dive tracking to understand every touchpoint in your customer journey.',
              icon: BarChart3
            },
            {
              title: 'Brand Strategy',
              description: 'Positioning your brand as the undisputed leader in your market category.',
              icon: Megaphone
            }
          ].map((service, idx) => (
            <div key={idx} className="p-8 rounded-[32px] bg-[#F9FAFB] border border-gray-100 hover:border-[#A3E635] transition-all group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#A3E635] transition-colors">
                <service.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Growth Methodology Section */}
      <section className="bg-[#0A0A0A] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="inline-block px-4 py-1 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-[#A3E635] mb-6">
                Our Methodology
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                How We Scale <br />Your Business
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Our approach is rooted in data and driven by results. We follow a rigorous process to ensure every dollar spent contributes to your bottom line.
              </p>
              <div className="space-y-4">
                {[
                  'Deep Market & Competitor Analysis',
                  'Multi-Channel Funnel Architecture',
                  'Continuous A/B Testing & Optimization',
                  'Real-time Performance Reporting'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-[#A3E635]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] md:h-[600px] rounded-[40px] overflow-hidden">
              <Image 
                src="https://picsum.photos/seed/marketing-data/800/1000"
                alt="Marketing Strategy"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Audit & Strategy',
                desc: 'We analyze your current performance and build a custom roadmap for growth.'
              },
              {
                step: '02',
                title: 'Execution & Launch',
                desc: 'Our experts deploy high-converting campaigns across the most relevant channels.'
              },
              {
                step: '03',
                title: 'Scale & Dominate',
                desc: 'We double down on what works to maximize your market share and revenue.'
              }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:border-[#A3E635] transition-all">
                <span className="text-4xl font-bold text-[#A3E635] block mb-6">{item.step}</span>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Zap, label: 'Fast Execution', val: '24h' },
              { icon: Users, label: 'Expert Team', val: '25+' },
              { icon: Globe, label: 'Global Reach', val: '15+' },
              { icon: BarChart3, label: 'ROI Focused', val: '4.5x' }
            ].map((stat, i) => (
              <div key={i} className="p-8 rounded-[32px] bg-[#F9FAFB] border border-gray-100 text-center">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-sm">
                  <stat.icon className="w-6 h-6 text-[#A3E635]" />
                </div>
                <h4 className="text-3xl font-bold mb-1">{stat.val}</h4>
                <p className="text-[10px] uppercase tracking-widest text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
          <div>
            <span className="inline-block px-4 py-1 border border-gray-200 rounded-full text-[10px] uppercase tracking-widest text-gray-500 mb-6">
              Why SalHurry?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8">
              We Don&apos;t Just Promise Results, We Deliver Them.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              In a world of noise, we help your brand stand out. Our digital marketing strategies are built on a foundation of deep technical expertise and creative excellence.
            </p>
            <button className="flex items-center gap-2 font-bold text-black border-b-2 border-[#A3E635] pb-1 hover:gap-4 transition-all">
              Learn more about our approach <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
