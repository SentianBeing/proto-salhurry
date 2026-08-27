'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Navbar from '@/layouts/navbar';
import PackageCustomizer from '@/components/package-customizer';
import { MetaIcon, GoogleIcon } from '@/components/brand-icons';
import {
  Check,
  X,
  Zap,
  Star,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Layers,
  PhoneCall,
  ChevronDown,
  Info,
  Sliders,
  PieChart,
  Video,
  BarChart3,
  Sparkles
} from 'lucide-react';
import { useContactModal } from '@/context/contact-modal-context';

export interface PackageTier {
  id: string;
  name: string;
  price: string;
  period: string;
  badge?: string;
  tagline: string;
  recommendedAdSpend: string;
  bestFor: string;
  notIncluded?: string[];
  popular?: boolean;
  features: {
    adPlatforms: string;
    creatives: string;
    videos: string;
    seo: string;
    websiteMaintenance: string;
    landingPage: string;
    productShoot: string;
    brandingGuidance: string;
    strategyCalls: string;
    reporting: string;
  };
  highlights: string[];
}

const packagesData: PackageTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₹9,999',
    period: '/month',
    tagline: 'Get your initial campaigns running on search or social with structured poster assets.',
    recommendedAdSpend: '₹10,000 – ₹15,000 / month minimum',
    bestFor: 'First-time advertisers and focused businesses testing paid lead gen on 1 channel.',
    notIncluded: ['Reels / Video Content', 'SEO Optimization', 'Website Maintenance', 'Both Platforms Together'],
    popular: false,
    highlights: [
      '1 Ad Platform: Meta Ads OR Google Ads (Client picks)',
      '4 static creatives / posters per month',
      'Campaign setup, targeting & weekly optimization',
      'Monthly performance report (WhatsApp / PDF)',
      'Ad spend separate & 100% client-funded'
    ],
    features: {
      adPlatforms: '1 Platform (Meta Ads OR Google Ads)',
      creatives: '4 static creatives per month',
      videos: '—',
      seo: '—',
      websiteMaintenance: '—',
      landingPage: '—',
      productShoot: '—',
      brandingGuidance: '—',
      strategyCalls: 'Monthly performance summary',
      reporting: 'Monthly performance report'
    }
  },
  {
    id: 'business-growth',
    name: 'Business Growth',
    price: '₹19,999',
    period: '/month',
    badge: 'Most Popular & Recommended',
    tagline: 'Run both search & social channels, engage audiences with reels, and get SEO groundwork.',
    recommendedAdSpend: '₹20,000 – ₹40,000 / month',
    bestFor: 'Businesses ready to scale where paid ads, social video content, and SEO start compounding together.',
    popular: true,
    highlights: [
      'Both Platforms: Meta Ads + Google Ads Management',
      '8–10 social media creatives per month',
      '2 reels / short videos per month',
      'Basic on-page SEO + monthly optimization',
      'Minor website maintenance (content updates & small fixes)',
      'Monthly performance report + strategy call'
    ],
    features: {
      adPlatforms: '2 Platforms (Meta Ads + Google Ads)',
      creatives: '8–10 social media creatives per month',
      videos: '2 reels / short videos per month',
      seo: 'Basic on-page SEO + monthly optimization',
      websiteMaintenance: 'Minor website updates & maintenance',
      landingPage: '—',
      productShoot: '—',
      brandingGuidance: '—',
      strategyCalls: 'Monthly strategy call',
      reporting: 'Detailed monthly report + strategy call'
    }
  },
  {
    id: 'premium-brand',
    name: 'Premium Brand',
    price: '₹29,999',
    period: '/month (starting)',
    badge: 'Full Brand Suite',
    tagline: 'Full brand build-out — we don\'t just run ads, we build & manage your brand authority.',
    recommendedAdSpend: '₹40,000+ / month',
    bestFor: 'Brands ready to dominate online with custom shoots, technical SEO, dedicated management, and an included 3-page landing page.',
    popular: false,
    highlights: [
      'Both Platforms: Advanced management + retargeting funnels',
      '15+ social media creatives per month',
      '4–6 professionally edited reels / videos per month',
      '1 product / model shoot per month',
      'Brand identity guidance (visual consistency, tone, assets)',
      'Advanced SEO (technical + content strategy)',
      '3-Page Inquiry Landing Page (Home/About + Services + Contact form built & hosted)',
      'Ongoing website maintenance',
      'Dedicated account manager + priority support'
    ],
    features: {
      adPlatforms: '2 Platforms, Advanced Funnels & Retargeting',
      creatives: '15+ social media creatives per month',
      videos: '4–6 professionally edited reels',
      seo: 'Advanced Technical + Content SEO',
      websiteMaintenance: 'Ongoing website maintenance',
      landingPage: '✔ 3-Page Inquiry Landing Page included (built & hosted)',
      productShoot: '✔ 1 product / model shoot per month',
      brandingGuidance: '✔ Brand identity guidance & visual assets',
      strategyCalls: 'Dedicated account manager + Priority strategy calls',
      reporting: 'Full monthly report + dedicated support'
    }
  }
];

const faqs = [
  {
    question: 'Why are ad spend budgets billed separately from management fees?',
    answer: 'Keeping ad spend separate ensures 100% financial transparency. Your ad budget is paid directly to Google or Meta through your own company ad account. You retain complete ownership of your ad account, pixel data, and payment history — while SalHurry charges a fixed, transparent fee for strategy, execution, creative production, and optimization.'
  },
  {
    question: 'What is included in the 3-Page Inquiry Landing Page under the Premium Brand tier?',
    answer: 'Under the Premium Brand tier (₹29,999/month starting), we build and host a high-converting 3-page web infrastructure (Home/About + Services + Inquiry Contact Form). This ensures your traffic converts into high-intent leads without extra web development fees.'
  },
  {
    question: 'What is the key difference between Starter (₹9,999) and Business Growth (₹19,999)?',
    answer: 'Starter focuses on 1 platform (Meta OR Google) with 4 static posters and no video. Business Growth expands your reach to BOTH Google and Meta, doubles static creatives (8–10), adds 2 video reels per month, includes basic on-page SEO + website maintenance, and includes a monthly strategy call.'
  },
  {
    question: 'Are there any long-term contract locks or setup fees?',
    answer: 'No hidden setup fees and no restrictive multi-year contracts! All our packages operate on flexible month-to-month service terms. You can upgrade or adapt based on your business growth.'
  },
  {
    question: 'How is the recommended ad spend determined for each package?',
    answer: 'Recommended ad spend reflects the ideal budget needed to generate statistically meaningful lead data and sales conversions for the ad channels included in that tier. While you can adjust ad budgets, spending within the recommended range ensures maximum ROI.'
  },
  {
    question: 'What if we need extra custom product shoots or multi-location campaigns?',
    answer: 'For brands with multiple locations, custom shoot requirements, or enterprise scopes, we can customize the Premium Brand package with modular add-ons to fit your exact business goals.'
  }
];

export default function DigitalMarketingPackagesContent() {
  const { openModal } = useContactModal();
  const [activeTab, setActiveTab] = useState<'all' | 'starter' | 'business-growth' | 'premium-brand'>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'customizer' | 'comparison'>('cards');

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* DARK HERO SECTION WITH CURVED BOTTOM */}
      <section className="relative bg-[#0A0A0A] text-white pt-6 pb-24 sm:pb-32 px-4 sm:px-6 md:px-12 overflow-hidden rounded-b-[40px] sm:rounded-b-[60px] md:rounded-b-[80px] shadow-2xl">
        {/* Neon Smudge Background Effects */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#2D3321] blur-[120px] rounded-full opacity-40 pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-[#1A1C18] blur-[100px] rounded-full opacity-30 pointer-events-none" />

        <Navbar />

        <div className="max-w-7xl mx-auto pt-10 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#A3E635]/40 bg-[#A3E635]/10 text-[#A3E635] text-xs font-semibold uppercase tracking-widest mb-6">
              <Zap className="w-3.5 h-3.5" />
              Transparent & Honest Execution Tiers
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Digital Marketing Packages <br className="hidden sm:block" />
              <span className="text-[#A3E635] font-serif italic font-normal">Designed for Scalable Growth</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8 font-light">
              Simple, honest execution tiers — built so you know exactly what you’re getting, where your ad budget goes, and how to scale predictably.
            </p>

            {/* Quick Value Badges */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-300 font-medium mb-4">
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
                <ShieldCheck className="w-4 h-4 text-[#A3E635]" /> 100% Client-Owned Ad Accounts
              </span>
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
                <Zap className="w-4 h-4 text-[#A3E635]" /> Zero Hidden Commission Fees
              </span>
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
                <TrendingUp className="w-4 h-4 text-[#A3E635]" /> Flexible Month-to-Month Terms
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HERO IMAGE SHOWCASE SECTION WITH CURVED EMBED */}
      <section className="bg-white py-12 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto -mt-16 sm:-mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F9FAFB] border border-gray-200 p-6 sm:p-10 rounded-[40px] sm:rounded-[60px] shadow-xl">
          <div className="lg:col-span-6 space-y-4">
            <span className="inline-block px-3.5 py-1 bg-[#A3E635]/20 text-black text-xs font-bold rounded-full uppercase tracking-wider">
              High-Impact Execution
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              We Don&apos;t Just Run Ads — We Build Complete Marketing Systems
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              From creative poster design to video reels, landing pages, and lead tracking — every package is structured to maximize return on ad spend (ROAS) across Google and Meta.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#A3E635] flex items-center justify-center text-black font-bold text-xs">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">Reels Production</div>
                  <div className="text-[10px] text-gray-500">Short-form video assets</div>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#A3E635] flex items-center justify-center text-black font-bold text-xs">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">ROAS Tracking</div>
                  <div className="text-[10px] text-gray-500">Weekly ad optimization</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[260px] sm:h-[340px] rounded-[28px] overflow-hidden shadow-2xl group border border-gray-200">
            <Image
              src="/images/Salhurry-digital-Marketing.webp"
              alt="SalHurry Digital Marketing Packages and Campaign ROI Growth Dashboard"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* UPGRADE SPOTLIGHT BANNER */}
      <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-16">
        <div className="bg-[#F9FAFB] border border-gray-200 rounded-[32px] p-6 sm:p-8 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#A3E635] text-black font-bold flex items-center justify-center text-sm shrink-0 shadow-md">
                <Star className="w-5 h-5 fill-black text-black" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#A3E635] font-bold">Recommended Tier</span>
                <h4 className="text-lg font-bold text-gray-900">Why 80%+ of businesses choose Business Growth (₹19,999/mo)</h4>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-700">
              <span className="bg-white border border-gray-200 px-3 py-1.5 rounded-lg flex items-center gap-2 font-medium shadow-sm">
                <div className="flex items-center gap-1">
                  <MetaIcon className="w-3.5 h-3.5 text-[#0084FF]" />
                  <GoogleIcon className="w-3.5 h-3.5" />
                </div>
                <span>Meta + Google Ads</span>
              </span>
              <span className="bg-white border border-gray-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium shadow-sm">
                <Check className="w-3.5 h-3.5 text-[#A3E635]" /> 8–10 Creatives + 2 Video Reels
              </span>
              <span className="bg-white border border-gray-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium shadow-sm">
                <Check className="w-3.5 h-3.5 text-[#A3E635]" /> On-Page SEO + Website Upkeep
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* VIEW MODE PILL SELECTOR (Single master control positioned above content) */}
      <div className="px-4 sm:px-6 max-w-7xl mx-auto mb-8 text-center">
        <div className="inline-flex flex-col sm:flex-row justify-center p-1.5 bg-[#1A1A1A] border border-white/10 rounded-[28px] sm:rounded-full text-xs sm:text-sm font-medium gap-1 shadow-2xl">
          <button
            onClick={() => setViewMode('cards')}
            className={`flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-full transition-all ${
              viewMode === 'cards' ? 'bg-[#A3E635] text-black font-bold shadow-lg' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" /> Package Tiers
          </button>
          <button
            onClick={() => setViewMode('customizer')}
            className={`flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-full transition-all ${
              viewMode === 'customizer' ? 'bg-[#A3E635] text-black font-bold shadow-lg' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Sliders className="w-4 h-4" /> Custom Builder & Lead Estimator
          </button>
          <button
            onClick={() => setViewMode('comparison')}
            className={`flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-full transition-all ${
              viewMode === 'comparison' ? 'bg-[#A3E635] text-black font-bold shadow-lg' : 'text-gray-400 hover:text-white'
            }`}
          >
            <PieChart className="w-4 h-4" /> Side-by-Side Matrix
          </button>
        </div>
      </div>

      {/* VIEW MODE 1: TIER CARDS GRID (LIGHT THEME WITH CONTRAST POPPED RECOMMENDED CARD) */}
      {viewMode === 'cards' && (
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-24">
          {/* Mobile Tier Filter Tabs (All Packages, Starter, Business Growth, Premium Brand) */}
          <div className="flex sm:hidden overflow-x-auto gap-2 pb-4 mb-6 scrollbar-none">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === 'all' ? 'bg-[#A3E635] text-black' : 'bg-gray-100 text-gray-600'
              }`}
            >
              All Packages (3)
            </button>
            {packagesData.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => setActiveTab(pkg.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1 ${
                  activeTab === pkg.id ? 'bg-[#A3E635] text-black' : 'bg-gray-100 text-gray-600'
                }`}
              >
                <span>{pkg.name}</span>
                {pkg.popular && <Star className="w-3 h-3 fill-current" />}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {packagesData
              .filter((pkg) => activeTab === 'all' || activeTab === pkg.id)
              .map((pkg, idx) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative flex flex-col justify-between rounded-[36px] p-6 sm:p-8 transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-[#1A1A1A] text-white border-2 border-[#A3E635] shadow-2xl lg:-translate-y-2'
                      : 'bg-[#F9FAFB] text-gray-900 border border-gray-200 hover:border-gray-300 shadow-md'
                  }`}
                >
                  {/* Top Badge */}
                  {pkg.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#A3E635] text-black font-extrabold text-[10px] uppercase tracking-widest px-4 py-1 rounded-full shadow-md whitespace-nowrap flex items-center gap-1.5">
                      {pkg.popular && <Star className="w-3 h-3 fill-black text-black" />}
                      <span>{pkg.badge}</span>
                    </div>
                  )}

                  <div>
                    {/* Tier Header */}
                    <div className="mb-6 pt-2">
                      <h3 className={`text-2xl font-bold mb-2 flex items-center justify-between ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                        {pkg.name}
                        {pkg.popular && <Star className="w-5 h-5 text-[#A3E635] fill-[#A3E635]" />}
                      </h3>
                      <p className={`text-xs min-h-[36px] leading-snug ${pkg.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                        {pkg.tagline}
                      </p>

                      <div className="mt-4 flex items-baseline gap-1">
                        <span className={`text-3xl sm:text-4xl font-extrabold ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                          {pkg.price}
                        </span>
                        <span className={`text-xs font-medium ${pkg.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                          {pkg.period}
                        </span>
                      </div>
                    </div>

                    {/* Recommended Ad Spend Box */}
                    <div className={`rounded-2xl p-3.5 mb-6 border ${pkg.popular ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'}`}>
                      <div className={`text-[10px] uppercase tracking-wider font-bold mb-1 ${pkg.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                        Recommended Ad Spend
                      </div>
                      <div className="text-xs font-semibold text-[#A3E635]">{pkg.recommendedAdSpend}</div>
                      <div className={`text-[10px] mt-0.5 ${pkg.popular ? 'text-gray-500' : 'text-gray-400'}`}>
                        (Client-funded on ad account)
                      </div>
                    </div>

                    {/* Highlights List */}
                    <div className="space-y-3 mb-8">
                      <p className={`text-[10px] uppercase tracking-widest font-bold mb-2 ${pkg.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                        What&apos;s Included
                      </p>
                      {pkg.highlights.map((item, i) => (
                        <div key={i} className={`flex items-start gap-2.5 text-xs leading-snug ${pkg.popular ? 'text-gray-200' : 'text-gray-700'}`}>
                          <Check className="w-4 h-4 text-[#A3E635] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}

                      {/* Not Included Section */}
                      {pkg.notIncluded && pkg.notIncluded.length > 0 && (
                        <div className={`pt-4 border-t mt-4 ${pkg.popular ? 'border-white/10' : 'border-gray-200'}`}>
                          <p className={`text-[10px] uppercase tracking-widest font-bold mb-2 ${pkg.popular ? 'text-gray-500' : 'text-gray-400'}`}>
                            Not Included
                          </p>
                          {pkg.notIncluded.map((item, i) => (
                            <div key={i} className={`flex items-center gap-2 text-xs line-through ${pkg.popular ? 'text-gray-500' : 'text-gray-400'}`}>
                              <X className="w-3.5 h-3.5 shrink-0 opacity-60" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div>
                    <div className={`mb-5 text-[11px] italic p-3 rounded-xl ${pkg.popular ? 'bg-white/5 text-gray-300' : 'bg-white text-gray-600 border border-gray-100'}`}>
                      <strong>Best For:</strong> {pkg.bestFor}
                    </div>

                    <button
                      onClick={() => openModal(`${pkg.name} Package (${pkg.price}${pkg.period})`)}
                      className={`w-full py-3.5 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                        pkg.popular
                          ? 'bg-[#A3E635] text-black hover:bg-white hover:scale-105 shadow-lg'
                          : 'bg-black text-white hover:bg-[#A3E635] hover:text-black transition-all'
                      }`}
                    >
                      Get Started <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
          </div>
        </section>
      )}

      {/* VIEW MODE: CUSTOMIZER BUILDER & ESTIMATOR */}
      {viewMode === 'customizer' && (
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-16">
          <PackageCustomizer />
        </section>
      )}

      {/* Always show customizer on card mode as well */}
      {viewMode === 'cards' && (
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-16">
          <PackageCustomizer />
        </section>
      )}

      {/* AD SPEND TRANSPARENCY NOTICE BOX (MOVED BELOW CUSTOMIZER & LEAD FORECAST) */}
      <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <div className="bg-[#1A1A1A] text-white border border-gray-800 p-6 sm:p-8 rounded-[32px] shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between relative z-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#A3E635]/20 border border-[#A3E635]/40 flex items-center justify-center shrink-0">
                <Info className="w-6 h-6 text-[#A3E635]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                  Important Pricing Note on Ad Spend Transparency
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-3xl font-light">
                  All fees listed above are <strong className="text-white font-semibold">service and management fees only</strong>. Ad spend (paid directly to Meta or Google to run ads) is separate and paid by the client directly on their own ad account. This guarantees 100% financial transparency.
                </p>
              </div>
            </div>
            <button
              onClick={() => openModal('Ad Budget Consultation')}
              className="bg-[#A3E635] hover:bg-white text-black font-bold px-6 py-3 rounded-full text-xs transition-all shrink-0 w-full md:w-auto"
            >
              Talk to Ad Specialist
            </button>
          </div>
        </div>
      </section>

      {/* VIEW MODE 2: COMPARISON MATRIX TABLE (WITH BRAND LOGO ICONS) */}
      {viewMode === 'comparison' && (
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-24">

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Side-by-Side Package Comparison</h2>
            <p className="text-gray-600 text-sm">Compare features across all 3 tiers at a glance</p>
          </div>

          <div className="overflow-x-auto rounded-[32px] border border-gray-200 bg-white shadow-xl">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="p-6 text-sm font-bold text-gray-900 uppercase tracking-wider w-1/4">Feature</th>
                  <th className="p-6 text-sm font-bold text-gray-900 text-center">Starter ₹9,999</th>
                  <th className="p-6 text-sm font-bold text-black text-center bg-[#A3E635]/20 border-x border-[#A3E635]/40">
                    <span className="flex items-center justify-center gap-1">
                      <Star className="w-4 h-4 fill-black text-black" />
                      <span>Business Growth ₹19,999</span>
                    </span>
                  </th>
                  <th className="p-6 text-sm font-bold text-gray-900 text-center">Premium Brand ₹29,999+</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs sm:text-sm text-gray-700">
                <tr>
                  <td className="p-5 font-semibold text-gray-900">Ad Platforms</td>
                  <td className="p-5 text-center text-gray-600">
                    <span className="inline-flex items-center gap-1">
                      <MetaIcon className="w-3.5 h-3.5 text-[#0084FF]" /> <span>Meta OR</span> <GoogleIcon className="w-3.5 h-3.5" /> <span>Google</span>
                    </span>
                  </td>
                  <td className="p-5 text-center text-gray-900 font-bold bg-[#A3E635]/10 border-x border-[#A3E635]/30">
                    <span className="inline-flex items-center justify-center gap-1.5">
                      <MetaIcon className="w-3.5 h-3.5 text-[#0084FF]" />
                      <GoogleIcon className="w-3.5 h-3.5" />
                      <span>Both Meta + Google Ads</span>
                    </span>
                  </td>
                  <td className="p-5 text-center text-gray-700">
                    <span className="inline-flex items-center justify-center gap-1.5">
                      <MetaIcon className="w-3.5 h-3.5 text-[#0084FF]" />
                      <GoogleIcon className="w-3.5 h-3.5" />
                      <span>Advanced + Retargeting</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-gray-900">Social Creatives / Month</td>
                  <td className="p-5 text-center text-gray-600">4 Static Creatives</td>
                  <td className="p-5 text-center text-gray-900 font-bold bg-[#A3E635]/10 border-x border-[#A3E635]/30">8–10 Social Creatives</td>
                  <td className="p-5 text-center text-gray-700">15+ Social Creatives</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-gray-900">Reels / Short Videos</td>
                  <td className="p-5 text-center text-gray-400">—</td>
                  <td className="p-5 text-center text-gray-900 font-bold bg-[#A3E635]/10 border-x border-[#A3E635]/30">2 Reels / Videos</td>
                  <td className="p-5 text-center text-gray-700">4–6 Pro Edited Reels</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-gray-900">SEO Groundwork</td>
                  <td className="p-5 text-center text-gray-400">—</td>
                  <td className="p-5 text-center text-gray-900 font-bold bg-[#A3E635]/10 border-x border-[#A3E635]/30">Basic On-Page SEO</td>
                  <td className="p-5 text-center text-gray-700">Advanced Technical SEO</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-gray-900">Website Maintenance</td>
                  <td className="p-5 text-center text-gray-400">—</td>
                  <td className="p-5 text-center text-gray-900 font-bold bg-[#A3E635]/10 border-x border-[#A3E635]/30">Minor Content Updates</td>
                  <td className="p-5 text-center text-gray-700">Ongoing Maintenance</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-gray-900">3-Page Inquiry Landing Page</td>
                  <td className="p-5 text-center text-gray-400">—</td>
                  <td className="p-5 text-center text-gray-400 bg-[#A3E635]/10 border-x border-[#A3E635]/30">—</td>
                  <td className="p-5 text-center text-gray-900 font-bold">✔ Built & Hosted Included</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-gray-900">Product / Model Shoot</td>
                  <td className="p-5 text-center text-gray-400">—</td>
                  <td className="p-5 text-center text-gray-400 bg-[#A3E635]/10 border-x border-[#A3E635]/30">—</td>
                  <td className="p-5 text-center text-gray-900 font-bold">✔ 1 Shoot / Month</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-gray-900">Brand Identity Guidance</td>
                  <td className="p-5 text-center text-gray-400">—</td>
                  <td className="p-5 text-center text-gray-400 bg-[#A3E635]/10 border-x border-[#A3E635]/30">—</td>
                  <td className="p-5 text-center text-gray-900 font-bold">✔ Visual Style & Assets</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-gray-900">Strategy Calls & Account</td>
                  <td className="p-5 text-center text-gray-600">Monthly Summary</td>
                  <td className="p-5 text-center text-gray-900 font-bold bg-[#A3E635]/10 border-x border-[#A3E635]/30">Monthly Strategy Call</td>
                  <td className="p-5 text-center text-gray-700">Dedicated Manager + Priority Support</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-gray-900">Recommended Ad Spend</td>
                  <td className="p-5 text-center text-gray-600">₹10K – ₹15K / mo min</td>
                  <td className="p-5 text-center text-gray-900 font-bold bg-[#A3E635]/10 border-x border-[#A3E635]/30">₹20K – ₹40K / mo</td>
                  <td className="p-5 text-center text-gray-700">₹40K+ / mo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* SECOND IMAGE SHOWCASE BANNER (MEGAPHONE MARKETING & TEAM IMAGE) */}
      <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[320px] rounded-[36px] overflow-hidden shadow-xl border border-gray-200 group">
            <Image
              src="/images/megaphone-marketing-salhurry.webp"
              alt="SalHurry Megaphone Growth Marketing and Lead Generation Execution"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
              <span className="text-[#A3E635] text-xs font-bold uppercase tracking-widest mb-1">Brand Amplification</span>
              <h3 className="text-xl font-bold">Targeted Audience Reach</h3>
              <p className="text-xs text-gray-300 mt-1">We put your offers in front of high-intent buyer segments.</p>
            </div>
          </div>

          <div className="relative h-[320px] rounded-[36px] overflow-hidden shadow-xl border border-gray-200 group">
            <Image
              src="/images/Salhurry-divegrid-peoples.jpeg"
              alt="SalHurry Performance Marketing and Strategic Team Execution"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
              <span className="text-[#A3E635] text-xs font-bold uppercase tracking-widest mb-1">Expert Team</span>
              <h3 className="text-xl font-bold">Dedicated Growth Specialists</h3>
              <p className="text-xs text-gray-300 mt-1">Direct support from performance marketers and creative strategists.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION (LIGHT THEME STYLED) */}
      <section className="px-4 sm:px-6 md:px-12 max-w-5xl mx-auto mb-24">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 border border-gray-200 rounded-full text-[10px] uppercase tracking-widest text-gray-500 mb-4">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Digital Marketing Package FAQs</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group bg-[#F9FAFB] border border-gray-200 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900 text-base">
                <span>{faq.question}</span>
                <span className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center group-open:rotate-180 transition-transform text-[#A3E635]">
                  <ChevronDown className="w-4 h-4 text-black" />
                </span>
              </summary>
              <p className="mt-4 text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA SECTION (DARK CONTRAST BANNER) */}
      <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-16 text-center">
        <div className="bg-[#1A1A1A] text-white border border-gray-800 rounded-[40px] p-10 sm:p-16 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Need a Custom Marketing Strategy or Regional Scope?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 font-light">
              We also design tailored performance marketing programs and brand acceleration systems for businesses across Kerala and the UAE.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openModal('Custom Marketing Scope')}
                className="bg-[#A3E635] text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-white hover:scale-105 transition-all shadow-xl flex items-center gap-2"
              >
                Book Strategy Consultation <PhoneCall className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
