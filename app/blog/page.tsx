import Navbar from '@/layouts/navbar';
import Footer from '@/layouts/footer';
import Blog from '@/components/blog';
import { sanityClient } from '@/lib/sanity.client';
import { allBlogsQuery } from '@/lib/sanity.queries';
import BlogSearch from '@/components/blog-search';
import { Suspense } from 'react';

import { constructMetadata } from '@/lib/seo';
import { Metadata } from 'next';

export const metadata: Metadata = constructMetadata({
    title: 'Growth Marketing & SEO Blog: Insights & Strategies | SalHurry',
    description: 'Explore the latest articles, insights, and industry trends on growth marketing, SEO, and web development curated by the SalHurry team.',
    path: '/blog',
});

export const revalidate = 60; // Revalidate the blog periodically instead of forcing dynamic

export default async function BlogListingPage() {
    const blogs = await sanityClient.fetch(allBlogsQuery);

    return (
        <main className="min-h-screen bg-white">
            <div className="relative bg-[#0A0A0A] overflow-hidden">
                {/* Subtle base gradient for depth instead of smudges */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-[#0A0A0A] to-[#0A0A0A] pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col min-h-[500px] sm:min-h-[600px]">
                    <div>
                        <Navbar />
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-center py-16 px-4 sm:px-6 md:px-12 w-full mx-auto">
                        <div className="max-w-4xl text-center flex flex-col items-center">
                            <span className="inline-block px-4 py-1.5 border border-[#A3E635]/30 text-[#A3E635] rounded-full text-xs tracking-widest font-medium uppercase mb-8 shadow-sm bg-[#A3E635]/10">
                                The Blog
                            </span>
                            
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-8 leading-[1.1] tracking-tight">
                                Insights at the Intersection of <br className="hidden md:block" />
                                <span className="font-serif italic font-normal text-white">Tech, Marketing & Sales</span>
                            </h1>
                            
                            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-light">
                                Discover the latest articles, growth strategies, and industry trends curated by the SalHurry team to help you scale.
                            </p>

                            <div className="w-full max-w-2xl mx-auto">
                                <BlogSearch />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid Section */}
            <div className="bg-white pb-24 pt-16 border-t border-gray-100" id="blog-grid">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <Suspense fallback={<div className="py-24 text-center text-gray-400 font-medium">Loading posts...</div>}>
                        <Blog initialPosts={blogs} hideAllPostButton={true} variant="transparent-light" />
                    </Suspense>
                </div>
            </div>

            <Footer />
        </main>
    );
}
