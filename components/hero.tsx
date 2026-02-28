'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useContactModal } from '@/context/contact-modal-context';

export default function Hero() {
  const { openModal } = useContactModal();
  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto pt-12 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white"
        >
          Accelerate Sales With <br />
          Growth Systems
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-base sm:text-lg text-gray-400 max-w-md lg:mt-4 leading-relaxed"
        >We transform businesses through qualified leads, data-driven insights, and strategic growth systems — helping brands scale faster and unlock their true market potential.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 items-end">
        <div className="grid grid-cols-2 lg:flex lg:flex-col gap-4">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 sm:p-6 rounded-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">100<span className="text-[#A3E635]">+</span></h3>
            <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mt-1">Campaigns Executed</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 sm:p-6 rounded-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">10M<span className="text-[#A3E635]">+</span></h3>
            <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mt-1">Audience Reach Generated</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 sm:p-6 rounded-2xl col-span-2 lg:col-span-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">15<span className="text-[#A3E635]">+</span></h3>
            <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mt-1">Industries Served</p>
          </div>
        </div>

        <div className="relative group mt-12 lg:mt-0">
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full overflow-hidden rounded-[30px] sm:rounded-[40px]">
            <Image 
              src="/images/Salhurry-Sales%20&%20Marketing_by%20Divegrid%20pvt%20ltd.webp"
              alt="Salhurry Sales & Marketing"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            
            {/* Logo Overlay */}
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 flex items-center gap-2 text-white">
              <div className="relative w-24 h-8">
                <Image 
                  src="https://res.cloudinary.com/der2xk0cv/image/upload/v1768468698/eOOLuJEvTLWEYPDnDVB5EtBMEw_b1c3a0.svg" 
                  alt="Salhurry Logo" 
                  fill 
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Info Overlay */}
            <div className="absolute bottom-20 left-6 sm:bottom-8 sm:left-48 flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 text-white text-sm">
              <div>
                <p className="opacity-60 text-[8px] sm:text-[10px] uppercase mb-0.5 sm:mb-1">We are based in</p>
                <p className="font-medium text-[10px] sm:text-sm">Trivandrum, Kerala</p>
              </div>
              <div>
                <p className="opacity-60 text-[8px] sm:text-[10px] uppercase mb-0.5 sm:mb-1">Let&apos;s Talk</p>
                <p className="font-medium text-[10px] sm:text-sm">salhurry@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <motion.div 
            onClick={openModal}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-2 sm:-top-12 sm:-right-4 md:-top-16 md:right-12 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-[#A3E635] rounded-full flex items-center justify-center p-2 sm:p-4 cursor-pointer shadow-lg"
          >
            <div className="relative w-full h-full flex items-center justify-center">
               <svg className="absolute w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <text className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em]">
                  <textPath xlinkHref="#circlePath">
                    Get in touch • Get in touch • Get in touch • 
                  </textPath>
                </text>
              </svg>
              <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
