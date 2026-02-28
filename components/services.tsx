'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Target, TrendingUp, Globe } from 'lucide-react';

const services = [
  {
    title: 'Growth Strategy & GTM Architecture',
    description: 'We design structured go-to-market systems, positioning frameworks, offer engineering, funnel mapping, and revenue roadmaps that give businesses clarity and direction before execution begins.',
    icon: Target,
    color: 'bg-[#2D2D2D]',
    iconColor: 'text-[#A3E635]',
    textColor: 'text-white',
    descColor: 'text-gray-400'
  },
  {
    title: 'Performance Marketing & Lead Generation',
    description: 'We build revenue-focused campaigns across multiple channels, optimizing funnels, creatives, and targeting to generate qualified leads, increase conversions, and drive measurable sales growth.',
    icon: TrendingUp,
    color: 'bg-[#A3E635]',
    iconColor: 'text-white',
    textColor: 'text-black',
    descColor: 'text-black/70'
  },
  {
    title: 'Brand & Digital Infrastructure',
    description: 'We create high-converting landing pages, UI/UX-driven websites, AI-powered automation systems, and performance-ready brand assets that support long-term scalability and customer acquisition.',
    icon: Globe,
    color: 'bg-[#2D2D2D]',
    iconColor: 'text-[#A3E635]',
    textColor: 'text-white',
    descColor: 'text-gray-400'
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
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed md:mt-12">
            We combine strategy, performance marketing, and scalable infrastructure to help businesses grow faster in a competitive and evolving market landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${service.color} p-8 sm:p-10 rounded-[30px] sm:rounded-[40px] flex flex-col gap-6 h-full`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.iconColor} bg-white/10`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold ${service.textColor}`}>
                {service.title}
              </h3>
              <p className={`text-sm leading-relaxed ${service.descColor}`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
