'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Globe, CheckCircle2, SlidersHorizontal, ChevronDown, X } from 'lucide-react';

export interface WebsiteProjectItem {
  id: string;
  title: string;
  url: string;
  displayUrl: string;
  industry: string;
  location: string;
  image: string;
  description: string;
  highlights: string[];
  category: string;
}

const websiteProjects: WebsiteProjectItem[] = [
  {
    id: 'paperplanewedding',
    title: 'Paperplane Wedding Studio',
    url: 'http://paperplanewedding.com',
    displayUrl: 'paperplanewedding.com',
    industry: 'Luxury Wedding Photography',
    category: 'Creative & Photography',
    location: 'Kerala & UAE',
    image: 'https://res.cloudinary.com/der2xk0cv/image/upload/v1772204480/rishi0_1_-AJivLpPK_bfnlgh.jpg',
    description: 'Luxury destination wedding photography and cinematography studio. Features full-screen visual galleries and booking.',
    highlights: ['Cinematic Photo Galleries', 'Minimalist Luxury Design', 'Wedding Story Showcase', 'High-Touch Inquiry Engine']
  },
  {
    id: 'transindiacooling',
    title: 'Transindia Cooling Solutions',
    url: 'http://transindiacooling.in',
    displayUrl: 'transindiacooling.in',
    industry: 'HVAC & Engineering',
    category: 'Engineering & Construction',
    location: 'Kerala & India',
    image: 'https://res.cloudinary.com/der2xk0cv/image/upload/v1772208495/Screenshot_2026-02-27_213719_nxaxrs.png',
    description: 'Commercial and industrial HVAC contracting firm. Features engineering project showcases and B2B quote inquiries.',
    highlights: ['Industrial Project Showcase', 'Service Breakdown', 'B2B RFQ Lead Channel', 'Technical Compliance']
  },
  {
    id: 'sigmasand',
    title: 'Sigma Sands',
    url: 'http://sigmasand.in',
    displayUrl: 'sigmasand.in',
    industry: 'Construction & Mining Materials',
    category: 'Engineering & Construction',
    location: 'Kerala, India',
    image: 'https://res.cloudinary.com/der2xk0cv/image/upload/v1772207119/051737f6-fec7-4d05-9dbb-3c10f65d12cf_wu1bl6.png',
    description: 'Manufactured sand and mining aggregates company in Kerala. Features product specifications and bulk ordering.',
    highlights: ['Eco M-Sand Showcase', 'Bulk Order Inquiry System', 'Mining & Infra Credentials', 'Corporate Layout']
  },
  {
    id: 'getfitkerala',
    title: 'GetFit Kerala',
    url: 'https://getfitkerala.com/',
    displayUrl: 'getfitkerala.com',
    industry: 'Fitness & Health',
    category: 'Healthcare & Fitness',
    location: 'Kerala, India',
    image: '/images/projects/getfitkerala.png',
    description: 'A fitness platform and gym discovery network across Kerala. Features gym searches and lead capture.',
    highlights: ['Gym & Trainer Directory', 'Fitness Discovery System', 'High-Energy Layout', 'Mobile Optimization']
  },
  {
    id: 'madhospitality',
    title: 'MAD Hospitality',
    url: 'https://madhospitality.sa/',
    displayUrl: 'madhospitality.sa',
    industry: 'Hospitality & Dining',
    category: 'Hospitality',
    location: 'Saudi Arabia (KSA)',
    image: 'https://res.cloudinary.com/der2xk0cv/video/upload/v1787916974/MAD_Hospitality_Entertainment_Mastering_The_Art_of_Doing_-_Google_Chrome_2026-08-28_16-19-30_online-video-cutter.com_gorueu.mp4',
    description: 'Restaurant management and hospitality group operating across Saudi Arabia. Features restaurant portfolio showcases.',
    highlights: ['Restaurant Portfolio', 'KSA Hospitality Branding', 'Corporate Showcase', 'High-Touch UX']
  },
  {
    id: 'billionheads',
    title: 'Billionheads',
    url: 'https://www.billionheads.in/',
    displayUrl: 'billionheads.in',
    industry: 'Creative Agency & Branding',
    category: 'Creative & Photography',
    location: 'India',
    image: '/images/projects/billionheads.png',
    description: 'Full-service creative ad agency and brand design studio. Features portfolio showcases and campaign highlights.',
    highlights: ['Creative Campaign Grid', 'Brand Storytelling', 'Agency Portfolio', 'Visual Polish']
  },
  {
    id: 'mastersentranceacademy',
    title: 'Masters Entrance Academy',
    url: 'https://www.mastersentranceacademy.com/',
    displayUrl: 'mastersentranceacademy.com',
    industry: 'Education & Coaching',
    category: 'Education',
    location: 'Kerala, India',
    image: '/images/projects/mastersentranceacademy.png',
    description: 'Competitive entrance examination coaching academy portal in Kerala. Features course structures and online registration.',
    highlights: ['Entrance Course Catalog', 'Student Result Showcase', 'Inquiry & Registration', 'Speed & Security']
  },
  {
    id: 'sarojconstructions',
    title: 'Saroj Constructions',
    url: 'https://sarojconstructions.in/',
    displayUrl: 'sarojconstructions.in',
    industry: 'Real Estate & Builders',
    category: 'Engineering & Construction',
    location: 'Kerala, India',
    image: '/images/projects/sarojconstructions.png',
    description: 'Residential and commercial builder website highlighting villa and construction projects across Kerala.',
    highlights: ['Residential & Commercial Grid', 'Floor Plan Visualizer', 'WhatsApp Direct Connect', 'Trust Badges & Reviews']
  },
  {
    id: 'arrowcabs',
    title: 'Arrow Cabs',
    url: 'https://arrowcabs.co.in',
    displayUrl: 'arrowcabs.co.in',
    industry: 'Transportation & Travel',
    category: 'Services & Mobility',
    location: 'Kerala, India',
    image: 'https://res.cloudinary.com/der2xk0cv/image/upload/v1787916693/e0c40e5d-81ba-4278-8a6b-50222d3bba1d_fpwyr1.png',
    description: 'Taxi booking and car rental website with fare estimation, fleet vehicle comparison cards, and booking buttons.',
    highlights: ['Instant Fare Estimator', 'Fleet Variety Cards', 'Airport & Tour Packages', 'Mobile 1-Tap Booking']
  },
  {
    id: 'linkconnectuae',
    title: 'LinkConnect UAE',
    url: 'https://www.linkconnectuae.com/',
    displayUrl: 'linkconnectuae.com',
    industry: 'Enterprise IT Infrastructure',
    category: 'Enterprise IT',
    location: 'Dubai, UAE',
    image: '/images/projects/linkconnectuae.png',
    description: 'Enterprise IT infrastructure, fiber optics, and security systems contractor in the UAE.',
    highlights: ['UAE IT Contracting Showcase', 'Fiber Optics & Security Grid', 'Enterprise B2B Inquiry', 'Tech Corporate Layout']
  },
  {
    id: 'smoothdubai',
    title: 'Smooth Dubai',
    url: 'https://smoothdubai.ae/',
    displayUrl: 'smoothdubai.ae',
    industry: 'Finance & Accounting',
    category: 'Finance & Consulting',
    location: 'Dubai, UAE',
    image: '/images/projects/smoothdubai.png',
    description: 'Corporate accounting, VAT compliance, tax advisory, and financial management consultancy operating in Dubai, UAE.',
    highlights: ['Corporate Tax & Accounting', 'UAE Financial Advisory', 'Finance Services Breakdown', 'Clean Corporate Layout']
  },
  {
    id: 'greenhatphotography',
    title: 'Greenhat Photography',
    url: 'https://greenhatphotography.com/',
    displayUrl: 'greenhatphotography.com',
    industry: 'Wedding Photography',
    category: 'Creative & Photography',
    location: 'Kerala, India',
    image: '/images/projects/greenhatphotography.png',
    description: 'A wedding photography and visual story studio in Kerala. Features photo story galleries and client booking inquiries.',
    highlights: ['Wedding Story Galleries', 'Visual Portfolio Grid', 'Client Inquiry Funnel', 'Responsive Layout']
  },
  {
    id: 'divegrid',
    title: 'Divegrid',
    url: 'https://divegrid.in/',
    displayUrl: 'divegrid.in',
    industry: 'Tech Consulting & Ventures',
    category: 'Enterprise IT',
    location: 'India & Global',
    image: '/images/projects/divegrid.png',
    description: 'Technology consulting and software venture firm. Designed with dark mode architecture, portfolio showcases, and digital capabilities.',
    highlights: ['Tech Grid Architecture', 'Dark Mode Interface', 'Corporate Portfolio', 'Global Capabilities']
  },
  {
    id: 'baemodest',
    title: 'Bae Modest',
    url: 'https://www.baemodest.com/',
    displayUrl: 'baemodest.com',
    industry: 'Modest Fashion & E-Commerce',
    category: 'E-Commerce & Retail',
    location: 'UAE & Global',
    image: '/images/projects/baemodest.png',
    description: 'An online storefront for designer modest fashion, abayas, and women\'s apparel with product lookbooks and checkout.',
    highlights: ['Modest Fashion Storefront', 'Product Lookbook Grid', 'Seamless Checkout', 'Mobile Shopping UX']
  },
  {
    id: 'elfi',
    title: 'Elfi UAE',
    url: 'https://www.elfi.ae/',
    displayUrl: 'elfi.ae',
    industry: 'Fashion & E-Commerce',
    category: 'E-Commerce & Retail',
    location: 'Dubai, UAE',
    image: '/images/projects/elfi.png',
    description: 'An online retail and lifestyle fashion store operating in Dubai, UAE. Features collection browsing and online ordering.',
    highlights: ['Fashion E-Com Catalog', 'Minimalist UAE Store', 'Product Search & Filter', 'Cart & Checkout']
  },
  {
    id: 'hiutdenim',
    title: 'Hiut Denim Co.',
    url: 'https://hiutdenim.co.uk/',
    displayUrl: 'hiutdenim.co.uk',
    industry: 'Artisanal Craft & Denim',
    category: 'E-Commerce & Retail',
    location: 'Wales, UK',
    image: 'https://res.cloudinary.com/der2xk0cv/image/upload/v1787917917/Screenshot_2026-08-28_172144_ksca3o.png',
    description: 'Artisanal organic denim maker based in Cardigan, Wales. Features heritage craftsmanship storytelling and online ordering.',
    highlights: ['Artisan Craft Storytelling', 'Fit Finder Guide', 'Heritage Denim Branding', 'Global E-Commerce']
  },
  {
    id: 'cuyana',
    title: 'Cuyana',
    url: 'https://cuyana.com/',
    displayUrl: 'cuyana.com',
    industry: 'Luxury Accessories & Goods',
    category: 'E-Commerce & Retail',
    location: 'USA & Global',
    image: '/images/projects/cuyana.png',
    description: 'Sustainable luxury women\'s leather accessories and apparel brand designed around timeless minimalism.',
    highlights: ['Minimalist Product Grid', 'Fewer Better Philosophy', 'Sustainable Luxury Design', 'Global E-Commerce']
  }
];

const categories = [
  'All',
  'Creative & Photography',
  'Engineering & Construction',
  'Healthcare & Fitness',
  'Hospitality',
  'Education',
  'Services & Mobility',
  'Finance & Consulting',
  'E-Commerce & Retail',
  'Enterprise IT'
];

const colorVariants = [
  {
    cardBg: 'bg-[#F8F9FA]',
    cardBorder: 'border-gray-200',
    titleColor: 'text-[#1A1A1A]',
    descColor: 'text-gray-600',
    btnColor: 'bg-[#0A0A0A] text-white hover:bg-[#A3E635] hover:text-black',
    badgeBg: 'bg-black/80 text-white',
    pillBg: 'bg-gray-200/70 text-gray-800'
  },
  {
    cardBg: 'bg-[#141414]',
    cardBorder: 'border-neutral-800',
    titleColor: 'text-white',
    descColor: 'text-gray-400',
    btnColor: 'bg-[#A3E635] text-black hover:bg-white',
    badgeBg: 'bg-[#A3E635] text-black',
    pillBg: 'bg-neutral-800 text-gray-300'
  }
];

export default function AllWebsiteProjectsContent() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const filteredProjects = activeCategory === 'All'
    ? websiteProjects
    : websiteProjects.filter(p => p.category === activeCategory);

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Desktop Category Filter Pills */}
      <div className="hidden md:flex flex-wrap items-center justify-center gap-3 mb-16 px-4">
        {categories.map((cat) => {
          const hasItems = cat === 'All' || websiteProjects.some(p => p.category === cat);
          if (!hasItems) return null;

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#A3E635] text-black shadow-lg shadow-[#A3E635]/25 scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Modern Minimal Mobile Filter UI */}
      <div className="md:hidden flex flex-col gap-4 mb-12 px-2">
        <div className="flex items-center justify-between gap-3 bg-gray-50 border border-gray-200 p-2.5 rounded-full shadow-sm">
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-xs font-bold transition-all shadow-md active:scale-95"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#A3E635]" />
            <span>Filter</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isMobileFilterOpen ? 'rotate-180' : ''}`} />
          </button>

          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-0.5 pr-2">
            <span className="text-[11px] font-semibold text-gray-400 whitespace-nowrap">Category:</span>
            <span className="bg-[#A3E635] text-black font-extrabold text-[11px] px-3.5 py-1 rounded-full whitespace-nowrap shadow-sm">
              {activeCategory}
            </span>
          </div>
        </div>

        {/* Expandable Filter Menu Drawer */}
        <AnimatePresence>
          {isMobileFilterOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-gray-200 rounded-[28px] p-5 shadow-2xl flex flex-col gap-3"
            >
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <div className="flex items-center gap-2 text-xs font-bold text-black uppercase tracking-wider">
                  <SlidersHorizontal className="w-4 h-4 text-[#A3E635]" />
                  <span>Select Industry Filter</span>
                </div>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-1.5 rounded-full bg-gray-100 text-gray-600 hover:text-black transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-2 pt-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setIsMobileFilterOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center justify-between ${
                      activeCategory === cat
                        ? 'bg-[#A3E635] text-black shadow-sm font-extrabold'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span>{cat}</span>
                    {activeCategory === cat && (
                      <span className="w-2 h-2 rounded-full bg-black"></span>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Projects Grid Repurposed from Home Case Study Section */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const variant = colorVariants[index % colorVariants.length];
            return (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                key={project.id}
                className={`${variant.cardBg} border ${variant.cardBorder} p-7 sm:p-10 rounded-[36px] sm:rounded-[44px] flex flex-col justify-between group hover:shadow-2xl transition-all duration-500`}
              >
                <div>
                  {/* Snapshot Image/Video Thumbnail Box */}
                  <div className="relative h-[260px] sm:h-[360px] rounded-[28px] sm:rounded-[32px] overflow-hidden mb-8 bg-gray-900 border border-black/10 group-hover:shadow-xl transition-all duration-500">
                    {project.image.includes('.mp4') ? (
                      <video
                        src={project.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    ) : (
                      <Image
                        src={project.image}
                        alt={`${project.title} Website Design`}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index < 4}
                        unoptimized={project.image.startsWith('http')}
                      />
                    )}
                    
                    {/* Top Overlay Badges */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10 pointer-events-none">
                      <span className={`${variant.badgeBg} font-bold text-[10px] uppercase tracking-widest px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-md`}>
                        {project.industry}
                      </span>
                      <span className="bg-black/75 backdrop-blur-md text-white text-[10px] font-semibold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                        <Globe className="w-3 h-3 text-[#A3E635]" />
                        {project.location}
                      </span>
                    </div>

                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Content Info */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight ${variant.titleColor}`}>
                        {project.title}
                      </h3>
                      <span className="text-xs font-mono text-gray-400 opacity-80">
                        {project.displayUrl}
                      </span>
                    </div>

                    <p className={`text-sm leading-relaxed ${variant.descColor} font-normal`}>
                      {project.description}
                    </p>

                    {/* Feature Highlights Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.highlights.map((h, i) => (
                        <span
                          key={i}
                          className={`text-[11px] font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 ${variant.pillBg}`}
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#A3E635]" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Link Button */}
                <div className="pt-8 mt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-end gap-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-6 py-3 rounded-full font-bold text-xs flex items-center gap-2 transition-all duration-300 shadow-sm ${variant.btnColor}`}
                  >
                    <span>Visit Live Website</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Empty Filter State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-24 bg-gray-50 rounded-[40px] border border-dashed border-gray-300">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">No projects found in this category</h3>
          <p className="text-gray-500 text-sm mb-6">Select "All" to view our complete web design showcase.</p>
          <button
            onClick={() => setActiveCategory('All')}
            className="px-6 py-3 bg-[#A3E635] text-black font-bold text-xs rounded-full hover:bg-black hover:text-white transition-all"
          >
            Show All Projects
          </button>
        </div>
      )}
    </div>
  );
}
