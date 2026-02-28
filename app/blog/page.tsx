import Navbar from '@/layouts/navbar';
import Footer from '@/layouts/footer';
import Blog from '@/components/blog';
import { sanityClient } from '@/lib/sanity.client';
import { allBlogsQuery } from '@/lib/sanity.queries';

export const metadata = {
    title: 'Blog - SalHurry',
    description: 'Latest insights, updates, and news from SalHurry.',
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogListingPage() {
    const blogs = await sanityClient.fetch(allBlogsQuery);

    return (
        <main className="min-h-screen bg-white">
            <div className="bg-[#0A0A0A]">
                <Navbar />
                {/* Subtle header spacer for the blog page */}
                <div className="pt-32 pb-12 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Blog</h1>
                    <p className="text-gray-400 text-lg max-w-2xl">
                        Explore our latest articles, insights, and industry trends carefully curated by our team.
                    </p>
                </div>
            </div>

            {/* Reusing the existing Blog component but passing the full list of blogs */}
            <div className="-mt-12 bg-white pb-20">
                <Blog initialPosts={blogs} />
            </div>

            <Footer />
        </main>
    );
}
