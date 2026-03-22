'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';

export default function Process() {
  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto py-24">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 border border-gray-200 rounded-full text-[10px] uppercase tracking-widest text-gray-500 mb-6">
          How We Work
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
          How Do We Work?
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
          Our approach focuses on building structured growth systems that help businesses acquire customers and scale effectively.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
        <div className="md:col-span-4 bg-[#1A1A1A] p-10 rounded-[40px] text-white flex flex-col justify-between min-h-[350px]">
          <div>
            <span className="text-4xl font-bold text-[#A3E635] block mb-6">01</span>
            <h3 className="text-2xl font-bold mb-4 leading-tight">Discovery</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              We begin by understanding your business, market, and current growth challenges. This step focuses on identifying your goals, customers, and existing marketing efforts.
            </p>
          </div>
          <button className="bg-[#A3E635] text-black px-6 py-3 rounded-full font-bold text-xs flex items-center gap-2 w-fit hover:bg-white transition-all">
            Learn More <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="md:col-span-8 relative rounded-[30px] sm:rounded-[40px] overflow-hidden group min-h-[250px] sm:min-h-[350px]">
          <Image
            src="https://res.cloudinary.com/der2xk0cv/image/upload/v1772370499/salhurry_lvye6e.png"
            alt="SalHurry Growth Process Steps"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <button className="absolute inset-0 m-auto w-12 h-12 sm:w-16 sm:h-16 bg-[#A3E635] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
            <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-black text-black" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            num: '02',
            title: 'Market & Opportunity Analysis',
            desc: 'We analyze the competitive landscape and identify opportunities for growth. This includes evaluating market demand, competitor strategies, and potential customer segments.'
          },
          {
            num: '03',
            title: 'Growth Strategy Blueprint',
            desc: 'Based on our findings, we design a structured growth plan. This blueprint defines positioning, campaign ideas, acquisition channels, and the roadmap for execution.'
          },
          {
            num: '04',
            title: 'Campaign Launch & Optimization',
            desc: 'We implement the strategy by launching targeted marketing campaigns across the selected channels. Campaign performance is continuously monitored and optimized to improve results and increase efficiency over time.'
          }
        ].map((item, i) => (
          <div key={i} className="bg-[#1A1A1A] p-10 rounded-[40px] text-white flex flex-col justify-between min-h-[350px]">
            <div>
              <span className="text-4xl font-bold text-white/20 block mb-6">{item.num}</span>
              <h3 className="text-2xl font-bold mb-4 leading-tight">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
            <button className="border border-white/20 text-white px-6 py-3 rounded-full font-bold text-xs flex items-center gap-2 w-fit hover:bg-white hover:text-black transition-all">
              Learn More <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
