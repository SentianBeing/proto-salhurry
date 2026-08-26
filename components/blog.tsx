'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/**
 * Calculates accurate reading time based on total wordcount in Sanity PortableText body content or excerpt.
 * Standard average reading speed: 200 words per minute.
 */
export function calculateReadTime(content?: any[], excerpt?: string): string {
  let totalWords = 0;

  if (content && Array.isArray(content) && content.length > 0) {
    content.forEach((block: any) => {
      if (block._type === 'block' && Array.isArray(block.children)) {
        block.children.forEach((child: any) => {
          if (child.text && typeof child.text === 'string') {
            const words = child.text.trim().split(/\s+/).filter(Boolean);
            totalWords += words.length;
          }
        });
      }
    });
  }

  if (totalWords === 0 && excerpt && typeof excerpt === 'string') {
    const words = excerpt.trim().split(/\s+/).filter(Boolean);
    totalWords = words.length * 7;
  }

  if (totalWords === 0) {
    return '3 min read';
  }

  const minutes = Math.max(1, Math.ceil(totalWords / 200));
  return `${minutes} min read`;
}

export default function Blog({
  initialPosts = [],
  hideAllPostButton = false,
  variant = 'default'
}: {
  initialPosts?: any[];
  hideAllPostButton?: boolean;
  variant?: 'default' | 'transparent-light';
}) {
  // Fallbacks for visual layout demonstration
  const fallbackPosts = [
    {
      title: 'AEO vs. SEO: Differences, Overlap & Optimization Strategies',
      desc: 'Okay; it\'s time to settle this never ending debate and put this conversation to rest. Is AEO just SEO? Semantics aside, I put together an exact breakdown of both AEO...',
      tag: 'SEO Strategy',
      date: 'Jul 28, 2025',
      readTime: '7 min read',
      image: 'https://picsum.photos/600/400?random=50',
      slug: '#'
    },
    {
      title: 'How to Appear in ChatGPT & Monitor Your Brand\'s Performance',
      desc: 'Once upon a time, winning on Google was endgame. Now, the internet\'s favorite know-it-all, ChatGPT, is deciding which brands get mentioned (and which get ghosted). You can\'t bribe this beast...',
      tag: 'AI Marketing',
      date: 'Sep 30, 2025',
      readTime: '9 min read',
      image: 'https://picsum.photos/600/400?random=51',
      slug: '#'
    },
    {
      title: 'Building High-Converting Paid Ad Funnels for Local & Regional Brands',
      desc: 'Discover the exact step-by-step framework we use at SalHurry to build structured multi-channel campaigns that convert cold traffic into qualified sales inquiries...',
      tag: 'Performance Ads',
      date: 'Oct 14, 2025',
      readTime: '6 min read',
      image: 'https://picsum.photos/600/400?random=52',
      slug: '#'
    }
  ];

  const posts =
    initialPosts.length > 0
      ? initialPosts.map((post) => {
          const readTimeStr = calculateReadTime(post.content, post.excerpt);
          return {
            title: post.title,
            desc: post.excerpt,
            tag: post.categories?.[0]?.title || 'Blog',
            date: post.publishedAt
              ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })
              : 'Recent',
            readTime: readTimeStr,
            image: post.coverImage || 'https://picsum.photos/600/400?random=50',
            slug: `/blog/${post.slug?.current || post.slug}`
          };
        })
      : fallbackPosts;

  const isTransparent = variant === 'transparent-light';

  return (
    <section className={`px-4 sm:px-6 md:px-12 max-w-7xl mx-auto ${isTransparent ? 'py-8' : 'py-12 sm:py-24'}`}>
      <div className={`${isTransparent ? '' : 'bg-[#1A1A1A] rounded-[40px] sm:rounded-[60px] p-6 sm:p-12 md:p-20'}`}>
        {!isTransparent && (
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-8 sm:mb-12">
            <div className="max-w-xl">
              <span className="inline-block px-4 py-1 border border-gray-700 rounded-full text-[10px] uppercase tracking-widest text-gray-400 mb-4 sm:mb-6">
                Blog
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6">
                Latest Insight Updates
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Real talk on growth, sales, and marketing — written for Kerala and UAE businesses ready to scale.
              </p>
            </div>
            {!hideAllPostButton && (
              <Link
                href="/blog"
                className="bg-[#A3E635] text-black px-8 py-3.5 rounded-full font-bold text-xs flex items-center gap-2 hover:bg-white transition-all w-fit shrink-0 shadow-lg"
              >
                All Posts <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        )}

        {/* Blog Cards Grid matching exact layout reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post, i) => (
            <div key={post.slug || i} className="group flex">
              <Link
                href={post.slug}
                className={`flex flex-col w-full rounded-[24px] sm:rounded-[28px] overflow-hidden transition-all duration-300 border ${
                  isTransparent
                    ? 'bg-[#1F1F1F] border-gray-800 hover:border-gray-600 text-white shadow-xl hover:-translate-y-1'
                    : 'bg-[#222222] border-gray-800 hover:border-[#A3E635] text-white shadow-2xl hover:-translate-y-1'
                }`}
              >
                {/* TOP LANDSCAPE THUMBNAIL (ASPECT 16:9 / IDEAL BANNER HEIGHT) */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#121212] shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* BOTTOM CONTENT AREA (MATCHING REFERENCE IMAGE) */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-3">
                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold leading-snug text-white group-hover:text-[#A3E635] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed line-clamp-3">
                      {post.desc}
                    </p>
                  </div>

                  {/* Footer Row (Date | Read Time calculated dynamically from content wordcount) */}
                  <div className="flex items-center gap-3 text-xs text-gray-400 font-medium pt-3 border-t border-white/10">
                    <span>{post.date}</span>
                    <span className="text-gray-600">|</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
