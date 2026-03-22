import React from 'react';
import Navbar from '@/layouts/navbar';
import Footer from '@/layouts/footer';
import ScrollReveal from '@/components/scroll-reveal';
import WhatsAppGenericMockup from '@/components/whatsapp-generic-mockup';
import Link from 'next/link';
import { MessageCircle, CalendarClock, ShieldCheck, Clock, ArrowRight, TrendingUp, MonitorSmartphone } from 'lucide-react';

export const metadata = {
  title: 'How We Do Work | SalHurry Growth Systems',
  description: 'Complete transparency in our execution process spanning web development, corporate branding, and enterprise applications. No black boxes. Just visibility.',
};

export default function HowWeWorkPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#1A1A1A]">
      {/* SECTION 1: Hero */}
      <div className="relative bg-[#0A0A0A] overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 px-6">
        <Navbar />
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 border border-[#A3E635]/30 text-[#A3E635] bg-[#A3E635]/10 rounded-full text-[10px] tracking-[0.2em] uppercase mb-8 font-bold backdrop-blur-sm">
              Our Process
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight max-w-5xl mx-auto">
              No Black Boxes. <span className="text-[#A3E635]">Just Full Visibility.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto mb-16 leading-relaxed">
              Most teams will send you a final report or a deployment link and disappear during the phases in between. You are left wondering where your investment went. We work entirely differently, building a constant communication loop around everything we do.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* SECTION 2: The Communication System */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          <ScrollReveal>
            <div className="bg-[#1A1A1A] rounded-[40px] p-8 md:p-12 border border-[#A3E635]/10 flex flex-col h-full relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#A3E635] opacity-[0.05] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 group-hover:opacity-[0.1] transition-opacity"></div>
              
              <div className="w-14 h-14 bg-[#A3E635]/10 rounded-2xl flex items-center justify-center text-[#A3E635] mb-8">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 leading-tight">Your project in your pocket. Every single day.</h3>
              <p className="text-gray-400 text-[16px] leading-relaxed mb-10 flex-grow font-light">
                From the very beginning, we create a dedicated WhatsApp group containing just you, your leadership team, and our execution team. Every day you will see the exact status of your project. Active milestones, integration blocks, creative changes, and any technical hurdles are flagged immediately. You never have to chase us for an update. By the time you start your morning, the progress is already sitting in your phone.
              </p>
              
              <div className="scale-[0.85] sm:scale-90 md:scale-100 origin-top">
                <WhatsAppGenericMockup />
              </div>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-8">
            <ScrollReveal delay={0.1}>
              <div className="bg-[#F9FAFB] p-10 rounded-[40px] flex flex-col sm:flex-row gap-8 items-start hover:-translate-y-1 transition-transform">
                <div className="w-16 h-16 shrink-0 bg-white rounded-2xl flex items-center justify-center text-black border border-gray-200 shadow-sm">
                  <CalendarClock className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">We call the meeting. You do not have to chase one.</h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] font-light">
                    If something is not working perfectly, whether a specific functional integration hit a technical limit, or a conceptual design needs a quick pivot, we do not wait for the monthly wrap up. We arrange a call right away to find an immediate resolution. We get on the line, walk you through the structural changes, and agree on the next logical move collaboratively. Regular check-ins happen constantly. The door is always open.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-[#A3E635] p-10 rounded-[40px] flex flex-col sm:flex-row gap-8 items-start hover:-translate-y-1 transition-transform">
                <div className="w-16 h-16 shrink-0 bg-black rounded-2xl flex items-center justify-center text-[#A3E635]">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">We focus exclusively on measurable outcomes.</h3>
                  <p className="text-black/80 leading-relaxed text-[15px] font-medium">
                    Every solid engagement requires dedicated testing and scaling phases. This applies to high end infrastructure code, custom application design, and brand repositioning alike. We iterate tightly, listen to the data, and build solely for efficiency. We are deeply invested in long term operational partnerships which only succeed when you see tangible business value.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-white p-10 rounded-[40px] flex flex-col sm:flex-row gap-8 items-start border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 shrink-0 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 border border-gray-100">
                  <Clock className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">Real responses.</h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] font-light">
                    We are available consistently. Systems and critical operations do not just stop because it is a weekend. If a critical server, application update, or vital piece of infrastructure requires an immediate set of eyes on a Saturday, it is handled on a Saturday. Average response times consistently remain under a two hour threshold.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* SECTION 3: Dedicated Call to Action Blocks */}
      <section className="py-24 px-6 md:px-12 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Explore How We Apply This Framework</h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Our philosophy of transparent, aggressive execution is applied across entirely different facets of your business. Choose your path below.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CTA: Performance Marketing */}
            <ScrollReveal delay={0.1}>
              <div className="bg-[#1A1A1A] p-10 md:p-14 rounded-[40px] flex flex-col items-start border border-white/5 hover:border-[#A3E635]/30 group transition-all h-full">
                <div className="w-16 h-16 bg-[#A3E635]/10 text-[#A3E635] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Data Driven Marketing</h3>
                <p className="text-gray-400 font-light leading-relaxed mb-10 flex-grow">
                  Discover how our transparent methodology radically shapes our approach to performance marketing, lead generation, and ROAS optimization.
                </p>
                <Link href="/services/performance-marketing" className="inline-flex items-center gap-2 bg-[#A3E635] text-black px-6 py-4 rounded-full text-sm font-bold hover:bg-white transition-all w-full md:w-auto justify-center">
                  Learn how we do marketing with you <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>

            {/* CTA: Web Development */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white p-10 md:p-14 rounded-[40px] flex flex-col items-start hover:shadow-2xl group transition-all h-full">
                <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <MonitorSmartphone className="w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Application & Web Development</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-10 border-l-4 border-black pl-4 flex-grow">
                  See how we deploy robust technical stacks and custom application engineering using this exact same transparent framework.
                </p>
                <Link href="/services/web-development" className="inline-flex items-center gap-2 bg-black text-white px-6 py-4 rounded-full text-sm font-bold hover:bg-[#A3E635] hover:text-black transition-all w-full md:w-auto justify-center">
                  Explore Website Development <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
