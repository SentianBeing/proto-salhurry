'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function HeroImages() {
    return (
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none mx-auto max-w-[1600px] w-full px-2 lg:px-12 z-0 overflow-hidden lg:overflow-visible flex items-center h-[450px] md:h-[600px]">
            <div className="relative w-full flex justify-between items-center text-white/50">

                {/* Left Card */}
                <motion.div
                    initial={{ opacity: 0, x: -100, y: 30, rotate: -25 }}
                    animate={{ opacity: 1, x: 0, y: 0, rotate: -12 }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    whileHover={{ rotate: -5, scale: 1.05, transition: { duration: 0.8, ease: "easeOut" } }}
                    className="w-[130px] sm:w-[200px] lg:w-[300px] xl:w-[380px] h-[180px] sm:h-[280px] lg:h-[400px] xl:h-[480px] relative -translate-x-8 sm:-translate-x-4 lg:-translate-x-12 xl:-translate-x-4 rounded-[20px] lg:rounded-[40px] overflow-hidden border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)] lg:shadow-[0_40px_80px_rgba(0,0,0,0.8)] pointer-events-auto"
                >
                    <div className="absolute inset-0 bg-black/60 lg:hidden z-10"></div>
                    <Image
                        src="/images/salhurry-pc-retro.webp"
                        alt="Performance Tracking"
                        fill
                        className="object-cover opacity-80"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4 lg:p-8 h-2/3 flex items-end z-20">
                        <span className="text-sm sm:text-xl lg:text-3xl font-bold font-sans tracking-tight lg:tracking-tighter text-white/90 leading-tight">PERFORMANCE<br />MARKETING</span>
                    </div>
                </motion.div>

                {/* Right Card */}
                <motion.div
                    initial={{ opacity: 0, x: 100, y: 30, rotate: 25 }}
                    animate={{ opacity: 1, x: 0, y: 0, rotate: 12 }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    whileHover={{ rotate: 5, scale: 1.05, transition: { duration: 0.8, ease: "easeOut" } }}
                    className="w-[130px] sm:w-[200px] lg:w-[300px] xl:w-[380px] h-[180px] sm:h-[280px] lg:h-[400px] xl:h-[480px] relative translate-x-8 sm:translate-x-4 lg:translate-x-12 xl:translate-x-4 rounded-[20px] lg:rounded-[40px] overflow-hidden border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)] lg:shadow-[0_40px_80px_rgba(0,0,0,0.8)] pointer-events-auto"
                >
                    <div className="absolute inset-0 bg-black/60 lg:hidden z-10"></div>
                    <Image
                        src="/images/salhurry-greek.webp"
                        alt="Aesthetic Visualization"
                        fill
                        className="object-cover opacity-80"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4 lg:p-8 h-2/3 flex items-end justify-end text-right z-20">
                        <span className="text-sm sm:text-xl lg:text-3xl font-bold font-serif italic text-white/90 leading-tight">STRUCTURAL<br />GROWTH</span>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
