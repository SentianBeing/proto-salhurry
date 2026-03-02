'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Vishnu Gopinath',
    role: 'Southern Sigma Ventures (SigmaSands), Kerala',
    image: 'https://picsum.photos/100/100?random=1',
    content: "SalHurry helped us scale Southern Sigma Ventures with a modern, data-driven approach. Their digital marketing and sales strategies brought consistent enquiries and real revenue growth. They truly opened new doors for our construction and mining business in Kerala.",
    rating: 5,
    date: '10:30 • Dec 15, 2025'
  },
  {
    name: 'Jimson',
    role: 'TransIndia Cooling Solutions',
    image: 'https://picsum.photos/100/100?random=2',
    content: "I didn’t expect the website to turn out this impressive. SalHurry exceeded my expectations completely. I even showcased it at an international conference. Their support was incredible — even late-night changes were handled instantly. I highly recommend them.",
    rating: 5,
    date: '14:20 • Dec 20, 2025'
  },
  {
    name: 'Mr. Joy Alex',
    role: 'Joseco Furniture',
    image: 'https://picsum.photos/100/100?random=3',
    content: "I’ve been in the furniture business for years, but SalHurry helped me understand modern marketing. They expanded our reach and positioned our products to a wider audience. I’m truly thankful for their guidance and support.",
    rating: 5,
    date: '09:15 • Dec 22, 2025'
  },
  {
    name: 'Shafiq Ali',
    role: 'Paperplane Wedding Studios',
    image: 'https://picsum.photos/100/100?random=4',
    content: "Working with SalHurry was seamless. They created a website that perfectly reflects our premium brand. Professional team, smooth process, and great results.",
    rating: 5,
    date: '11:45 • Dec 28, 2025'
  }
];

export default function Testimonials() {
  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto py-24">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 border border-gray-200 rounded-full text-[10px] uppercase tracking-widest text-gray-500 mb-6">
          Testimonials
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
          Hear From Our Clients
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm">
          Testimonial is a motivation for us to continue to improve quality and provide better satisfaction to every customer who entrusts us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#F9FAFB] p-8 rounded-[32px] border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image src={t.image} alt={t.name} fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h4 className="font-bold text-sm">{t.name}</h4>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">{t.role}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-8 italic">
              &quot;{t.content}&quot;
            </p>
            <div className="flex items-center justify-between">
              <p className="text-[10px] text-gray-400 font-mono">{t.date}</p>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-3 h-3 ${i < t.rating ? 'fill-[#A3E635] text-[#A3E635]' : 'text-gray-300'}`} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4">
        <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#A3E635] hover:text-black transition-all">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-[#A3E635]"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
        <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#A3E635] hover:text-black transition-all">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
