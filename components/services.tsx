'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Target, TrendingUp, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Growth Strategy & GTM Architecture',
    description: "There's one thing we check before touching your marketing budget. Most agencies skip it entirely. It's the reason some businesses scale and others stall.",
    icon: Target,
    color: 'bg-[#2D2D2D]',
    iconColor: 'text-[#A3E635]',
    textColor: 'text-white',
    descColor: 'text-gray-400',
    link: '/services/growth-strategy'
  },
  {
    title: 'Performance Marketing & Lead Generation',
    description: 'We build revenue-focused campaigns across multiple channels, optimizing funnels, creatives, and targeting to generate qualified leads, increase conversions, and drive measurable sales growth.',
    icon: TrendingUp,
    color: 'bg-[#A3E635]',
    iconColor: 'text-white',
    textColor: 'text-black',
    descColor: 'text-black/70',
    link: '/services/performance-marketing'
  },
  {
    title: 'Brand & Digital Infrastructure',
    description: 'We create high-converting landing pages, UI/UX-driven websites, AI-powered automation systems, and performance-ready brand assets that support long-term scalability and customer acquisition.',
    icon: Globe,
    color: 'bg-[#2D2D2D]',
    iconColor: 'text-[#A3E635]',
    textColor: 'text-white',
    descColor: 'text-gray-400',
    link: '/services'
  }
];

export default function Services() {
  return (
    <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto py-12 sm:py-24">
      <div className="bg-[#1A1A1A] rounded-[40px] sm:rounded-[60px] p-8 sm:p-12 md:p-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <span className="inline-block px-4 py-1 border border-gray-700 rounded-full text-[10px] uppercase tracking-widest text-gray-400 mb-4 sm:6">
              Our Service
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              We Build Structured<br />Growth Systems
            </h2>
          </div>
          <div className="flex flex-col items-start gap-6 md:mt-12">
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
              We combine strategy, performance marketing, and scalable infrastructure to help businesses grow faster in a competitive and evolving market landscape.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#A3E635] text-black px-6 py-3 rounded-full text-sm font-bold hover:bg-white transition-all hover:scale-105 group"
            >
              Know More
              <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group ${service.color} p-8 sm:p-10 rounded-[30px] sm:rounded-[40px] flex flex-col gap-6 h-full`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.iconColor} bg-white/10`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold ${service.textColor}`}>
                {service.title}
              </h3>
              <p className={`text-sm leading-relaxed flex-grow ${service.descColor}`}>
                {service.description}
              </p>
              <Link href={service.link || '/services'} className={`mt-auto inline-flex items-center gap-2 text-sm font-semibold opacity-60 group-hover:opacity-100 transition-opacity ${service.textColor}`}>
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
