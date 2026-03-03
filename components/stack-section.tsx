'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Layers } from 'lucide-react';
import { IconCloud } from './ui/icon-cloud';

const stackItems = [
    {
        title: 'Next.js',
        desc: 'Our primary framework for building blazing-fast, SEO-optimized web applications with server-side rendering and static site generation.',
        color: '#000000',
    },
    {
        title: 'Node.js',
        desc: 'We build scalable, high-performance backend microservices and APIs using Node.js to handle complex enterprise logic.',
        color: '#339933',
    },
    {
        title: 'ASP.NET',
        desc: 'For enterprise-grade applications requiring robust security, strict typing, and seamless Microsoft ecosystem integration, we rely on ASP.NET Core.',
        color: '#512BD4',
    },
    {
        title: 'Django',
        desc: 'When projects demand rapid development of secure, database-heavy backend systems, our team leverages the power of Python and Django.',
        color: '#092E20',
    },
    {
        title: 'PostgreSQL',
        desc: 'Our relational database of choice for projects requiring complex queries, ACiD compliance, and massive horizontal scaling.',
        color: '#4169E1',
    },
    {
        title: 'MySQL',
        desc: 'We utilize MySQL for high-availability database clustering and legacy system integrations.',
        color: '#4479A1',
    },
    {
        title: 'Shopify',
        desc: 'For e-commerce scaling, we build headless architectures and custom liquid themes that convert traffic into loyal customers.',
        color: '#7AB55C',
    },
    {
        title: 'Webflow',
        desc: 'When marketing teams need absolute control without sacrificing code quality, we develop highly interactive, custom Webflow experiences.',
        color: '#146EF5',
    },
    {
        title: 'Framer',
        desc: 'For creative sites requiring complex nested animations and 3D interactions with extreme performance, Framer is our go-to tool.',
        color: '#0055FF',
    }
];

const slugs = [
    "nextdotjs",
    "nodedotjs",
    "dotnet",
    "django",
    "postgresql",
    "mysql",
    "shopify",
    "webflow",
    "framer",
    "react",
    "typescript",
    "tailwindcss",
    "prisma",
    "amazonaws",
    "vercel",
    "docker",
    "figma",
    "github"
];

export default function StackSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="tech-stack" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* Left Column: Stack Details / Accordion */}
                <div>
                    <span className="inline-block px-4 py-1 border border-gray-200 rounded-full text-[10px] uppercase tracking-widest text-gray-500 mb-6 font-bold flex items-center w-fit gap-2">
                        <Layers className="w-3.5 h-3.5" /> Modern Engineering
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight">
                        Our Technology <br /> <span className="text-gray-400">Ecosystem</span>
                    </h2>
                    <p className="text-gray-500 text-lg mb-10">
                        We don't believe in one-size-fits-all. We architect bespoke solutions using the exact stack your business logic requires to scale efficiently.
                    </p>

                    <div className="flex flex-col gap-4">
                        {stackItems.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    className={`border rounded-3xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#A3E635] shadow-sm bg-[#A3E635]/5' : 'border-gray-100 hover:border-gray-200 bg-white'}`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                    >
                                        <span className={`text-xl font-bold ${isOpen ? 'text-[#1A1A1A]' : 'text-gray-600'}`}>{item.title}</span>
                                        <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#A3E635] text-black' : 'bg-gray-100 text-gray-400'}`}>
                                            {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                        </span>
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-6 text-gray-600 leading-relaxed bg-[#A3E635]/5">
                                                    {item.desc}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Column: Interactive Icon Cloud */}
                <div className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-center">
                    <IconCloud slugs={slugs} />
                </div>

            </div>
        </section>
    );
}
