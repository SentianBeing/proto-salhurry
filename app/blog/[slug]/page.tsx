import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import Navbar from '@/layouts/navbar';
import Footer from '@/layouts/footer';
import { sanityClient } from '@/lib/sanity.client';
import { blogBySlugQuery } from '@/lib/sanity.queries';

export const revalidate = 60; // Revalidate every 60 seconds

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
    const blog = await sanityClient.fetch(blogBySlugQuery, { slug: params.slug });
    if (!blog) return { title: 'Not Found' };

    return {
        title: blog.seoTitle || `${blog.title} - SalHurry`,
        description: blog.seoDescription || blog.excerpt,
        openGraph: {
            images: [blog.seoImage || blog.coverImage],
        },
    };
}

// Portable Text custom components mapping existing typography styles
const portableTextComponents = {
    types: {
        image: ({ value }: any) => (
            <div className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden my-12">
                <Image
                    src={value.asset.url || value.url}
                    alt={value.alt || 'Blog image'}
                    fill
                    className="object-cover"
                />
            </div>
        ),
    },
    block: {
        h1: ({ children }: any) => <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-12 mb-6">{children}</h1>,
        h2: ({ children }: any) => <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-12 mb-6">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mt-10 mb-4">{children}</h3>,
        normal: ({ children }: any) => <p className="text-gray-500 text-lg leading-relaxed mb-6">{children}</p>,
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-[#A3E635] pl-6 py-2 my-8 text-xl italic text-gray-700 bg-gray-50 rounded-r-2xl">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }: any) => <ul className="list-disc list-inside text-gray-500 text-lg leading-relaxed mb-6 space-y-2">{children}</ul>,
        number: ({ children }: any) => <ol className="list-decimal list-inside text-gray-500 text-lg leading-relaxed mb-6 space-y-2">{children}</ol>,
    },
    listItem: {
        bullet: ({ children }: any) => <li>{children}</li>,
    },
    marks: {
        strong: ({ children }: any) => <strong className="font-bold text-black">{children}</strong>,
        link: ({ children, value }: any) => (
            <a href={value.href} className="text-[#A3E635] hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        ),
    },
};

export default async function BlogDetailPage({ params }: Props) {
    const blog = await sanityClient.fetch(blogBySlugQuery, { slug: params.slug });

    if (!blog) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <div className="bg-[#0A0A0A]">
                <Navbar />
            </div>

            <article className="pb-24">
                {/* Cover Headers */}
                <div className="bg-[#0A0A0A] pt-20 pb-32 px-6 md:px-12 text-center relative overflow-hidden">
                    {/* Extracted the same Neon blobs from other pages for consistency */}
                    <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#2D3321] blur-[120px] rounded-full opacity-40 pointer-events-none"></div>

                    <div className="max-w-4xl mx-auto relative z-10">
                        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                            <span className="text-[#A3E635] font-medium tracking-widest uppercase text-sm">
                                {new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </span>
                            {blog.categories?.map((cat: any) => (
                                <span key={cat.slug} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white uppercase tracking-widest">
                                    {cat.title}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                            {blog.title}
                        </h1>

                        {/* Author */}
                        {blog.author && (
                            <div className="flex items-center justify-center gap-4">
                                {blog.author.image && (
                                    <div className="w-12 h-12 rounded-full overflow-hidden relative">
                                        <Image src={blog.author.image} alt={blog.author.name} fill className="object-cover" />
                                    </div>
                                )}
                                <div className="text-left">
                                    <p className="text-white font-bold">{blog.author.name}</p>
                                    <p className="text-gray-400 text-sm">{blog.author.role}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Content Wrapper */}
                <div className="max-w-4xl mx-auto px-6 md:px-12 -mt-20 relative z-20">
                    {/* Cover Image */}
                    {blog.coverImage && (
                        <div className="relative w-full h-[400px] md:h-[600px] rounded-[40px] overflow-hidden shadow-2xl mb-16">
                            <Image
                                src={blog.coverImage}
                                alt={blog.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    {/* Portable Text Content */}
                    <div className="prose prose-lg max-w-none">
                        {blog.content ? (
                            <PortableText value={blog.content} components={portableTextComponents} />
                        ) : (
                            <p className="text-gray-500 text-lg leading-relaxed">{blog.excerpt}</p>
                        )}
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
