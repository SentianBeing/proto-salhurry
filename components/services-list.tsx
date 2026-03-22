'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Target, TrendingUp, Cog, Users, Lightbulb, ArrowRight } from 'lucide-react';

const servicesList = [
    {
        id: '01',
        title: 'Growth Strategy',
        description: 'Every successful growth system starts with a clear strategy. We work with businesses to understand their market, define their positioning, and design structured plans for customer acquisition.',
        icon: Target,
        image: 'https://res.cloudinary.com/der2xk0cv/image/upload/v1772370499/salhurry_lvye6e.png',
        link: '/services/growth-strategy',
        color: 'text-[#84cc16]', // Lime green
    },
    {
        id: '02',
        title: 'Marketing & Ads',
        description: 'We design and manage performance-driven marketing campaigns that generate leads and customers through digital channels. Our approach focuses on data, targeting, and continuous optimization.',
        icon: TrendingUp,
        image: 'https://res.cloudinary.com/der2xk0cv/image/upload/v1772209780/4e1e77f2d32b8838af32d9dd56e7b7c3_sghypy.jpg',
        link: '/services/marketing-and-ads',
        color: 'text-blue-500',
    },
    {
        id: '03',
        title: 'Systems & Automation',
        description: 'We build the infrastructure that enables businesses to scale their marketing and sales processes efficiently.',
        icon: Cog,
        image: 'https://picsum.photos/seed/tech/800/600',
        link: '/services/systems-and-automation',
        color: 'text-orange-500',
    },
    {
        id: '04',
        title: 'Social Media Growth',
        description: 'We help brands grow online presence through consistent content, platform management, and audience engagement.',
        icon: Users,
        image: 'https://picsum.photos/seed/social/800/600',
        link: '/services/social-media-growth',
        color: 'text-purple-500',
    },
    {
        id: '05',
        title: 'Creative Campaigns',
        description: 'We design creative marketing campaigns that combine strategy and storytelling to generate attention and market reach.',
        icon: Lightbulb,
        image: 'https://picsum.photos/seed/creative/800/600',
        link: '/services/creative-campaigns',
        color: 'text-rose-500',
    }
];

export default function ServicesList() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-24 relative bg-[#060606] px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto z-10">
            {/* The Light Container */}
            <div className="bg-gradient-to-br from-[#f4fdf4] to-[#f0fae6] rounded-[40px] p-8 md:p-16 lg:p-24 w-full shadow-[0_0_50px_rgba(163,230,53,0.1)]">
                <div className="mb-16 md:mb-24 text-center">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-black tracking-tight">
                        What we do <span className="font-serif italic" style={{ fontFamily: "'Playfair Display', 'Times New Roman', serif" }}>best.</span>
                    </h2>
                </div>

                <div className="flex flex-col border-t border-black/15">
                    {servicesList.map((service, index) => {
                        const isHovered = hoveredIndex === index;
                        return (
                            <div
                                key={service.id}
                                className="group border-b border-black/15 relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <Link
                                    href={service.link}
                                    className="block py-8 md:py-12 flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-12 w-full transition-colors duration-300"
                                >
                                    {/* Left: Number and Title */}
                                    <div className="flex items-start gap-6 md:gap-10 md:w-[40%] shrink-0">
                                        <span className={`text-base md:text-lg font-bold transition-colors duration-300 ${isHovered ? service.color : 'text-black/30'}`}>
                                            {service.id}
                                        </span>
                                        <h3 className={`text-3xl md:text-4xl lg:text-[44px] font-semibold tracking-tight transition-colors duration-300 ${isHovered ? service.color : 'text-black'}`}>
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Right: Image & Description */}
                                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-end gap-6 md:w-[60%] shrink-0">
                                        
                                        {/* Desktop Image Reveal */}
                                        <AnimatePresence>
                                            {isHovered && (
                                                <motion.div
                                                    initial={{ width: 0, opacity: 0 }}
                                                    animate={{ width: 240, opacity: 1 }}
                                                    exit={{ width: 0, opacity: 0 }}
                                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                                    className="hidden lg:block relative h-36 overflow-hidden rounded-xl shrink-0"
                                                >
                                                    <Image
                                                        src={service.image}
                                                        alt={service.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                        
                                        {/* Mobile/Tablet Image Reveal */}
                                        <AnimatePresence>
                                            {isHovered && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0, marginBottom: 0 }}
                                                    animate={{ height: 180, opacity: 1, marginBottom: 16 }}
                                                    exit={{ height: 0, opacity: 0, marginBottom: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="block lg:hidden w-full relative overflow-hidden rounded-xl shrink-0"
                                                >
                                                     <Image
                                                        src={service.image}
                                                        alt={service.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        <p className="text-base md:text-lg text-black/70 leading-relaxed lg:max-w-sm text-left">
                                            {service.description}
                                        </p>
                                    </div>
                                </Link>
                                
                                {/* Hover background gradient effect (optional subtle touch) */}
                                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transform -translate-x-full transition-all duration-1000 group-hover:opacity-100 group-hover:translate-x-full pointer-events-none`}></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
