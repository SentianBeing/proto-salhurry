'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { useContactModal } from '@/context/contact-modal-context';

// Staggered Text Stack Variants
const textContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.25,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function WebsiteProjectsHero() {
  const { openModal } = useContactModal();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 5 Polaroid Cards - Explodes from center stack (0, 0) out to exact positions clear of text
  const polaroidCards = [
    {
      id: 'paperplane',
      title: 'Paperplane Studio',
      image: 'https://res.cloudinary.com/der2xk0cv/image/upload/v1772204480/rishi0_1_-AJivLpPK_bfnlgh.jpg',
      // Top-Left (Arx Crates in screenshot)
      initial: { opacity: 0, scale: 0.3, x: 0, y: 0, rotate: -4 },
      animate: {
        opacity: 1,
        scale: isMobile ? 0.5 : 1,
        x: isMobile ? -135 : -280,
        y: isMobile ? -190 : -250,
        rotate: -8,
      },
    },
    {
      id: 'transindia',
      title: 'Transindia Cooling',
      image: 'https://res.cloudinary.com/der2xk0cv/image/upload/v1772208495/Screenshot_2026-02-27_213719_nxaxrs.png',
      // Mid-Left (Winston Moore in screenshot)
      initial: { opacity: 0, scale: 0.3, x: 0, y: 0, rotate: -4 },
      animate: {
        opacity: 1,
        scale: isMobile ? 0.48 : 1,
        x: isMobile ? -145 : -540,
        y: isMobile ? 20 : -10,
        rotate: -12,
      },
    },
    {
      id: 'smoothdubai',
      title: 'Smooth Dubai',
      image: '/images/projects/smoothdubai.png',
      // Top-Right (Golden Hour in screenshot)
      initial: { opacity: 0, scale: 0.3, x: 0, y: 0, rotate: -4 },
      animate: {
        opacity: 1,
        scale: isMobile ? 0.5 : 1,
        x: isMobile ? 135 : 480,
        y: isMobile ? -190 : -210,
        rotate: 22,
      },
    },
    {
      id: 'sigmasand',
      title: 'Sigma Sands',
      image: 'https://res.cloudinary.com/der2xk0cv/image/upload/v1772207119/051737f6-fec7-4d05-9dbb-3c10f65d12cf_wu1bl6.png',
      // Bottom-Left
      initial: { opacity: 0, scale: 0.3, x: 0, y: 0, rotate: -4 },
      animate: {
        opacity: 1,
        scale: isMobile ? 0.48 : 1,
        x: isMobile ? -125 : -380,
        y: isMobile ? 250 : 250,
        rotate: 16,
      },
    },
    {
      id: 'greenhat',
      title: 'Greenhat Photo',
      image: '/images/projects/greenhatphotography.png',
      // Bottom-Right
      initial: { opacity: 0, scale: 0.3, x: 0, y: 0, rotate: -4 },
      animate: {
        opacity: 1,
        scale: isMobile ? 0.48 : 1,
        x: isMobile ? 125 : 420,
        y: isMobile ? 250 : 230,
        rotate: -10,
      },
    },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 pt-2 sm:pt-6 md:pt-10 pb-16 sm:pb-24 overflow-hidden bg-[#0A0A0A] text-white rounded-b-[36px] md:rounded-b-[72px]">
      {/* Background Soft Spotlight Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,51,33,0.45)_0%,rgba(10,10,10,0.98)_72%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[750px] sm:h-[750px] bg-[#A3E635] opacity-10 rounded-full blur-[180px] pointer-events-none" />

      {/* 1. SCATTERED POLAROID CARDS (Floating at outer edges on mobile & desktop) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 overflow-hidden">
        {polaroidCards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={card.initial}
            animate={card.animate}
            transition={{
              duration: 0.75,
              delay: index * 0.07,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto transform transition-all duration-300 hover:scale-110 hover:z-50 cursor-pointer"
            onClick={openModal}
          >
            {/* Polaroid Card */}
            <div className="bg-[#F8F9FA] text-black p-2 sm:p-2.5 pb-4 sm:pb-6 rounded-[16px] sm:rounded-[18px] shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-2 border-black/80 w-[115px] sm:w-[155px] md:w-[185px] lg:w-[200px]">
              <div className="relative w-full aspect-[4/3] rounded-[11px] overflow-hidden bg-gray-900 border border-black/10">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 115px, 220px"
                  unoptimized={card.image.startsWith('http')}
                />
              </div>
              <p className="mt-1.5 text-[10px] sm:text-xs font-extrabold text-gray-900 tracking-tight font-sans truncate pl-0.5">
                {card.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 2. TEXT STACK (Positioned tightly below Navbar) */}
      <motion.div
        variants={textContainerVariants}
        initial="hidden"
        animate="show"
        className="relative z-20 max-w-xl sm:max-w-2xl mx-auto text-center flex flex-col items-center gap-4 sm:gap-6 my-4 sm:my-8"
      >
        {/* SalHurry Badge */}
        <motion.div variants={textItemVariants}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-900/90 border border-white/20 rounded-full text-[11px] sm:text-xs font-semibold text-white tracking-wide shadow-xl backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#A3E635]" />
            <span>SalHurry Web Studio</span>
          </div>
        </motion.div>

        {/* Eyebrow */}
        <motion.div variants={textItemVariants}>
          <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.22em] text-[#A3E635] block">
            ONE PLAN. ONE SITE. DONE RIGHT.
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={textItemVariants}>
          <h1 className="text-3xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.05]">
            Your Website, <br />
            <span className="text-[#A3E635] italic font-serif">Handled.</span>
          </h1>
        </motion.div>

        {/* Paragraph Copy */}
        <motion.div variants={textItemVariants}>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 font-light max-w-[280px] sm:max-w-xl mx-auto leading-relaxed">
            A custom-built site, live in two weeks. No freelancers. No AI templates. No hassles, and no more sending people to your Instagram bio and hoping for the best.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={textItemVariants} className="pt-1">
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={openModal}
              className="px-6 sm:px-8 py-3.5 bg-[#A3E635] text-black font-extrabold rounded-full flex items-center gap-2.5 hover:bg-white hover:scale-105 transition-all text-xs uppercase tracking-wider shadow-xl shadow-[#A3E635]/25 group"
            >
              <span>RESERVE YOUR SPOT</span>
              <div className="w-5 h-5 rounded-full bg-black text-[#A3E635] flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight className="w-3 h-3" />
              </div>
            </button>

            <a
              href="#projects-grid"
              className="px-6 sm:px-8 py-3.5 bg-white/10 text-white border border-white/20 font-bold rounded-full flex items-center gap-2.5 hover:bg-white hover:text-black hover:scale-105 transition-all text-xs uppercase tracking-wider backdrop-blur-md group"
            >
              <span>EXPLORE DESIGNS</span>
              <div className="w-5 h-5 rounded-full bg-white/20 group-hover:bg-black group-hover:text-white flex items-center justify-center transition-colors">
                <ArrowRight className="w-3 h-3" />
              </div>
            </a>
          </div>
        </motion.div>

        {/* Guarantee Line */}
        <motion.div variants={textItemVariants}>
          <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs font-semibold text-gray-400 pt-0.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#A3E635]" />
            <span>100% Money-Back Guarantee</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
