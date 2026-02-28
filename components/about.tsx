'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto py-12 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div className="relative mb-12 lg:mb-0">
          <div className="relative h-[350px] sm:h-[500px] w-full lg:w-[450px] rounded-[30px] sm:rounded-[40px] overflow-hidden">
            <Image 
              src="https://picsum.photos/800/1000?random=10"
              alt="Office"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute -bottom-8 -right-2 sm:bottom-[-40px] sm:right-0 bg-[#1A1A1A] p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] text-white w-[240px] sm:w-[280px] shadow-2xl z-10"
          >
            <h3 className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">530<span className="text-[#A3E635]">+</span></h3>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-4 sm:mb-6">Trusted by our clients</p>
            <div className="flex items-center -space-x-2 sm:-space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#1A1A1A] overflow-hidden relative">
                  <Image src={`https://picsum.photos/100/100?random=${i+20}`} alt="User" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              ))}
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#1A1A1A] bg-gray-800 flex items-center justify-center text-[10px] sm:text-xs font-bold">
                +
              </div>
            </div>
          </motion.div>
        </div>

        <div>
          <span className="inline-block px-4 py-1 border border-gray-200 rounded-full text-[10px] uppercase tracking-widest text-gray-500 mb-6">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight mb-8">
            Why You Should<br />Choose <span className="text-[#A3E635]">Salhurry</span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-lg">
            We proudly introduce ourselves as a digital creative agency committed to realizing our clients&apos; vision and mission through creative, innovative, and technology-based solutions in the digital world.
          </p>
          <button className="flex items-center gap-2 font-bold text-sm group">
            Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
