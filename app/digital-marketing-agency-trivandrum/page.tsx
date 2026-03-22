import React from 'react';
import Navbar from '@/layouts/navbar';
import Footer from '@/layouts/footer';
import ContactButton from '@/components/contact-button';
import ScrollReveal from '@/components/scroll-reveal';
import Image from 'next/image';
import { constructMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import { Target, TrendingUp, Megaphone, CheckCircle2, Globe, Users, MapPin, LayoutTemplate, MessageSquare, MessageCircle, ShieldCheck, Clock } from 'lucide-react';
import Link from 'next/link';
import WhatsAppMockup from '@/components/whatsapp-mockup';

export const metadata: Metadata = constructMetadata({
  title: 'Digital Marketing Agency in Trivandrum | SalHurry Growth Systems',
  description: "SalHurry is Trivandrum's growth-focused digital marketing agency. We run Google Ads, Meta campaigns, lead generation, and full sales systems for businesses in Trivandrum and Kerala. Real results, daily WhatsApp reporting, Sunday support.",
  path: '/digital-marketing-agency-trivandrum',
});

export default function DigitalMarketingTrivandrumPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "SalHurry Growth Systems",
            "description": "Digital marketing agency in Trivandrum offering performance marketing, lead generation, Google Ads, Meta Ads, social media marketing, and growth strategy for businesses across Trivandrum and Kerala.",
            "url": "https://www.salhurry.in/digital-marketing-agency-trivandrum",
            "telephone": "+916282687001",
            "email": "info@salhurry.in",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "JS Arcade, MC Rd, Kilimanoor",
              "addressLocality": "Trivandrum",
              "addressRegion": "Kerala",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 8.8038,
              "longitude": 76.9673
            },
            "openingHours": "Mo-Su 08:00-20:00",
            "areaServed": ["Trivandrum", "Kerala", "Kilimanoor", "South Kerala"],
            "serviceType": [
              "Digital Marketing",
              "Performance Marketing",
              "Lead Generation",
              "Google Ads Management",
              "Meta Ads Management",
              "Social Media Marketing",
              "Google My Business Optimisation",
              "Website Development"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digital Marketing Services Trivandrum",
              "itemListElement": [
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Performance Marketing Trivandrum"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Lead Generation Trivandrum"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Google Ads Trivandrum"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Social Media Marketing Trivandrum"}}
              ]
            }
          }),
        }}
      />

      <div className="relative bg-[#0A0A0A] overflow-hidden pb-24">
        {/* Neon Smudge Effect */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#2D3321] blur-[120px] rounded-full opacity-40 pointer-events-none"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-[#1A1C18] blur-[100px] rounded-full opacity-30 pointer-events-none"></div>

        <Navbar />

        {/* HERO SECTION */}
        <div className="relative z-10 pt-16 lg:pt-24 pb-0 lg:pb-12">
          <div className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="max-w-xl relative z-20 pb-12 lg:pb-0 pt-8 lg:pt-0">
              <span className="inline-block px-4 py-1.5 border border-[#A3E635]/50 text-[#A3E635] rounded-full text-[10px] tracking-[0.2em] font-medium uppercase mb-8 shadow-[0_0_15px_rgba(163,230,53,0.15)] bg-[#A3E635]/5">
                TRIVANDRUM&apos;S GROWTH AGENCY
              </span>
              <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6 leading-[1.05] tracking-tight">
                Digital Marketing Agency in Trivandrum <br />
                <span className="font-serif italic font-normal text-gray-400 text-3xl md:text-4xl">That Builds Sales Systems, Not Just Ad Campaigns</span>
              </h1>
              <p className="text-[15px] sm:text-[17px] text-gray-300 leading-[1.8] mb-12 max-w-md font-light">
                Most digital marketing agencies in Trivandrum run your ads and send you a monthly report. SalHurry builds the full system: strategy, campaigns, landing pages, lead funnels, and daily WhatsApp reporting, so your business generates consistent, measurable revenue.
              </p>
              
              <div className="flex flex-wrap gap-4 items-center">
                <ContactButton
                  text="Book a Free Growth Audit"
                  className="border border-[#A3E635]/80 shadow-[0_0_20px_rgba(163,230,53,0.2)] bg-[#A3E635] text-black px-8 py-3.5 rounded-full font-bold hover:bg-white transition-all flex items-center gap-2"
                />
                <a href="https://wa.me/916282687001" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#A3E635] transition-colors font-medium border-b border-white/20 hover:border-[#A3E635] pb-1">
                  WhatsApp Us : +91 62826 87001
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-[11px] text-gray-500 uppercase tracking-wider font-semibold">
                <span>Based in Kilimanoor, Trivandrum</span>
                <span>•</span>
                <span>Google Ads</span>
                <span>•</span>
                <span>Meta Ads</span>
                <span>•</span>
                <span>Lead Generation</span>
                <span>•</span>
                <span>Mon to Sun 8AM-8PM</span>
              </div>
            </div>

            {/* Right Hero Images - Real Local Photo Focus */}
            <div className="relative w-full z-10 h-[400px] sm:h-[600px] lg:h-[700px] rounded-[40px] overflow-hidden shadow-2xl">
              <Image 
                src="https://res.cloudinary.com/der2xk0cv/image/upload/v1772368693/salhurry-why-choose-us_coslns.webp" 
                alt="Salhurry Office Workspace in Kilimanoor, Trivandrum" 
                fill 
                className="object-cover" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                 <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                    <p className="text-[#A3E635] text-sm font-bold mb-1">Local. Accountable. Revenue-Focused.</p>
                    <p className="text-white text-sm">We are a real team based in Trivandrum, not an outsourced factory in another state.</p>
                 </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* SECTION 2 - The Problem */}
      <ScrollReveal>
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-8">
              Why Most Trivandrum Businesses Waste Their Marketing Budget
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-left sm:text-center">
              <p>
                Trivandrum has no shortage of digital marketing agencies. What it lacks is agencies that are actually accountable for results.
              </p>
              <p>
                Most businesses in Trivandrum have tried boosting Instagram posts, running Google Ads without tracking, or paying a freelancer who disappeared after the first month. The result is the same every time: money spent, no clear outcome, no system to learn from.
              </p>
              <p>
                SalHurry was built specifically to solve this problem. We are a growth agency based in Kilimanoor, Trivandrum. We work with local businesses across Trivandrum, from restaurants in the city to construction companies in Kilimanoor to fitness businesses across the district, to build customer acquisition systems that actually produce revenue, not just reach.
              </p>
              <p className="font-semibold text-black p-6 bg-gray-50 rounded-2xl border-l-4 border-[#A3E635]">
                We do not just run ads. We build the infrastructure behind the ads: the strategy, the landing pages, the funnel, the tracking, the reporting, and the optimisation, so that every rupee your business spends on marketing has a clear purpose and a measurable outcome.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 3 - Services */}
      <ScrollReveal>
        <section className="bg-gray-50 py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 border border-gray-200 rounded-full text-[10px] uppercase tracking-widest text-[#A3E635] mb-6 bg-white shadow-sm">
                What We Build
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
                Digital Marketing Services We Provide in Trivandrum
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Performance Marketing',
                  subtitle: 'Google Ads & Meta Ads Trivandrum',
                  desc: 'We manage Google Search, Display, and Performance Max campaigns alongside Facebook and Instagram advertising for businesses across Trivandrum. Every campaign is built with proper conversion tracking, audience segmentation, and a testing framework. We run performance marketing for clients in real estate, construction, restaurants, clinics, fitness, education, and retail across Trivandrum and South Kerala.',
                  icon: TrendingUp
                },
                {
                  title: 'Lead Generation',
                  subtitle: 'Trivandrum',
                  desc: 'We design end-to-end lead generation systems for Trivandrum businesses: from ad creative and targeting through to landing page, WhatsApp integration, CRM setup, and lead qualification. We have generated leads for construction companies, real estate developers, HVAC businesses, restaurants, and gyms across the Trivandrum district.',
                  icon: Target
                },
                {
                  title: 'Social Media Marketing',
                  subtitle: 'Trivandrum',
                  desc: 'We manage social media for Trivandrum businesses that need consistent content, community engagement, and paid amplification. This is not just posting: it is a structured content calendar tied to your business goals, with paid campaigns layered on top to reach new audiences. We handle Instagram, Facebook, and LinkedIn for B2B businesses across Trivandrum.',
                  icon: Megaphone
                },
                {
                  title: 'Google My Business Optimisation',
                  subtitle: 'Trivandrum',
                  desc: 'For local businesses in Trivandrum, appearing on Google Maps is often more valuable than any paid campaign. We set up, verify, and optimise Google Business Profiles for Trivandrum businesses: with keyword-optimised descriptions, photo strategy, review generation, and ongoing management to ensure you rank for local searches in Trivandrum and surrounding areas.',
                  icon: MapPin
                },
                {
                  title: 'Landing Pages & Conversion Systems',
                  subtitle: 'Web Assets',
                  desc: 'Ads without landing pages are money wasted. We build dedicated, mobile-optimised landing pages for Trivandrum businesses that are running campaigns: with clear CTAs, WhatsApp click-to-chat integration, lead forms, and tracking built in from day one. Every landing page we build is engineered around one metric: conversion rate.',
                  icon: LayoutTemplate
                },
                {
                  title: 'Growth Strategy & GTM Planning',
                  subtitle: 'Consulting',
                  desc: 'For businesses in Trivandrum launching new products, entering new markets, or scaling existing operations, we design a full Go-To-Market strategy: audience mapping, channel selection, messaging framework, offer positioning, and a 90-day acquisition roadmap. This is where we start with most serious clients before touching any ad budget.',
                  icon: Globe
                }
              ].map((service, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 hover:border-[#A3E635] transition-all group">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#A3E635] transition-colors">
                    <service.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-1">{service.title}</h3>
                  <p className="text-xs font-semibold text-[#A3E635] uppercase tracking-wider mb-4">{service.subtitle}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 4 - Why SalHurry (How We Work Structure) */}
      <ScrollReveal>
        <section className="py-24 px-6 md:px-12 bg-[#060606] relative overflow-hidden border-t border-white/5 mt-12">
          {/* Decorative Blur */}
          <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#A3E635] opacity-[0.03] rounded-full blur-[120px] pointer-events-none transform -translate-x-1/2"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 border border-[#A3E635]/20 text-[#A3E635] font-semibold rounded-full text-[10px] tracking-[0.2em] uppercase mb-8 shadow-sm">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                No Black Boxes.<br />
                <span className="font-serif italic font-normal text-gray-400">No Radio Silence.</span><br />
                <span className="text-[#A3E635]">Just Full Visibility.</span>
              </h2>
              <p className="text-[16px] md:text-[18px] text-gray-400 leading-[1.8] font-light">
                Why Trivandrum businesses choose SalHurry. We treat your ad budget the way we&apos;d treat our own: with daily attention, full transparency, and zero tolerance for waste.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
              
              {/* Block 1: WhatsApp */}
              <div className="bg-[#1A1A1A] rounded-[40px] p-8 md:p-12 border border-white/5 hover:border-[#A3E635]/30 transition-all flex flex-col h-full group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#A3E635] opacity-[0.05] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 group-hover:opacity-[0.1] transition-opacity"></div>
                
                <div className="w-14 h-14 bg-[#A3E635]/10 rounded-2xl flex items-center justify-center text-[#A3E635] mb-8">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Daily WhatsApp reporting</h3>
                <p className="text-gray-400 text-[15px] leading-[1.8] mb-8 flex-grow">
                  From the day your campaign launches, we create a dedicated WhatsApp group. Every morning you receive a campaign update: ad spend, leads generated, running budget, campaign status, and any issues flagged immediately. By the time you&apos;ve had your chai, the numbers are already in your phone. No agency in Trivandrum does this by default. We do it for every client.
                </p>
                
                {/* WhatsApp Mockup graphic */}
                <div className="mt-8 scale-[0.85] sm:scale-90 md:scale-100 origin-top">
                  <WhatsAppMockup />
                </div>
              </div>

              <div className="flex flex-col gap-12 lg:gap-16">
                
                {/* Block 2: Local Office */}
                <div className="flex flex-col sm:flex-row gap-8 items-start">
                  <div className="w-16 h-16 shrink-0 bg-white/5 rounded-[24px] flex items-center justify-center text-white border border-white/10 shadow-lg">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">We are based in Trivandrum</h3>
                    <p className="text-gray-400 leading-[1.8] text-[15px]">
                      Our office is in Kilimanoor, Trivandrum. We work with Trivandrum businesses because we understand the market: what works here, what doesn&apos;t, which platforms drive real results in South Kerala, and how buyers in this region make decisions. When you need a meeting, we are available. When there&apos;s an urgent campaign issue on a Saturday, we are reachable.
                    </p>
                  </div>
                </div>

                {/* Block 3: Commitment */}
                <div className="flex flex-col sm:flex-row gap-8 items-start">
                  <div className="w-16 h-16 shrink-0 bg-[#A3E635] rounded-[24px] flex items-center justify-center text-black shadow-[0_10px_30px_rgba(163,230,53,0.3)]">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">We don&apos;t charge if your campaign doesn&apos;t perform</h3>
                    <p className="text-gray-400 leading-[1.8] text-[15px] mb-6">
                      Every campaign has a warmup period, typically 30 to 45 days, where the algorithm learns and creatives are tested. This is standard across every platform globally. But if your campaign completes the warmup phase and is still not generating results, we do not collect our agency fee. Our incentives are aligned with your growth, not just your billing cycle.
                    </p>
                    
                    {/* Small Print Note */}
                    <div className="bg-[#1A1A1A] rounded-[24px] p-6 border border-white/5 relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#A3E635]"></div>
                      <p className="text-[13px] text-gray-400 leading-[1.7]">
                        <strong className="text-white block mb-2">Strategy before spend:</strong>
                        We do not touch your ad budget until we understand your business, your market, your competitors, and your customer. The strategy we design determines every rupee we spend. This is why our campaigns outperform agencies that start running ads on day one.
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

            {/* Block 4: Availability */}
            <div className="bg-[#1A1A1A] rounded-[40px] p-10 md:p-14 border border-white/5 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#A3E635] opacity-[0.03] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-white mx-auto mb-8 border border-white/10">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Sunday availability 8AM to 8PM</h3>
              <p className="text-gray-400 text-[16px] leading-[1.8] max-w-3xl mx-auto mb-8">
                Campaigns run seven days a week. So do we. If something needs attention on a Sunday morning, it gets attention on a Sunday morning. Our team is available Monday through Sunday, 8 AM to 8 PM IST, including holidays, for all active campaign clients.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#0A0A0A] p-6 rounded-[24px] border border-white/5 flex flex-col items-center justify-center text-center">
                  <span className="text-white font-bold mb-2 block">Monday – Friday</span>
                  <span className="text-[#A3E635] text-sm font-semibold mb-2">8:00 AM – 8:00 PM IST</span>
                  <span className="text-gray-500 text-xs">Full team available</span>
                </div>
                <div className="bg-[#0A0A0A] p-6 rounded-[24px] border border-white/5 flex flex-col items-center justify-center text-center">
                  <span className="text-white font-bold mb-2 block">Saturday</span>
                  <span className="text-[#A3E635] text-sm font-semibold mb-2">8:00 AM – 8:00 PM IST</span>
                  <span className="text-gray-500 text-xs">Full team available</span>
                </div>
                <div className="bg-[#0A0A0A] p-6 rounded-[24px] border border-[#A3E635]/20 shadow-[0_0_20px_rgba(163,230,53,0.05)] flex flex-col items-center justify-center text-center relative">
                  <div className="absolute top-3 right-3 flex space-x-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A3E635] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A3E635]"></span>
                    </span>
                  </div>
                  <span className="text-white font-bold mb-2 block">Sunday</span>
                  <span className="text-[#A3E635] text-sm font-semibold mb-2">8:00 AM – 8:00 PM IST</span>
                  <span className="text-gray-500 text-xs">Yes, even Sunday</span>
                </div>
              </div>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 5 - Case Studies */}
      <ScrollReveal>
        <section className="bg-[#1A1A1A] py-24 px-6 md:px-12 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Results We Have Delivered for Businesses in and Around Trivandrum
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">Real numbers. Local clients. Documented growth.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                 {
                   name: 'Sigma Sands / Southern Sigma Ventures',
                   industry: 'Construction & Mining, Kilimanoor',
                   desc: 'A construction and mining company based in Kilimanoor, Trivandrum with no digital presence and no online lead pipeline. We built their complete digital growth system: website, Google Ads targeting construction and mining buyers across Kerala, and a dedicated lead management process. The business moved from purely referral-dependent sales to a structured digital acquisition channel driving consistent inbound enquiries.'
                 },
                 {
                   name: 'Joseco Furniture',
                   industry: 'Trivandrum',
                   desc: "A Trivandrum-based furniture brand running Meta lead campaigns targeting buyers in Trivandrum and Marthandam. We managed their campaign with daily WhatsApp reporting: 125 total leads generated over the campaign period, 21 leads on the most recent day at ₹1,542 daily spend, with 3 site visits confirmed from the previous day's batch."
                 },
                 {
                   name: 'Transindia Cooling Solutions',
                   industry: 'HVAC, Kerala',
                   desc: 'Complete digital transformation for a Kerala-based HVAC and MEP contracting company. Custom website built for lead generation combined with Google Ads targeting commercial property buyers and contractors across Kerala. The business now receives consistent inbound enquiries from a previously referral-only sales model.'
                 },
                 {
                   name: 'Paperplane Wedding Studio',
                   industry: 'Trivandrum',
                   desc: 'A premium wedding photography studio based in Kerala. We built a brand-consistent website and digital presence that the client showcased at an international conference. Combined with a social media strategy targeting engaged couples and wedding planners, the studio grew its enquiry pipeline significantly beyond referrals.'
                 },
                 {
                   name: 'Jones Gym',
                   industry: 'Kerala',
                   desc: "Custom web application and membership management dashboard for one of Kerala's largest gym chains. Built to handle high user volume, reduce operational overhead, and automate billing, combined with digital marketing campaigns driving membership acquisition across their locations."
                 }
               ].map((cs, i) => (
                 <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[32px] hover:border-[#A3E635]/50 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-2">{cs.name}</h3>
                    <p className="text-[#A3E635] text-xs font-bold uppercase tracking-wider mb-6">{cs.industry}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{cs.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 6 & 7 - Process & Industries */}
      <ScrollReveal>
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
             
             {/* Process */}
             <div>
                <h2 className="text-3xl font-bold text-black mb-10">How SalHurry Works With Trivandrum Businesses</h2>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                   {[
                     { step: '01', title: 'Free Growth Audit', desc: "We look at your current marketing, your website, your competitors in Trivandrum, your offer, and your acquisition channels. We tell you honestly what works and what doesn't. No pitch deck. No pressure."},
                     { step: '02', title: 'Growth Strategy', desc: 'If we move forward, we design a full growth strategy before spending a single rupee on ads. Audience mapping, channel selection, offer positioning, landing page architecture, and a structured campaign.'},
                     { step: '03', title: 'Campaign Launch & Tracking', desc: 'We set up conversion tracking, launch campaigns across the right channels, and build the landing pages and funnels needed to convert your traffic. You get added to a dedicated WhatsApp group from day one.'},
                     { step: '04', title: 'Daily Reporting & Optimization', desc: 'Every morning you receive a campaign update on WhatsApp. Every week we analyse performance and make optimisation decisions. Every issue gets addressed immediately.'}
                   ].map((item, i) => (
                     <div key={i} className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#A3E635] text-black font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow uppercase text-xs z-10 relative left-0 md:left-auto">
                           {item.step}
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm ml-4 md:ml-0">
                           <h4 className="text-lg font-bold text-black mb-2">{item.title}</h4>
                           <p className="text-gray-500 text-sm">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             {/* Industries */}
             <div className="bg-gray-50 rounded-[40px] p-10 lg:p-12 h-fit">
                <h2 className="text-3xl font-bold text-black mb-8">Industries We Work With in Trivandrum and South Kerala</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">We have worked with businesses across the following sectors in and around Trivandrum:</p>
                
                <ul className="space-y-4">
                   {[
                     'Construction and real estate',
                     'HVAC and MEP contracting',
                     'Restaurants and food businesses',
                     'Wedding photography and event planning',
                     'Gyms and fitness centres',
                     'Furniture and home decor',
                     'Clinics and healthcare practices',
                     'Education and coaching institutes',
                     'Tours and travel businesses',
                     'B2B manufacturing and distribution',
                     'Professional services firms'
                   ].map((industry, i) => (
                     <li key={i} className="flex items-center gap-3 text-black font-medium text-sm">
                        <div className="w-2 h-2 rounded-full bg-[#A3E635]"></div>
                        {industry}
                     </li>
                   ))}
                </ul>
                <div className="mt-10 p-6 bg-white rounded-2xl border border-gray-100 italic text-gray-500 text-sm leading-relaxed shadow-sm">
                   "If your business sells something and needs qualified buyers in Trivandrum or Kerala, we can build the system for it."
                </div>
             </div>

          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 8 - FAQ */}
      <ScrollReveal>
        <section className="bg-white py-24 px-6 md:px-12 border-t border-gray-100">
           <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Frequently Asked Questions</h2>
                 <p className="text-gray-500">About Digital Marketing in Trivandrum</p>
              </div>

              <div className="space-y-8">
                 {[
                   {
                     q: "What is the best digital marketing agency in Trivandrum?",
                     a: "SalHurry is a growth-focused digital marketing agency based in Kilimanoor, Trivandrum. Unlike most agencies that focus on running ads and sending monthly reports, SalHurry builds complete sales growth systems: including strategy, campaigns, landing pages, lead funnels, and daily WhatsApp reporting. We work with businesses across Trivandrum in construction, real estate, restaurants, clinics, fitness, wedding, and more."
                   },
                   {
                     q: "How much does digital marketing cost for a business in Trivandrum?",
                     a: "Digital marketing costs in Trivandrum vary depending on the service and scope. A performance marketing retainer with SalHurry typically starts from ₹15,000 to ₹25,000 per month in agency fees, with ad spend separate and determined by your budget and goals. One-time services like website development and landing pages are priced per project. We offer a free growth audit before any engagement, so you understand exactly what's recommended before committing to any spend."
                   },
                   {
                     q: "Do you work with small businesses in Trivandrum?",
                     a: "Yes. We work with local businesses of all sizes across Trivandrum, from single-location restaurants and studios to multi-location gyms and construction companies. Many of our clients start with a small budget and scale as campaigns prove results. We are equally comfortable working with a new business launching its first campaign and an established business looking to systematise its customer acquisition."
                   },
                   {
                     q: "What digital marketing services do you offer in Trivandrum?",
                     a: "We offer performance marketing (Google Ads and Meta Ads), lead generation systems, social media marketing, Google My Business optimisation, landing page and website development, growth strategy and GTM planning, and CRM and automation setup. Every service is built around one goal: helping Trivandrum businesses acquire more customers and grow revenue consistently."
                   },
                   {
                     q: "How do you report results to clients?",
                     a: "We create a dedicated WhatsApp group for every active campaign client from day one. Every morning you receive an update: ad spend, leads generated, running budget balance, active campaign status, and any issues or changes flagged immediately. We also schedule regular calls at natural milestones: end of the warmup phase, first 30 days, and monthly thereafter. You will never have to chase us for a report."
                   },
                   {
                     q: "Do you run Google Ads for businesses in Trivandrum?",
                     a: "Yes. We manage Google Search, Display, and Performance Max campaigns for businesses across Trivandrum. This includes keyword research, ad copywriting, bid strategy, landing page setup, conversion tracking, and ongoing optimisation. We have run Google Ads campaigns for construction companies, HVAC businesses, furniture brands, restaurants, clinics, and fitness businesses in Trivandrum and South Kerala."
                   },
                   {
                     q: "Can you help a restaurant or food business in Trivandrum get more customers?",
                     a: "Yes. We have worked with restaurant and food businesses in Kerala on Instagram growth, Google Maps optimisation, Meta lead campaigns, and delivery platform SEO. We understand the Trivandrum food market and can build a digital marketing system that drives consistent footfall, online orders, and brand awareness for your restaurant, cafe, or cloud kitchen."
                   },
                   {
                     q: "Do you work with construction and real estate companies in Trivandrum?",
                     a: "Yes. We have direct experience with construction, mining, and real estate businesses based in Trivandrum and Kilimanoor. We run Google Ads and Meta campaigns targeting property buyers, contractors, and B2B decision-makers across Kerala. We also build project-specific landing pages and lead funnels that capture and qualify inbound enquiries."
                   },
                   {
                     q: "What makes SalHurry different from other digital marketing agencies in Trivandrum?",
                     a: "Three things separate us from other agencies in Trivandrum. First, we build complete growth systems, not just ad campaigns. Second, we report daily via WhatsApp, not monthly PDFs. Third, we do not collect our agency fee if your campaign fails to generate results after the warmup period. We are a local agency with a national-standard approach, available Monday to Sunday 8 AM to 8 PM including Sundays."
                   },
                   {
                     q: "How do I get started with SalHurry for my Trivandrum business?",
                     a: "The best way to start is with a free growth audit. This is a no-obligation strategy conversation where we review your current marketing, your goals, and your biggest growth opportunities. Call or WhatsApp us on +91 62826 87001, or email info@salhurry.in. We are based in Kilimanoor, Trivandrum and available Monday to Sunday 8 AM to 8 PM."
                   },
                   {
                     q: "Do you offer social media marketing for Trivandrum businesses?",
                     a: "Yes. We manage Instagram, Facebook, and LinkedIn for businesses across Trivandrum. This includes content strategy, post creation, community management, and paid social campaigns. Social media management is most effective when combined with paid amplification; we handle both as part of an integrated growth system rather than managing them in isolation."
                   },
                   {
                     q: "Can you help a Trivandrum business generate leads from WhatsApp?",
                     a: "Yes. WhatsApp lead generation is one of the most effective channels for Trivandrum businesses, particularly in construction, real estate, clinics, and local services. We build WhatsApp-integrated landing pages, set up click-to-WhatsApp ad campaigns on Facebook and Instagram, and design lead qualification systems so your team only speaks to interested, relevant prospects."
                   }
                 ].map((faq, i) => (
                   <div key={i} className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                      <h3 className="text-xl font-bold text-black mb-4">{faq.q}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>
      </ScrollReveal>

      {/* SECTION 9 - CTA */}
      <section className="bg-[#A3E635] py-24 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-8 leading-tight">
            Ready to Grow Your <br/>Trivandrum Business?
          </h2>
          <p className="text-black/80 font-medium text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Let's start with a free 30-minute growth audit. We will look at your current marketing, your competitors in Trivandrum, and the biggest opportunities for your business, then give you an honest recommendation, whether or not you work with us.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <ContactButton
              text="Book Your Free Growth Audit"
              className="bg-black text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-xl"
            />
            <a href="https://wa.me/916282687001" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-xl flex items-center gap-2">
                WhatsApp Us : +91 62826 87001
            </a>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-black/70 font-semibold tracking-wide">
             <span>Based in Kilimanoor, Trivandrum</span>
             <span className="hidden sm:inline">•</span>
             <span>Available Mon-Sun, 8AM-8PM IST</span>
             <span className="hidden sm:inline">•</span>
             <span>info@salhurry.in</span>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
