import React from 'react';
import Navbar from '@/layouts/navbar';
import Footer from '@/layouts/footer';
import Partners from '@/components/partners';
import CTA from '@/components/cta';
import ContactButton from '@/components/contact-button';
import FivePillars from '@/components/five-pillars';
import Image from 'next/image';
import { constructMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import { Target, TrendingUp, BarChart3, Megaphone, ArrowRight, CheckCircle2, Zap, Users, Globe, ArrowUp } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Data-Driven Digital Marketing Services in Kerala | SalHurry',
  description: 'Data-driven performance marketing, SEO, and brand strategy services by SalHurry to build comprehensive growth engines for your business.',
  path: '/services/digital-marketing',
});

export default function DigitalMarketingPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative bg-[#0A0A0A] overflow-hidden pb-24">
        {/* Neon Smudge Effect */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#2D3321] blur-[120px] rounded-full opacity-40 pointer-events-none"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-[#1A1C18] blur-[100px] rounded-full opacity-30 pointer-events-none"></div>

        <Navbar />

        <div className="relative z-10 pt-16 lg:pt-24 pb-0 lg:pb-12">
          <div className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-xl relative z-20 pb-12 lg:pb-0 pt-8 lg:pt-0">
              <span className="inline-block px-4 py-1.5 border border-[#A3E635]/50 text-[#A3E635] rounded-full text-[10px] tracking-[0.2em] font-medium uppercase mb-8 shadow-[0_0_15px_rgba(163,230,53,0.15)] bg-[#A3E635]/5">
                DIGITAL MARKETING
              </span>
              <h1 className="text-5xl md:text-[5.5rem] font-semibold text-white mb-6 leading-[1.05] tracking-tight">
                We Help <br />
                Companies <br />
                <span className="font-serif italic font-normal text-white">Grow Faster</span>
              </h1>
              <p className="text-[15px] sm:text-[17px] text-gray-300 leading-[1.8] mb-12 max-w-sm font-light">
                We help businesses generate qualified leads, convert more customers, and increase revenue through strategic SEO and digital marketing systems  </p>
              <div className="flex flex-wrap gap-4">
                <ContactButton
                  text="Get Started"
                  className="border border-[#A3E635]/80 shadow-[0_0_20px_rgba(163,230,53,0.2)] bg-black/50 backdrop-blur-md text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#A3E635]/10 mt-2 transition-all flex items-center gap-2"
                />
              </div>
            </div>

            {/* Desktop spacer to keep layout heights balanced */}
            <div className="hidden lg:block h-[500px]"></div>
          </div>

          {/* Bright Neon Smudge behind the grid */}
          <div className="absolute top-1/2 lg:right-[-5%] -translate-y-1/2 w-[80%] lg:w-[50vw] h-[80%] lg:h-[70vh] bg-[#A3E635] blur-[180px] opacity-20 pointer-events-none rounded-full z-0"></div>

          {/* Right Content - Staggered Bento Grid */}
          <div
            className="relative w-full z-10 h-[600px] sm:h-[700px] lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:-right-4 lg:w-[60vw] lg:h-[800px]"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 95%, transparent)',
              maskImage: 'linear-gradient(to right, transparent, black 15%, black 95%, transparent)'
            }}
          >
            <div className="absolute inset-0 w-full h-full" style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)', maskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)' }}>
              <div className="flex gap-4 sm:gap-6 absolute top-0 left-0 w-full h-[200%] -rotate-[4deg] scale-110 lg:scale-[1.10] origin-center justify-center pt-12">

                {/* Column 1 - Starts lower, fast scroll */}
                <div className="flex flex-col gap-4 sm:gap-6 w-[180px] sm:w-[220px] shrink-0 mt-32 overflow-visible">
                  <div className="flex flex-col gap-4 sm:gap-6 animate-scroll-up-fast">
                    {/* Card Set 1 */}
                    <div className="bg-[#1A1A1A] rounded-[24px] p-5 aspect-square flex flex-col justify-between border border-white/5 relative overflow-hidden group hover:border-[#A3E635]/30 transition-all cursor-pointer">
                      <div className="text-gray-400 text-[10px] font-bold tracking-wider relative z-10">ROAS</div>
                      <div className="flex items-center gap-2 relative z-10">
                        <span className="text-3xl font-semibold text-white">340%</span>
                        <div className="w-5 h-5 rounded-full bg-[#A3E635] flex items-center justify-center">
                          <ArrowUp className="w-3 h-3 text-black stroke-[3]" />
                        </div>
                      </div>
                      {/* fake chart line */}
                      <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-80 flex items-end">
                        <svg viewBox="0 0 100 40" className="w-full h-full stroke-[#A3E635]" fill="none" strokeWidth="1.5" preserveAspectRatio="none">
                          <path d="M0,40 Q15,30 25,35 T50,20 T75,25 T100,5" />
                        </svg>
                      </div>
                    </div>
                    <div className="relative rounded-[24px] aspect-[4/5] bg-gray-900 overflow-hidden shadow-2xl">
                      <Image unoptimized src="https://picsum.photos/400/500?random=11" alt="Growth Metric" fill className="object-cover" />
                      <div className="absolute top-4 left-4 bg-[#A3E635] text-black text-[9px] font-bold px-2.5 py-1.5 rounded-full flex items-center gap-1 shadow-md z-10">
                        <ArrowUp className="w-2.5 h-2.5 stroke-[3]" /> 340% ROAS
                      </div>
                    </div>
                    <div className="bg-[#A3E635] rounded-[24px] aspect-square flex items-center justify-center shadow-[inset_0_-10px_20px_rgba(0,0,0,0.1)]">
                      <Globe className="w-16 h-16 text-black opacity-80" strokeWidth={1} />
                    </div>

                    {/* Card Set 1 (Duplicated for Infinite Scroll Loop) */}
                    <div className="bg-[#1A1A1A] rounded-[24px] p-5 aspect-square flex flex-col justify-between border border-white/5 relative overflow-hidden group hover:border-[#A3E635]/30 transition-all cursor-pointer">
                      <div className="text-gray-400 text-[10px] font-bold tracking-wider relative z-10">ROAS</div>
                      <div className="flex items-center gap-2 relative z-10">
                        <span className="text-3xl font-semibold text-white">340%</span>
                        <div className="w-5 h-5 rounded-full bg-[#A3E635] flex items-center justify-center">
                          <ArrowUp className="w-3 h-3 text-black stroke-[3]" />
                        </div>
                      </div>
                      {/* fake chart line */}
                      <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-80 flex items-end">
                        <svg viewBox="0 0 100 40" className="w-full h-full stroke-[#A3E635]" fill="none" strokeWidth="1.5" preserveAspectRatio="none">
                          <path d="M0,40 Q15,30 25,35 T50,20 T75,25 T100,5" />
                        </svg>
                      </div>
                    </div>
                    <div className="relative rounded-[24px] aspect-[4/5] bg-gray-900 overflow-hidden shadow-2xl">
                      <Image unoptimized src="https://picsum.photos/400/500?random=11" alt="Growth Metric" fill className="object-cover" />
                      <div className="absolute top-4 left-4 bg-[#A3E635] text-black text-[9px] font-bold px-2.5 py-1.5 rounded-full flex items-center gap-1 shadow-md z-10">
                        <ArrowUp className="w-2.5 h-2.5 stroke-[3]" /> 340% ROAS
                      </div>
                    </div>
                    <div className="bg-[#A3E635] rounded-[24px] aspect-square flex items-center justify-center shadow-[inset_0_-10px_20px_rgba(0,0,0,0.1)]">
                      <Globe className="w-16 h-16 text-black opacity-80" strokeWidth={1} />
                    </div>
                  </div>
                </div>

                {/* Column 2 - Staggered high, slow scroll */}
                <div className="flex flex-col gap-4 sm:gap-6 w-[180px] sm:w-[220px] shrink-0 -mt-12 overflow-visible">
                  <div className="flex flex-col gap-4 sm:gap-6 animate-scroll-up-slow">
                    {/* Card Set 2 */}
                    <div className="relative rounded-[24px] aspect-[4/5] bg-gray-800 overflow-hidden shadow-2xl">
                      <Image unoptimized src="https://picsum.photos/400/500?random=12" alt="Sleep Product" fill className="object-cover" />
                    </div>
                    <div className="bg-black rounded-[24px] aspect-square flex items-center justify-center border border-white/5 relative overflow-hidden group shadow-2xl">
                      <Globe className="w-12 h-12 text-[#A3E635]" strokeWidth={1.5} />
                      <svg viewBox="0 0 100 100" className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] animate-[spin_12s_linear_infinite]">
                        <path id="circlePath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
                        <text className="text-[10px] font-mono tracking-[0.16em] fill-white uppercase font-bold">
                          <textPath href="#circlePath" startOffset="0%">
                            convert • grow • optimize • strategize •
                          </textPath>
                        </text>
                      </svg>
                    </div>
                    <div className="bg-white rounded-[24px] p-6 aspect-[4/5] flex flex-col justify-between shadow-xl">
                      <div>
                        <div className="text-gray-900 text-sm font-semibold mb-2">Growth</div>
                        <div className="flex items-center gap-2">
                          <span className="text-4xl font-semibold text-black tracking-tight">96%</span>
                          <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                            <ArrowUp className="w-3 h-3 text-gray-500 stroke-[3]" />
                          </div>
                        </div>
                      </div>
                      <p className="text-[10px] text-gray-500 font-medium leading-relaxed max-w-[80%] pb-4">Average increase in ROAS this month of our customers</p>
                    </div>

                    {/* Card Set 2 (Duplicated) */}
                    <div className="relative rounded-[24px] aspect-[4/5] bg-gray-800 overflow-hidden shadow-2xl">
                      <Image unoptimized src="https://picsum.photos/400/500?random=12" alt="Sleep Product" fill className="object-cover" />
                    </div>
                    <div className="bg-black rounded-[24px] aspect-square flex items-center justify-center border border-white/5 relative overflow-hidden group shadow-2xl">
                      <Globe className="w-12 h-12 text-[#A3E635]" strokeWidth={1.5} />
                      <svg viewBox="0 0 100 100" className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] animate-[spin_12s_linear_infinite]">
                        <path id="circlePath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
                        <text className="text-[10px] font-mono tracking-[0.16em] fill-white uppercase font-bold">
                          <textPath href="#circlePath" startOffset="0%">
                            convert • grow • optimize • strategize •
                          </textPath>
                        </text>
                      </svg>
                    </div>
                    <div className="bg-white rounded-[24px] p-6 aspect-[4/5] flex flex-col justify-between shadow-xl">
                      <div>
                        <div className="text-gray-900 text-sm font-semibold mb-2">Growth</div>
                        <div className="flex items-center gap-2">
                          <span className="text-4xl font-semibold text-black tracking-tight">96%</span>
                          <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                            <ArrowUp className="w-3 h-3 text-gray-500 stroke-[3]" />
                          </div>
                        </div>
                      </div>
                      <p className="text-[10px] text-gray-500 font-medium leading-relaxed max-w-[80%] pb-4">Average increase in ROAS this month of our customers</p>
                    </div>
                  </div>
                </div>

                {/* Column 3 - Staggered slightly lower than 2, medium scroll */}
                <div className="flex flex-col gap-4 sm:gap-6 w-[180px] sm:w-[220px] shrink-0 mt-8 overflow-visible">
                  <div className="flex flex-col gap-4 sm:gap-6 animate-scroll-up">
                    {/* Card Set 3 */}
                    <div className="bg-white rounded-[24px] p-6 aspect-[4/5] flex flex-col justify-between shadow-xl relative overflow-hidden">
                      <div>
                        <div className="text-gray-900 text-sm font-semibold mb-2">Growth</div>
                        <div className="flex items-center gap-2">
                          <span className="text-4xl font-semibold text-black tracking-tight">96%</span>
                          <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                            <ArrowUp className="w-3 h-3 text-gray-500 stroke-[3]" />
                          </div>
                        </div>
                      </div>
                      <p className="text-[10px] text-gray-500 font-medium leading-relaxed max-w-[80%] pb-8">Average increase in ROAS this month of our customers</p>
                    </div>
                    <div className="relative rounded-[24px] aspect-square bg-gray-900 overflow-hidden shadow-2xl">
                      <Image unoptimized src="https://picsum.photos/400/400?random=14" alt="Bags" fill className="object-cover" />
                      <div className="absolute top-4 right-4 bg-[#A3E635] text-black text-[9px] font-bold px-2.5 py-1.5 rounded-full flex items-center gap-1 shadow-md z-10">
                        <ArrowUp className="w-2.5 h-2.5 stroke-[3]" /> 340% ROAS
                      </div>
                    </div>
                    <div className="bg-[#A3E635]/10 rounded-[24px] aspect-[4/5] flex items-center justify-center border border-[#A3E635]/20">
                      <Users className="w-16 h-16 text-[#A3E635] opacity-90" strokeWidth={1.5} />
                    </div>

                    {/* Card Set 3 (Duplicated) */}
                    <div className="bg-white rounded-[24px] p-6 aspect-[4/5] flex flex-col justify-between shadow-xl relative overflow-hidden">
                      <div>
                        <div className="text-gray-900 text-sm font-semibold mb-2">Growth</div>
                        <div className="flex items-center gap-2">
                          <span className="text-4xl font-semibold text-black tracking-tight">96%</span>
                          <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                            <ArrowUp className="w-3 h-3 text-gray-500 stroke-[3]" />
                          </div>
                        </div>
                      </div>
                      <p className="text-[10px] text-gray-500 font-medium leading-relaxed max-w-[80%] pb-8">Average increase in ROAS this month of our customers</p>
                    </div>
                    <div className="relative rounded-[24px] aspect-square bg-gray-900 overflow-hidden shadow-2xl">
                      <Image unoptimized src="https://picsum.photos/400/400?random=14" alt="Bags" fill className="object-cover" />
                      <div className="absolute top-4 right-4 bg-[#A3E635] text-black text-[9px] font-bold px-2.5 py-1.5 rounded-full flex items-center gap-1 shadow-md z-10">
                        <ArrowUp className="w-2.5 h-2.5 stroke-[3]" /> 340% ROAS
                      </div>
                    </div>
                    <div className="bg-[#A3E635]/10 rounded-[24px] aspect-[4/5] flex items-center justify-center border border-[#A3E635]/20">
                      <Users className="w-16 h-16 text-[#A3E635] opacity-90" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fade overlays removed - using pure native CSS alpha masks on the container for seamless blending over the neon smudge */}
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
                How We <span className="font-serif italic font-normal text-[#A3E635]">Scale</span> <br />Your Business
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
                alt="SalHurry Digital Marketing Strategy and Growth Funnel"
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
              Discover our data-driven digital marketing approach <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <FivePillars />
      <CTA />
      <Footer />
    </main>
  );
}
