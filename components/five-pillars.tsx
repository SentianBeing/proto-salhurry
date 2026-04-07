'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const pillars = [
    {
        id: 0,
        label: 'Audience & Data',
        desc: 'Understanding your users deeply using data (behavior, interests, intent) to make smarter decisions.\n\n👉 Everything starts with knowing who and why',
        angle: -90, // Top
    },
    {
        id: 1,
        label: 'Content & Attention',
        desc: 'Creating high-impact content that captures and holds attention (short-form video, hooks, storytelling).\n\n👉 Attention is the new currency',
        angle: -18, // Top Right
    },
    {
        id: 2,
        label: 'Distribution & Channels',
        desc: 'Getting your content in front of the right people via platforms (Instagram, Google, LinkedIn, communities).\n\n👉 Even great content fails without distribution',
        angle: 54, // Bottom Right
    },
    {
        id: 3,
        label: 'Conversion Systems',
        desc: 'Turning visitors into leads/customers using landing pages, funnels, UX, and strong offers.\n\n👉 Traffic ≠ revenue, conversion does',
        angle: 126, // Bottom Left
    },
    {
        id: 4,
        label: 'Retention & Lifecycle',
        desc: 'Keeping users engaged and turning them into repeat customers through follow-ups, communities, and value loops.\n\n👉 Real money is made after the first conversion',
        angle: 198, // Top Left
    }
];

export default function FivePillars() {
    const [hoveredNode, setHoveredNode] = useState<number | null>(null);
    const [radius, setRadius] = useState(250); // Default large radius
    const [isMobile, setIsMobile] = useState(false);

    // Responsive Radius calculation
    React.useEffect(() => {
        const updateRadius = () => {
            const width = window.innerWidth;
            if (width < 400) {
                setRadius(120); // Very tiny constraint
                setIsMobile(true);
            } else if (width < 640) {
                setRadius(140); // Mobile
                setIsMobile(true);
            } else if (width < 1024) {
                setRadius(180); // Tablet
                setIsMobile(false);
            } else {
                setRadius(240); // Desktop
                setIsMobile(false);
            }
        };

        // initial call
        updateRadius();

        window.addEventListener('resize', updateRadius);
        return () => window.removeEventListener('resize', updateRadius);
    }, []);

    return (
        <section className="bg-[#0A0A0A] py-32 px-6 md:px-12 relative overflow-hidden flex flex-col items-center">

            {/* Heading Text */}
            <div className="text-center max-w-4xl mx-auto mb-20 relative z-20">
                <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight tracking-tight">
                    Custom data-driven, performance-focused <br className="hidden md:block" />
                    <span className="font-serif italic text-[#A3E635] font-normal pr-2">growth</span>
                    marketing solutions.
                </h2>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                    Our custom data-driven, performance-focused growth marketing solutions have helped companies of all shapes and sizes grow faster, regardless of size, industry, or revenue model.
                </p>
            </div>

            {/* Interactive Orbital Diagram */}
            <div className="relative w-full max-w-[800px] aspect-square flex items-center justify-center">

                {/* Massive Soft Green Glow Behind the circle */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.15)_0%,rgba(163,230,53,0.05)_40%,transparent_70%)] pointer-events-none scale-150"></div>

                {/* Central Core Text */}
                <div className="absolute z-20 text-center pointer-events-none">
                    <h3 className="text-[#A3E635] text-xl font-medium tracking-wide">The 5 Pillars</h3>
                    <p className="text-white text-lg">of Digital Marketing</p>
                </div>

                {/* Concentric Dashed Rings */}
                <div className="absolute w-[90%] h-[90%] border border-dashed border-white/10 rounded-full animate-[spin_120s_linear_infinite]"></div>
                <div className="absolute w-[60%] h-[60%] border border-dashed border-white/[0.05] rounded-full animate-[spin_80s_reverse_infinite]"></div>
                <div className="absolute w-[30%] h-[30%] border border-dashed border-white/[0.02] rounded-full animate-[spin_40s_linear_infinite]"></div>

                {/* Connecting Lines from Center */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="-400 -400 800 800">
                    {pillars.map((pillar) => {
                        const rad = (pillar.angle * Math.PI) / 180;
                        const x = Math.cos(rad) * radius;
                        const y = Math.sin(rad) * radius;
                        return (
                            <line
                                key={pillar.id}
                                x1="0" y1="0" x2={x} y2={y}
                                stroke="#A3E635"
                                strokeWidth="1"
                                strokeDasharray="4 4"
                            />
                        )
                    })}
                </svg>

                {/* Orbital Nodes */}
                <div className="absolute inset-0">
                    {pillars.map((pillar) => {
                        // Trigonometry to place nodes in a perfect circle
                        const rad = (pillar.angle * Math.PI) / 180;
                        // Shift coordinates so 0,0 is the center of the container
                        const x = `calc(50% + ${Math.cos(rad) * radius}px)`;
                        const y = `calc(50% + ${Math.sin(rad) * radius}px)`;

                        const isHovered = hoveredNode === pillar.id;

                        return (
                            <div
                                key={pillar.id}
                                className="absolute flex items-center justify-center -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                                style={{ left: x, top: y }}
                                onMouseEnter={() => !isMobile && setHoveredNode(pillar.id)}
                                onMouseLeave={() => !isMobile && setHoveredNode(null)}
                                onClick={() => isMobile && setHoveredNode(isHovered ? null : pillar.id)}
                            >
                                {/* Node Label */}
                                <div
                                    className={`absolute whitespace-nowrap text-[10px] sm:text-xs md:text-sm font-medium transition-colors duration-300 ${isHovered ? 'text-[#A3E635]' : 'text-[#A3E635]/70'
                                        }`}
                                    style={{
                                        // Refined text positioning to prevent mobile overlap
                                        bottom: pillar.angle === -90 ? (isMobile ? '20px' : '28px') : pillar.angle > 0 ? 'auto' : '100%',
                                        top: pillar.angle > 0 ? (isMobile ? '20px' : '28px') : 'auto',
                                        right: (pillar.angle > 90 || pillar.angle < -90) ? (isMobile ? '16px' : '24px') : 'auto',
                                        left: (pillar.angle < 90 && pillar.angle > -90) ? (isMobile ? '16px' : '24px') : 'auto',
                                        transform: pillar.angle === -90 || (isMobile && pillar.angle === 198) || (isMobile && pillar.angle === -18) ? 'translateY(0%)' : 'none'
                                    }}
                                >
                                    <span className="text-[10px] mr-1 opacity-50 font-mono hidden sm:inline">0{pillar.id + 1}</span>
                                    <span className="underline underline-offset-4 decoration-white/20 decoration-dashed">{pillar.label}</span>
                                </div>

                                {/* The Interactive Node Circle */}
                                <div className="relative z-10 w-4 h-4 rounded-full border-2 border-[#A3E635] bg-[#0A0A0A] cursor-pointer hover:scale-150 transition-transform duration-300 shadow-[0_0_15px_rgba(163,230,53,0.5)] flex items-center justify-center">
                                    <div className="w-1 h-1 bg-[#A3E635] rounded-full"></div>
                                </div>

                                <AnimatePresence>
                                    {isHovered && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                            className="absolute z-30 w-[200px] md:w-[280px] p-3 md:p-4 bg-[#0F0F0F]/90 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl pointer-events-none"
                                            style={{
                                                // Center tooltip on mobile if it's too close to edges, otherwise position smartly
                                                top: isMobile ? '30px' : pillar.angle < 0 ? '30px' : 'auto',
                                                bottom: isMobile ? 'auto' : pillar.angle > 0 ? '30px' : 'auto',
                                                left: isMobile ? '50%' : pillar.angle > 90 || pillar.angle < -90 ? 'auto' : '30px',
                                                right: isMobile ? 'auto' : pillar.angle > 90 || pillar.angle < -90 ? '30px' : 'auto',
                                                transform: isMobile ? 'translateX(-50%)' : 'none'
                                            }}
                                        >
                                            <p className="text-gray-300 text-[11px] md:text-xs leading-relaxed font-light whitespace-pre-wrap">
                                                {pillar.desc}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
