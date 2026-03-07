'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

const defaultPosts = [
  {
    title: '5 things you should know in Figma',
    desc: 'As a UI/UX designer, of course you shouldn&apos;t be unaware of these 5 things...',
    tag: 'Design',
    image: 'https://picsum.photos/600/800?random=50',
    slug: '#'
  },
  {
    title: 'Building best practice for skill',
    desc: 'Do you feel like your skills are lacking? Let&apos;s find out how to improve your skill...',
    tag: 'Skill',
    image: 'https://picsum.photos/600/800?random=51',
    slug: '#'
  },
  {
    title: 'Front end developer guide',
    desc: 'As a beginner, you should know the first steps when becoming a front end deve...',
    tag: 'Developer',
    image: 'https://picsum.photos/600/800?random=52',
    slug: '#'
  }
];

export default function Blog({ initialPosts = [], hideAllPostButton = false }: { initialPosts?: any[], hideAllPostButton?: boolean }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const searchParams = useSearchParams();
  const searchQuery = searchParams?.get('search')?.toLowerCase() || '';

  const posts = initialPosts.length > 0
    ? initialPosts.map((post) => ({
      title: post.title,
      desc: post.excerpt,
      // Create an array of categories so we can filter flexibly. Default to ['Blog'].
      categories: post.categories?.length > 0 ? post.categories.map((c: any) => c.title) : ['Blog'],
      // Keep track of primary tag for display purposes.
      tag: post.categories?.[0]?.title || 'Blog',
      image: post.coverImage || 'https://picsum.photos/600/800?random=50',
      slug: `/blog/${post.slug}`
    }))
    // Ensure default demo posts have standard categories format if no initialPosts
    : defaultPosts.map(p => ({ ...p, categories: [p.tag] }));

  // Extract unique categories from array of posts dynamically.
  const categories = useMemo(() => {
    const allCategories = new Set<string>();
    posts.forEach(post => {
      post.categories.forEach((cat: string) => allCategories.add(cat));
    });
    return ['All', ...Array.from(allCategories).sort()];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    let result = posts;

    if (selectedCategory !== 'All') {
      result = result.filter(post => post.categories.includes(selectedCategory));
    }

    if (searchQuery) {
      result = result.filter(post =>
        post.title.toLowerCase().includes(searchQuery) ||
        post.desc.toLowerCase().includes(searchQuery) ||
        post.categories.some((c: string) => c.toLowerCase().includes(searchQuery))
      );
    }

    return result;
  }, [posts, selectedCategory, searchQuery]);

  return (
    <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto py-12 sm:py-24">
      <div className="bg-[#1A1A1A] rounded-[40px] sm:rounded-[60px] p-6 sm:p-12 md:p-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-8 sm:mb-12">
          <div className="max-w-xl">
            <span className="inline-block px-4 py-1 border border-gray-700 rounded-full text-[10px] uppercase tracking-widest text-gray-400 mb-4 sm:mb-6">
              Blog
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Latest Insight Updates
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Follow our blog for specific topics, be it in science, technology, tips and tricks, etc. We always provide updated news and current trends.
            </p>
          </div>
          {!hideAllPostButton && (
            <Link href="/blog" className="bg-[#A3E635] text-black px-8 py-3 rounded-full font-bold text-xs flex items-center gap-2 hover:bg-white transition-all w-fit shrink-0">
              All Post <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Categories Toolbar */}
        {categories.length > 1 && (
          <div className="flex overflow-x-auto pb-4 mb-8 gap-3 sm:gap-4 scrollbar-hide no-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-xs font-bold transition-all shrink-0 border ${selectedCategory === category
                  ? 'bg-[#A3E635] text-black border-[#A3E635]'
                  : 'bg-transparent text-gray-400 border-gray-700 hover:border-gray-500 hover:text-white'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
              >
                <Link href={post.slug} className="block relative h-[350px] sm:h-[400px] rounded-[30px] sm:rounded-[40px] overflow-hidden mb-6 sm:mb-8">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  <div className="absolute bottom-8 left-8 right-8">
                    <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-white mb-4">
                      {post.tag}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-[#A3E635] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 mb-4">
                      {post.desc}
                    </p>
                    <span className="flex items-center gap-2 text-white text-xs font-bold group/btn">
                      Learn more <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
