'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

const partners = [
  { name: 'Qashio', logo: 'https://res.cloudinary.com/der2xk0cv/image/upload/v1768468233/qashio-converted-webp_ohviau.webp' },
  { name: 'Bericht', logo: 'https://res.cloudinary.com/der2xk0cv/image/upload/v1768468643/bericht-logo_wqimzw.webp' },
  { name: 'Paper Plane', logo: 'https://res.cloudinary.com/der2xk0cv/image/upload/v1768468783/Logo_Paper_Plane_1_-DOPxwikv_t75rxc.svg' },
  { name: 'JD', logo: 'https://res.cloudinary.com/der2xk0cv/image/upload/v1768469037/jdPwNfUrNPBiWLZrZTd0IX5ejs_xnkwgq.avif' },
  { name: 'Mogf', logo: 'https://res.cloudinary.com/der2xk0cv/image/upload/v1768469047/Mogf6dy6ey7UN6CnIqgXjY5EXI_qyyn2j.avif' },
  { name: 'Aboitiz Power', logo: 'https://res.cloudinary.com/der2xk0cv/image/upload/v1768479259/aboitiz-power-logo_xn9fk0.png' },
];

export default function Partners() {
  return (
    <section className="py-12 border-y border-gray-100 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold text-center">Trusted by Industry Leaders</p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <motion.div 
          animate={{ x: [0, -1920] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex whitespace-nowrap gap-16 items-center"
        >
          {[...partners, ...partners, ...partners].map((partner, idx) => (
            <div key={`${partner.name}-${idx}`} className="relative w-32 h-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image 
                src={partner.logo} 
                alt={partner.name} 
                fill 
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
