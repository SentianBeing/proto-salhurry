import React from 'react';
import Navbar from '@/layouts/navbar';
import Footer from '@/layouts/footer';
import ScrollReveal from '@/components/scroll-reveal';
import VideoCursorLink from '@/components/video-cursor-link';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Paperplane Wedding Studio — Case Study | SalHurry Growth Systems',
  description: "How SalHurry helped Paperplane Wedding Studio build a luxury brand presence, a premium website, and a niche digital marketing strategy that reached Kerala's most discerning clients.",
  path: '/projects/paperplane-wedding-studio',
});

export default function PaperplaneCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How We Helped Paperplane Wedding Studio Reach the Clients They Were Always Meant To Serve",
    "description": "How SalHurry helped Paperplane Wedding Studio build a luxury brand presence, a premium website, and a niche digital marketing strategy that reached Kerala's most discerning clients.",
    "about": {
      "@type": "Thing",
      "name": "Luxury Wedding Photography Marketing & Branding"
    },
    "creator": {
      "@type": "Organization",
      "name": "SalHurry by divegrid pvt ltd"
    },
    "mentions": {
      "@type": "Organization",
      "name": "Paperplane Wedding Studio"
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans text-[#1A1A1A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* SECTION 1 — Hero */}
      <div className="relative bg-[#0A0A0A] overflow-hidden pb-24 px-6">
        <Navbar />
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center pt-12">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 border border-white/20 text-gray-300 rounded-full text-[10px] tracking-[0.2em] uppercase mb-8 font-medium">
              Case Study · Wedding & Events
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white mb-8 leading-[1.1] tracking-tight max-w-5xl mx-auto">
              How We Helped Paperplane Wedding Studio Reach the Clients They Were Always Meant To Serve
            </h1>
            <p className="text-lg md:text-2xl text-gray-400 font-light max-w-3xl mx-auto mb-16">
              Luxury wedding photography. A niche audience. A digital presence built to match.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="w-full">
            <div className="flex flex-wrap justify-center gap-4 text-xs tracking-wider uppercase text-gray-400 mb-16">
              <div className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <span className="text-white font-medium">Client:</span> Paperplane Wedding Studio
              </div>
              <div className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <span className="text-white font-medium">Location:</span> Kerala, South India
              </div>
              <div className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <span className="text-white font-medium">Services:</span> Brand Strategy · Marketing · Web Design
              </div>
              <a href="https://www.paperplanewedding.com/" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full border border-[#A3E635]/30 bg-[#A3E635]/10 text-[#A3E635] hover:bg-[#A3E635]/20 backdrop-blur-sm transition-colors flex items-center gap-2">
                <span className="font-medium">Website:</span> paperplanewedding.com <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Hero Full Bleed Image */}
        <ScrollReveal delay={0.4}>
          <div className="w-full max-w-[1400px] mx-auto h-[50vh] md:h-[80vh] relative rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="https://res.cloudinary.com/der2xk0cv/image/upload/v1774191884/kavya-GFm-aEJ9_npbzmy.jpg" 
              alt="Striking wedding photograph from Paperplane portfolio" 
              fill 
              className="object-cover"
              priority
              unoptimized
            />
          </div>
        </ScrollReveal>
      </div>

      {/* SECTION 2 — About the Client */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Who Is Paperplane?</h2>
          <div className="prose prose-lg prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed font-light">
            <p>
              Paperplane Wedding Studio is not a wedding photographer for everyone — and that's exactly the point. Based in Kerala, they specialise in cinematic wedding films and timeless photography for couples who want their story told with intention, craft, and an unmistakable visual language.
            </p>
            <p>
              Their clientele includes celebrities, serial actors, and high-net-worth families across Kerala, Tamil Nadu, and Karnataka — people who understand the difference between documentation and art, and who are willing to invest in the latter.
            </p>
            <p>
              Paperplane had the talent. They had the work. What they needed was a digital presence that could speak to that audience before the first call was ever made.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 3 — The Challenge */}
      <section className="py-24 px-6 bg-[#F9FAFB] border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="max-w-2xl">
                <span className="text-[#A3E635] text-[10px] tracking-widest uppercase font-bold mb-4 block">The Challenge</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">The Problem with Being Brilliant and Invisible</h2>
                <div className="prose prose-lg prose-gray text-gray-600 leading-relaxed font-light">
                  <p>
                    The premium wedding photography market in Kerala is crowded at the surface. Every studio has an Instagram account. Every studio has a website with galleries, price lists, and a "Book Now" button.
                  </p>
                  <p className="mt-6">
                    But Paperplane's audience — celebrities, film industry families, and couples who expect a certain level of everything — doesn't browse through generic wedding directories. They discover through reputation, through referrals, and increasingly, through how a brand presents itself online before any conversation begins.
                  </p>
                  <p className="mt-6">
                    Paperplane's previous digital presence didn't reflect who they were. The gap between the quality of their actual work and the quality of how they were discovered online was costing them the exact clients they were built for.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col justify-center gap-6">
                {[
                  { title: "Wrong audience reach", desc: "Broad digital marketing was pulling in enquiries that weren't the right fit, wasting the team's time and diluting the brand." },
                  { title: "No premium digital positioning", desc: "Their online presence didn't signal luxury — it blended in with studios charging a fraction of their rate." },
                  { title: "No website that could convert silently", desc: "Premium clients don't want to be sold to. They want to feel it. The existing site couldn't do that." }
                ].map((card, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-red-50 text-red-500 font-bold flex items-center justify-center shrink-0 mt-1 text-xs">0{i+1}</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">{card.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 4 — Our Approach */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#A3E635] text-[10px] tracking-widest uppercase font-bold mb-4 block">How we approached it</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Niche Down. Show Up Differently. Let the Work Speak.</h2>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              The temptation with any marketing brief is to go broad — reach more people, run more ads, get more enquiries. We did the opposite. We started by defining who Paperplane's actual audience was with precision: high-income families in Kerala's film and business community, NRI couples planning South Indian weddings, and anyone for whom a wedding photographer is a considered luxury purchase, not a budget line item. Then we built everything — the strategy, the marketing, and the website — around that audience specifically.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Niche-first digital strategy', desc: "Instead of running broad awareness campaigns, we built a hyper-targeted digital marketing approach focused on the specific communities, platforms, and content formats where Paperplane's ideal clients actually spend their time. Reach fewer people. Reach the right people. That was the principle." },
              { num: '02', title: 'Instagram as a positioning tool, not a follower game', desc: "We repositioned Paperplane's Instagram from a portfolio dump to an editorial feed — curated, consistent, and clearly premium. The goal wasn't followers. It was the feeling that finding Paperplane felt like discovering something exclusive." },
              { num: '03', title: 'Branding that matched the work', desc: "Before any campaign went live, we revisited Paperplane's brand identity — visual language, tone of voice, and how they were presented across every touchpoint. A luxury client decides within seconds. Every second had to count." }
            ].map((block, i) => (
              <div key={i} className="bg-[#0A0A0A] text-white p-10 rounded-3xl">
                <span className="text-[#A3E635] font-mono text-sm mb-6 block border-b border-white/10 pb-4">{block.num}</span>
                <h3 className="text-xl font-bold mb-4">{block.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{block.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 5 — The Website */}
      <section className="py-24 px-6 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <span className="text-[#A3E635] text-[10px] tracking-widest uppercase font-bold mb-4 block">The website build</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">A Website That Doesn't Try to Sell. It Just Makes You Feel.</h2>
              <div className="prose prose-lg prose-invert max-w-none text-gray-400 leading-relaxed font-light">
                <p>
                  This is where most wedding studio websites get it wrong. They cram in galleries, pricing tables, testimonial carousels, and five different CTAs competing for attention. The result looks busy, feels desperate, and immediately signals "mass market."
                </p>
                <p>
                  Paperplane's audience doesn't need to be pushed. They need to be impressed — quietly, confidently, without noise.
                </p>
                
                <h4 className="text-white mt-12 mb-4 font-medium font-sans text-xl">How the brief came together:</h4>
                <p>
                  The client came to us with a clear reference: a website they admired — elegant, minimal, fashion-forward in its restraint. An international wedding studio whose site felt more like an art magazine than a service business. That reference became our north star.
                </p>
                <p>
                  We didn't copy it. We used it to understand the emotional experience they wanted visitors to have, then designed something that was entirely Paperplane's — rooted in their brand, their photography style, and their Kerala context.
                </p>
                
                <h4 className="text-white mt-12 mb-4 font-medium font-sans text-xl">What we built:</h4>
                <p>
                  The website at <a href="https://www.paperplanewedding.com" target="_blank" rel="noopener noreferrer" className="text-[#A3E635] hover:underline">paperplanewedding.com</a> was designed around one idea: the work is the sales tool. Every design decision — the whitespace, the typography, the way images breathe on the page, the absence of aggressive CTA buttons — was made to let Paperplane's photography do what it already does brilliantly: stop people in their tracks.
                </p>
                
                <h4 className="text-white mt-12 mb-6 font-medium font-sans text-xl">Design principles we followed:</h4>
                <ul className="space-y-4 marker:text-[#A3E635]">
                  <li>Minimal copy. Maximum imagery.</li>
                  <li>No price lists visible on first load — luxury brands don't lead with price</li>
                  <li>One primary CTA, placed deliberately, never repeated three times on the same page</li>
                  <li>Typography and spacing that signals editorial quality, not agency-template construction</li>
                  <li>Mobile experience treated as the primary canvas, not an afterthought — their audience is on Instagram before they're on a desktop</li>
                </ul>
              </div>
            </div>
            
            {/* Media Block 1: Figma Prototype */}
            <div className="mt-20 mb-16">
              <span className="text-center block text-gray-400 text-sm mb-6 italic">Initial prototype presented to Paperplane — built in Figma before a single line of code was written.</span>
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black group">
                <Image 
                  src="https://res.cloudinary.com/der2xk0cv/image/upload/v1774190629/Screenshot_2026-03-22_201249_cirrf0.png" 
                  alt="Figma prototype mockup representing the Paperplane Wedding Studio website wireframes and complete design" 
                  fill 
                  className="object-cover object-top opacity-90 hover:opacity-100 transition-opacity"
                  unoptimized
                />
                
                {/* Figma Icon Overlay */}
                <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-12 h-12 md:w-16 md:h-16 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <Image 
                    src="https://res.cloudinary.com/der2xk0cv/image/upload/v1774193386/icon_full_color_lcgiql.svg"
                    alt="Official Figma Logo Icon"
                    fill
                    className="object-contain p-2.5 md:p-3"
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Media Block 2: Live Website Video */}
            <div>
              <span className="text-center block text-gray-400 text-sm mb-6 italic">Live website — smooth scrolling, editorial typography, and full-bleed imagery mapping to the luxury brand guidelines.</span>
              <VideoCursorLink 
                src="https://res.cloudinary.com/der2xk0cv/video/upload/v1774191641/App_-_Paperplane_Wedding_Studio___Palakkad_Kochi_Wedding_Photography_2025-08-06_01-28-56_cohtcu.mp4"
                link="https://www.paperplanewedding.com/"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 6 — The Process */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-[#A3E635] text-[10px] tracking-widest uppercase font-bold mb-4 block">Behind the work</span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">From Reference to Reality — How the Project Unfolded</h2>
          </div>
          
          <div className="relative border-l border-gray-200 ml-3 md:ml-4 space-y-16 py-8">
            {[
              { title: "Client brief & reference collection", desc: "Paperplane came with a vision and a reference website they loved. We spent time understanding not just what they liked visually, but why — what feeling that reference created, and whether that feeling was right for their specific brand and audience." },
              { title: "Brand positioning alignment", desc: "Before opening Figma, we aligned on positioning. Who is this website for? What should they feel in the first 10 seconds? What should they never feel? These decisions informed every design choice that followed." },
              { title: "Figma prototype", desc: "We built a full interactive prototype in Figma — desktop and mobile — and presented it to the Paperplane team before any development began. This is non-negotiable for us on premium builds. The client sees exactly what they're getting, approves it, and we build once — not twice." },
              { title: "Build & refinement", desc: "Development began after prototype sign-off. Refinements were handled collaboratively — no back-and-forth through email chains, just a shared space where feedback was immediate and changes were made in real time." },
              { title: "Digital marketing launch", desc: "With the website live and the brand repositioned, we launched the targeted digital marketing strategy — Instagram content architecture, organic reach campaigns, and niche audience targeting designed to put Paperplane in front of exactly the right people." }
            ].map((step, i) => (
              <div key={i} className="relative pl-8 md:pl-12">
                <div className="absolute w-3 h-3 bg-[#A3E635] rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(163,230,53,0.5)]"></div>
                <h4 className="text-gray-400 font-mono text-sm mb-2">Step 0{i+1}</h4>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 7 — Results */}
      <section className="py-24 px-6 bg-[#050505] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#A3E635] blur-[150px] opacity-10 pointer-events-none rounded-full"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-[#A3E635] text-[10px] tracking-widest uppercase font-bold mb-4 block">What happened</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">A Brand That Now Looks Like What It Always Was</h2>
              <p className="text-gray-400 text-lg font-light">
                We don't believe in inflating numbers. Here's what the work actually delivered:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
              {[
                { title: "Enquiry quality, transformed", desc: "The shift from broad to niche targeting meant enquiries came from audiences who understood Paperplane's positioning — clients who weren't bargaining on price, weren't comparing them to studios charging ₹20,000 for a full day, and were already pre-sold on the premium experience before the first call." },
                { title: "Instagram as a trust signal", desc: "The repositioned Instagram feed became the primary touchpoint for new client discovery — with organic reach growing consistently through content that felt native to a luxury audience rather than promotional to a general one." },
                { title: "A website that does the selling silently", desc: "The team at Paperplane reported that clients were arriving to enquiry calls already converted — they had seen the website, felt the brand, and reached out to confirm availability, not to be convinced." }
              ].map((res, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-4">{res.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{res.desc}</p>
                </div>
              ))}
            </div>

            <div className="mb-24 flex flex-col items-center">
              <span className="text-center block text-gray-400 text-sm mb-6 italic">Premium editorial Instagram positioning reaching 20k+ targeted followers.</span>
              <div className="relative w-full max-w-[400px] aspect-[3/4] sm:aspect-[9/16]">
                <Image 
                  src="https://res.cloudinary.com/der2xk0cv/image/upload/v1774250029/IMG_0394_1_-portrait_jkpfpt.png" 
                  alt="Paperplane Wedding Studio Instagram Mockup showing premium branding and 20k+ followers" 
                  fill 
                  className="object-contain drop-shadow-2xl"
                  unoptimized
                />
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-8 md:p-12 rounded-[40px] flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto shadow-2xl">
              <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 relative rounded-full overflow-hidden border-4 border-[#A3E635]">
                <Image 
                  src="https://res.cloudinary.com/der2xk0cv/image/upload/v1774192776/screator-Nr8KvqdX_uufvmg.jpg" 
                  alt="Mohammed Shafeek Hussain - Paperplane Wedding Studios" 
                  fill 
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div>
                <svg className="w-10 h-10 text-[#A3E635] opacity-50 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-xl md:text-2xl font-light text-white leading-relaxed mb-6 italic">
                  "Working with SalHurry was seamless. They created a website that perfectly reflects our premium brand. Professional team, smooth process, and great results."
                </p>
                <div>
                  <h4 className="font-bold text-[#A3E635] tracking-wide">Mohammed Shafeek Hussain</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Paperplane Wedding Studios</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 8 — What We Learned */}
      <section className="py-24 px-6 max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <span className="text-[#A3E635] text-[10px] tracking-widest uppercase font-bold mb-4 block">Honest reflection</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">What This Project Taught Us</h2>
          <div className="prose prose-lg prose-gray max-w-none text-gray-600 leading-relaxed font-light mx-auto">
            <p>
              Not every business needs more reach. Some businesses need <em>better</em> reach — a smaller, sharper audience that is genuinely the right fit.
            </p>
            <p>
              Paperplane taught us that premium positioning isn't just about looking expensive. It's about making the right person feel understood before they've even made contact. The website, the Instagram, the targeting strategy — all of it was ultimately in service of one goal: making a high-value client feel like they'd found the right people, not just another studio.
            </p>
            <p className="font-medium text-[#1A1A1A] text-xl mt-8">
              That's the work we're most proud of. Not the metrics. The feeling.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 9 — Services Delivered */}
      <section className="py-16 px-6 bg-[#F9FAFB] border-t border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">What SalHurry delivered on this project</h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {[
                { name: "Brand Positioning", link: "/services" },
                { name: "Website Design & Development", link: "/services/web-development" },
                { name: "Figma Prototyping", link: "/services/web-development" },
                { name: "Instagram Strategy", link: "/services/performance-marketing" },
                { name: "Organic Reach Campaigns", link: "/services/digital-marketing" },
                { name: "Niche Audience Targeting", link: "/services/performance-marketing" },
                { name: "UI/UX Design", link: "/services/web-development" },
                { name: "Content Direction", link: "/services" }
              ].map((tag, i) => (
                <Link key={i} href={tag.link} className="px-5 py-2 rounded-full border border-gray-200 bg-white text-gray-600 text-sm hover:border-[#A3E635] hover:text-[#A3E635] hover:shadow-sm transition-all">
                  {tag.name}
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 10 — Footer CTA */}
      <section className="py-32 px-6 bg-[#0A0A0A] text-white text-center">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Want SalHurry to Do This for Your Business?</h2>
            <p className="text-lg text-gray-400 leading-relaxed font-light mb-12">
              Whether you're a premium service brand that's been underrepresented online, or a business that needs a website and marketing strategy that actually matches your quality — we can build it.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="px-8 py-4 bg-[#A3E635] text-black font-bold rounded-full hover:bg-white hover:scale-105 transition-all text-sm w-full sm:w-auto">
                Start a Conversation
              </Link>
              <Link href="/#projects" className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-black hover:scale-105 transition-all text-sm flex items-center justify-center gap-2 w-full sm:w-auto group">
                See More Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
