'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

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

export default function Blog({ initialPosts = [] }: { initialPosts?: any[] }) {
  const posts = initialPosts.length > 0
    ? initialPosts.map((post) => ({
      title: post.title,
      desc: post.excerpt,
      tag: post.categories?.[0]?.title || 'Blog',
      image: post.coverImage || 'https://picsum.photos/600/800?random=50',
      slug: `/blog/${post.slug}`
    }))
    : defaultPosts;

  return (
    <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto py-12 sm:py-24">
      <div className="bg-[#1A1A1A] rounded-[40px] sm:rounded-[60px] p-6 sm:p-12 md:p-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 sm:mb-16">
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
          <Link href="/blog" className="bg-[#A3E635] text-black px-8 py-3 rounded-full font-bold text-xs flex items-center gap-2 hover:bg-white transition-all w-fit">
            All Post <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
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
        </div>
      </div>
    </section>
  );
}
