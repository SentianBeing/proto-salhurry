import React from 'react';
import Navbar from '@/layouts/navbar';
import Footer from '@/layouts/footer';
import CTA from '@/components/cta';
import { Target, TrendingUp, Users, Lightbulb, Cog, ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import HeroImages from './HeroImages';
import ServicesContent from '@/components/services-content';

export const metadata = {
    title: 'Our Services | SalHurry Growth Systems',
    description: 'Explore SalHurry\'s comprehensive growth services, from GTM Blueprint and Performance Marketing to Custom Digital Infrastructure and Automation.',
};

// Services data moved to ServicesContent component

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#060606] text-white selection:bg-[#A3E635] selection:text-black">
            <Navbar />

            {/* Hero Section Re-designed */}
            <div className="relative w-full min-h-[80vh] md:min-h-[90vh] flex flex-col items-center justify-center pt-16 md:pt-24 pb-12 overflow-hidden mx-auto">
                {/* Glow Effects */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#A3E635]/5 blur-[150px] rounded-full pointer-events-none"></div>

                {/* Content Container */}
                <div className="relative z-20 text-center px-4 md:px-8 mt-4 md:mt-24 w-full max-w-7xl mx-auto">
                    <p className="text-[11px] md:text-[13px] tracking-[0.3em] text-gray-400 uppercase font-bold mb-8">
                        Growth Solutions
                    </p>

                    <h1 className="flex flex-col items-center justify-center -gap-2 md:-gap-4">
                        <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[130px] font-medium tracking-tight text-white leading-[1.1]">
                            Next Level
                        </span>
                        <span
                            className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[11rem] leading-[0.9] text-white"
                            style={{ fontFamily: "'Playfair Display', 'Times New Roman', serif", fontStyle: "italic", marginLeft: "1rem" }}
                        >
                            Results
                        </span>
                    </h1>

                    <div className="mt-10 md:mt-16 flex items-center justify-center">
                        <Link
                            href="#services-content"
                            className="inline-flex items-center justify-center gap-2 border border-[#A3E635]/40 hover:border-[#A3E635] bg-transparent hover:bg-[#A3E635]/10 text-white px-8 py-3.5 rounded-full font-medium text-sm transition-all shadow-[0_0_20px_rgba(163,230,53,0.1)] backdrop-blur-sm group"
                        >
                            View Services
                            <ArrowDownIcon className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                <HeroImages />

            </div>

            {/* Services Content Section */}
            <div id="services-content">
                <ServicesContent />
            </div>

            {/* Special Digital Marketing Link Section */}
            <section className="py-24 bg-[#060606] border-t border-white/5">
                <div className="px-6 md:px-12 max-w-5xl mx-auto">
                    <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-[40px] p-10 md:p-16 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#A3E635]/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>

                        <div className="relative z-10 max-w-xl">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Looking for a Complete Digital Overhaul?
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                Discover our flagship Digital Marketing offering. We build comprehensive, data-driven ecosystems perfectly tailored for immediate lead generation and sustainable organic growth.
                            </p>
                        </div>

                        <div className="relative z-10 shrink-0">
                            <Link
                                href="/services/digital-marketing"
                                className="inline-flex items-center gap-2 bg-[#A3E635] text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all hover:scale-105"
                            >
                                View Digital Marketing
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}

function ArrowDownIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
    );
}
