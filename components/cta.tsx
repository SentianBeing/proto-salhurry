'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { useContactModal } from '@/context/contact-modal-context';

export default function CTA() {
  const { openModal } = useContactModal();
  return (
    <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto py-12 sm:py-24">
      <div className="relative h-[350px] sm:h-[400px] rounded-[40px] sm:rounded-[60px] overflow-hidden flex items-center justify-center text-center px-6">
        <Image
          src="https://picsum.photos/1200/600?grayscale"
          alt="Contact background"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-2xl">
          <span className="inline-block px-4 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-widest text-white/60 mb-4 sm:mb-6">
            Stay in touch
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 sm:mb-8">
            Ready To Talk
          </h2>
          <p className="text-white/60 mb-8 sm:mb-10 text-xs sm:text-sm max-w-md mx-auto">
            Contact us right now. We are pleased to announce our readiness to receive contacts from potential clients.
          </p>
          <button
            onClick={openModal}
            className="bg-[#A3E635] text-black px-6 sm:px-8 py-3 rounded-full font-bold text-sm hover:bg-white transition-all"
          >
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </section>
  );
}
