'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, LayoutGrid } from 'lucide-react';

export default function StickyWorksButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past midway (~500px down)
      const midwayThreshold = window.innerHeight * 0.5;
      if (window.scrollY > midwayThreshold) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showButton && (
        <motion.div
          initial={{ opacity: 0, x: -60, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -60, scale: 0.8 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-8 left-4 sm:left-6 md:left-8 z-50 pointer-events-auto"
        >
          <Link
            href="/website-projects"
            className="relative group flex items-center gap-3 px-5 py-3 sm:px-6 sm:py-3.5 bg-[#A3E635] text-black font-extrabold text-xs uppercase tracking-wider rounded-full shadow-[0_10px_35px_rgba(163,230,53,0.5)] hover:bg-white hover:scale-105 transition-all duration-300 border-2 border-black/80"
          >
            {/* Pulsing Outer Glow Ring */}
            <span className="absolute -inset-1 rounded-full bg-[#A3E635] opacity-60 blur-md animate-pulse group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10 flex items-center gap-2 sm:gap-2.5">
              <div className="w-6 h-6 rounded-full bg-black text-[#A3E635] flex items-center justify-center group-hover:scale-110 transition-transform">
                <LayoutGrid className="w-3.5 h-3.5" />
              </div>
              <span>View Our Works</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
