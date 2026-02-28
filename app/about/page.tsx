import React from 'react';
import Navbar from '@/layouts/navbar';
import Footer from '@/layouts/footer';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Target, Lightbulb, Shield, Zap, Users, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative bg-[#0A0A0A] overflow-hidden pb-24">
        {/* Neon Smudge Effect */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#2D3321] blur-[120px] rounded-full opacity-40 pointer-events-none"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-[#1A1C18] blur-[100px] rounded-full opacity-30 pointer-events-none"></div>

        <Navbar />

        <div className="px-6 md:px-12 max-w-7xl mx-auto pt-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-[#A3E635] mb-6">
              About SalHurry
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              We Architect <br />
              <span className="text-[#A3E635]">Growth Systems</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-12">
              SalHurry is a strategy-first growth platform based in Trivandrum, Kerala. We work with ambitious businesses across Kerala and the UAE to build structured, scalable growth systems.
            </p>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] md:h-[600px] rounded-[40px] overflow-hidden shadow-2xl">
            <Image
              src="https://picsum.photos/seed/about-team/800/1000"
              alt="Our Team"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8">Who We Are</h2>
            <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
              <p>
                We are not just a digital marketing agency. We design growth architecture — combining strategy, creative execution, and performance intelligence to help brands expand beyond traditional limits.
              </p>
              <p>
                SalHurry operates as a venture under <span className="text-black font-bold">DiveGrid Private Limited</span>, our parent company focused on building structured business ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[#F9FAFB] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">Our Approach</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Most agencies focus on posting. We focus on positioning. Most agencies sell execution. We architect growth systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Market Positioning', icon: Target },
              { title: 'Revenue Pathway Design', icon: Zap },
              { title: 'Campaign Architecture', icon: Lightbulb },
              { title: 'Funnel Mapping', icon: Users },
              { title: 'Performance Alignment', icon: Shield }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:border-[#A3E635] transition-all group">
                <div className="w-12 h-12 bg-[#F9FAFB] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#A3E635] transition-colors">
                  <item.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
            ))}
            <div className="bg-[#0A0A0A] p-8 rounded-[32px] flex flex-col justify-center text-white">
              <p className="text-lg font-medium mb-4">Execution is optional. Strategy is foundational.</p>
              <p className="text-[#A3E635] font-bold">We believe growth is not accidental — it is engineered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8">What Makes Us Different</h2>
            <div className="space-y-4">
              {[
                'Strategy-first engagement model',
                'Hybrid growth (offline + digital integration)',
                'Data-backed decision systems',
                'Creative campaign engineering',
                'Performance-layer monetization'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700 text-lg">
                  <CheckCircle2 className="w-6 h-6 text-[#A3E635]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-gray-500 italic">
              We don’t chase vanity metrics. We build measurable expansion pathways.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-[#0A0A0A] p-10 rounded-[40px] text-white">
              <h3 className="text-2xl font-bold mb-4">Where We Operate</h3>
              <p className="text-gray-400 mb-6">Headquartered in Trivandrum, Kerala, we actively serve businesses in:</p>
              <div className="grid grid-cols-2 gap-4">
                {['Trivandrum', 'Kochi', 'Kerala Hubs', 'Select UAE Markets'].map((city, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#A3E635]" />
                    <span className="text-sm font-medium">{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-[#F9FAFB] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-[40px] overflow-hidden">
              <Image
                src="https://picsum.photos/seed/leadership/800/1000"
                alt="Leadership"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8">Our Leadership</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                SalHurry is led by <span className="text-black font-bold">Kasinathan, Karthik DS</span> and <span className="text-black font-bold">Akhijith Raj</span>, co-founders and growth architects under DiveGrid Private Limited.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                With experience leading operations, strategy, and execution teams across multiple industries, the founders bring structured thinking and performance discipline into every engagement.
              </p>
              <div className="p-8 bg-white rounded-[32px] border border-gray-100">
                <p className="text-gray-600 italic">
                  &quot;The team is intentionally small — but highly experienced. Each member has previously held leadership or execution-critical roles in their respective domains.&quot;
                </p>
                <div className="mt-6 flex gap-4">
                  <div className="px-4 py-2 bg-[#F9FAFB] rounded-full text-xs font-bold uppercase tracking-widest">Lean</div>
                  <div className="px-4 py-2 bg-[#F9FAFB] rounded-full text-xs font-bold uppercase tracking-widest">Sharp</div>
                  <div className="px-4 py-2 bg-[#F9FAFB] rounded-full text-xs font-bold uppercase tracking-widest">Intentional</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-12">Our Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Growth requires clarity', step: '01' },
            { title: 'Clarity requires strategy', step: '02' },
            { title: 'Strategy requires discipline', step: '03' }
          ].map((item, i) => (
            <div key={i} className="p-10 rounded-[40px] bg-[#0A0A0A] text-white">
              <span className="text-[#A3E635] font-bold text-sm mb-4 block uppercase tracking-widest">Step {item.step}</span>
              <h3 className="text-2xl font-bold">{item.title}</h3>
            </div>
          ))}
        </div>
        <p className="mt-16 text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
          Everything we build is rooted in passion, structured thinking, and long-term impact. SalHurry is not built to be the biggest agency. It is built to be the <span className="text-black font-bold">most trusted growth partner</span>.
        </p>
      </section>

      {/* Final Positioning Block */}
      <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto py-24">
        <div className="relative bg-[#A3E635] p-12 md:p-20 rounded-[40px] md:rounded-[60px] overflow-hidden text-black">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">SalHurry is designed for you.</h2>
              <p className="text-lg font-medium opacity-80 mb-8">If you are looking for structured GTM systems, revenue-focused marketing, and clear execution pathways.</p>
              <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all flex items-center gap-2">
                Start Your Journey <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              {[
                'Structured GTM systems',
                'Revenue-focused marketing',
                'Clear execution pathways',
                'Long-term growth partnerships'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-bold text-xl">
                  <CheckCircle2 className="w-6 h-6" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
