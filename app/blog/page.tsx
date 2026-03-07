import Navbar from '@/layouts/navbar';
import Footer from '@/layouts/footer';
import Blog from '@/components/blog';
import { sanityClient } from '@/lib/sanity.client';
import { allBlogsQuery } from '@/lib/sanity.queries';
import Antigravity from '@/components/antigravity';
import BlogSearch from '@/components/blog-search';
import ExploreMoreButton from '@/components/explore-more-button';
import { Suspense } from 'react';

import { constructMetadata } from '@/lib/seo';
import { Metadata } from 'next';

export const metadata: Metadata = constructMetadata({
    title: 'Growth Marketing & SEO Blog: Insights & Strategies | SalHurry',
    description: 'Explore the latest articles, insights, and industry trends on growth marketing, SEO, and web development curated by the SalHurry team.',
    path: '/blog',
});

export const dynamic = 'force-dynamic'; // Always fetch fresh data from Sanity

export default async function BlogListingPage() {
    const blogs = await sanityClient.fetch(allBlogsQuery);

    return (
        <main className="min-h-screen bg-white">
            <div className="relative bg-[#0A0A0A] overflow-hidden">
                <Antigravity
                    count={300}
                    magnetRadius={6}
                    ringRadius={7}
                    waveSpeed={0.4}
                    waveAmplitude={1}
                    particleSize={1.5}
                    lerpSpeed={0.05}
                    color="#a3e635"
                    autoAnimate
                    particleVariance={1}
                    rotationSpeed={0}
                    depthFactor={1}
                    pulseSpeed={3}
                    particleShape="capsule"
                    fieldStrength={10}
                />

                <div className="relative z-10 flex flex-col min-h-[500px] pointer-events-none">
                    <div className="pointer-events-auto">
                        <Navbar />
                    </div>

                    <div className="flex-1 flex flex-col justify-end pb-16 px-4 sm:px-6 md:px-12 max-w-7xl w-full mx-auto relative mt-12 sm:mt-20">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight pointer-events-auto w-fit">
                                Insights at the Intersection of Tech, Marketing & Sales
                            </h1>

                            <div className="pointer-events-auto inline-block w-full max-w-md">
                                <BlogSearch />
                            </div>
                        </div>

                        {/* Explore More Button positioned at bottom right */}
                        <ExploreMoreButton />
                    </div>
                </div>
            </div>

            {/* Reusing the existing Blog component but hiding the "All Post" button */}
            <div className="-mt-12 bg-white pb-20" id="blog-grid">
                <Suspense fallback={<div className="py-24 text-center text-gray-400 font-medium">Loading posts...</div>}>
                    <Blog initialPosts={blogs} hideAllPostButton={true} />
                </Suspense>
            </div>

            <Footer />
        </main>
    );
}
