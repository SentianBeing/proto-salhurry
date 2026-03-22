'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Compass, BriefcaseMedical, MonitorSmartphone, Factory, Plane } from 'lucide-react';

const industries = [
  {
    title: 'E-Commerce & D2C',
    description: 'Scaling direct-to-consumer lifestyle brands with aggressive CAC optimization and retention mechanics.',
    icon: ShoppingBag,
    color: 'bg-[#1A1A1A]',
    iconColor: 'text-[#A3E635]',
    textColor: 'text-white',
    descColor: 'text-gray-400'
  },
  {
    title: 'Construction & Real Estate',
    description: 'Building pipeline for developers through targeted lead acquisition and premium brand positioning.',
    icon: Compass,
    color: 'bg-[#F9FAFB]',
    iconColor: 'text-black',
    textColor: 'text-black',
    descColor: 'text-gray-500'
  },
  {
    title: 'Healthcare & Clinics',
    description: 'Connecting top medical practitioners with patients through compliant, high-intent local search engines.',
    icon: BriefcaseMedical,
    color: 'bg-[#1A1A1A]',
    iconColor: 'text-[#A3E635]',
    textColor: 'text-white',
    descColor: 'text-gray-400'
  },
  {
    title: 'Tech & SaaS',
    description: 'Lowering churn and capturing enterprise prospects using account-based marketing methodologies.',
    icon: MonitorSmartphone,
    color: 'bg-[#A3E635]',
    iconColor: 'text-black',
    textColor: 'text-black',
    descColor: 'text-black/70'
  },
  {
    title: 'Tours & Travel',
    description: 'Capitalizing on high-season windows and converting global tourists into confirmed bookings.',
    icon: Plane,
    color: 'bg-[#1A1A1A]',
    iconColor: 'text-[#A3E635]',
    textColor: 'text-white',
    descColor: 'text-gray-400'
  },
  {
    title: 'B2B Manufacturing',
    description: 'Digitizing wholesale networks to reach procurement officers globally and accelerate sales cycles.',
    icon: Factory,
    color: 'bg-[#F9FAFB]',
    iconColor: 'text-black',
    textColor: 'text-black',
    descColor: 'text-gray-500'
  }
];

export default function HomeIndustries() {
  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto py-24">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 border border-gray-200 rounded-full text-[10px] uppercase tracking-widest text-gray-500 mb-6">
          Who We Help
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
          Industries We Serve
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
          We bring our core thesis of structured growth engines and adapt it to the unique performance metrics of your industry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`p-10 rounded-[40px] flex flex-col gap-6 ${ind.color} hover:scale-[1.02] transition-transform duration-300 w-full`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${ind.color === 'bg-[#F9FAFB]' ? 'bg-white shadow-sm' : 'bg-white/10'} ${ind.iconColor}`}>
              <ind.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className={`text-2xl font-bold mb-3 ${ind.textColor}`}>
                {ind.title}
              </h3>
              <p className={`text-sm leading-relaxed ${ind.descColor}`}>
                {ind.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
