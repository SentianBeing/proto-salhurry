'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface PortfolioItem {
  _id: string;
  title: string;
  slug: string;
  clientName: string;
  location: string;
  services: string;
  tags: string[];
  coverImage: string;
}

interface PortfolioGridProps {
  items: PortfolioItem[];
}

const colorVariants = [
  { color: 'bg-[#F3F4F6]', btnColor: 'border border-gray-200 text-black', textColor: 'text-black', descColor: 'text-gray-500' },
  { color: 'bg-[#1A1A1A]', btnColor: 'bg-[#A3E635] text-black', textColor: 'text-white', descColor: 'text-gray-400' },
];

export default function PortfolioGrid({ items }: PortfolioGridProps) {
  const [activeFilter, setActiveFilter] = useState('All');

  // Extract unique tags from items, plus some default ones if empty
  const allTags = ['All', 'Digital Marketing', 'Web Development', 'UI/UX', 'E-Com', 'Sales', 'Software Development'];

  const filteredItems = activeFilter === 'All' 
    ? items 
    : items.filter(item => item.tags?.includes(activeFilter));

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeFilter === tag 
                ? 'bg-[#A3E635] text-black shadow-lg shadow-[#A3E635]/20' 
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-black'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence>
          {filteredItems.map((project, i) => {
            const variant = colorVariants[i % colorVariants.length];
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project._id}
                className={`${variant.color} p-8 sm:p-12 rounded-[40px] flex flex-col gap-8`}
              >
                <div className="relative h-[250px] sm:h-[350px] rounded-[30px] overflow-hidden bg-gray-200">
                  {project.coverImage && (
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  {project.tags && project.tags.length > 0 && (
                     <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                        {project.tags.slice(0, 2).map((tag, idx) => (
                            <span key={idx} className="bg-black/70 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                                {tag}
                            </span>
                        ))}
                     </div>
                  )}
                </div>
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className={`text-2xl sm:text-3xl font-bold ${variant.textColor}`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm mt-2 font-medium ${variant.textColor} opacity-60`}>
                      {project.clientName} {project.services ? `— ${project.services}` : ''}
                    </p>
                  </div>
                  <Link href={`/portfolio/${project.slug}`} className={`px-6 py-3 rounded-full font-bold text-xs flex items-center gap-2 w-fit hover:opacity-80 transition-all ${variant.btnColor}`}>
                    View Project <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {filteredItems.length === 0 && (
        <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-300">No projects found for "{activeFilter}"</h3>
            <p className="text-gray-500 mt-4">Try selecting a different category.</p>
        </div>
      )}
    </div>
  );
}
