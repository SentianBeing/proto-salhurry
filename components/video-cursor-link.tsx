'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';

export default function VideoCursorLink({ src, link }: { src: string, link: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      ref={containerRef}
      className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-[#A3E635]/20 bg-[#111] block cursor-none group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="w-full h-full object-cover pointer-events-none"
      >
        <source src={src} type="video/mp4" />
      </video>
      
      {/* Custom Bubble Cursor */}
      <motion.div
        animate={{
          x: mousePosition.x - 45, // Center the 90px bubble
          y: mousePosition.y - 45,
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.1 }}
        className="pointer-events-none absolute left-0 top-0 w-[90px] h-[90px] rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/20 z-50 text-white font-bold text-[10px] tracking-wider uppercase text-center leading-relaxed shadow-xl"
      >
        Visit<br />Website
      </motion.div>
    </a>
  );
}
