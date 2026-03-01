import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import Navbar from '@/layouts/navbar';
import Footer from '@/layouts/footer';
import { sanityClient } from '@/lib/sanity.client';
import { caseStudyBySlugQuery } from '@/lib/sanity.queries';

export const revalidate = 60; // Revalidate every 60 seconds

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const caseStudy = await sanityClient.fetch(caseStudyBySlugQuery, { slug });
    if (!caseStudy) return { title: 'Not Found' };

    return {
        title: caseStudy.seoTitle || `${caseStudy.title} - SalHurry`,
        description: caseStudy.seoDescription || `Case study for ${caseStudy.clientName}`,
        openGraph: {
            images: [caseStudy.seoImage || caseStudy.galleryImages?.[0]],
        },
    };
}

// Reusing same mapping for Case Studies
const portableTextComponents = {
    types: {
        image: ({ value }: any) => (
            <div className="relative w-full h-[400px] md:h-[600px] rounded-[40px] overflow-hidden my-12 shadow-xl">
                <Image
                    src={value.asset.url || value.url}
                    alt={value.alt || 'Case study image'}
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
            <blockquote className="border-l-4 border-black pl-6 py-2 my-8 text-xl italic text-gray-700 bg-gray-50 rounded-r-2xl">
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
};

export default async function CaseStudyDetailPage({ params }: Props) {
    const { slug } = await params;
    const caseStudy = await sanityClient.fetch(caseStudyBySlugQuery, { slug });

    if (!caseStudy) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <div className="bg-[#0A0A0A]">
                <Navbar />
            </div>

            <article className="pb-24">
                {/* Cover Headers - Customized for Case Studies */}
                <div className="bg-[#0A0A0A] pt-20 pb-32 px-6 md:px-12 text-center relative overflow-hidden">
                    <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#2D3321] blur-[120px] rounded-full opacity-40 pointer-events-none"></div>

                    <div className="max-w-4xl mx-auto relative z-10">
                        <span className="inline-block px-4 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-widest text-white mb-6">
                            Case Study
                        </span>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#A3E635] leading-tight mb-8">
                            {caseStudy.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-8 mt-8">
                            <div className="text-left">
                                <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Client</p>
                                <p className="text-white text-lg font-medium">{caseStudy.clientName}</p>
                            </div>
                            {caseStudy.industry && (
                                <div className="text-left">
                                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Industry</p>
                                    <p className="text-white text-lg font-medium">{caseStudy.industry}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Content Wrapper */}
                <div className="max-w-4xl mx-auto px-6 md:px-12 -mt-20 relative z-20">

                    {/* Main Cover/Gallery Image */}
                    {caseStudy.galleryImages?.[0] && (
                        <div className="relative w-full h-[400px] md:h-[600px] rounded-[40px] overflow-hidden shadow-2xl mb-16">
                            <Image
                                src={caseStudy.galleryImages[0]}
                                alt={`${caseStudy.title} cover`}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    {/* Portable Text Content */}
                    <div className="prose prose-lg max-w-none">
                        {caseStudy.content && (
                            <PortableText value={caseStudy.content} components={portableTextComponents} />
                        )}
                    </div>

                    {/* Remaining Gallery Images */}
                    {caseStudy.galleryImages && caseStudy.galleryImages.length > 1 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                            {caseStudy.galleryImages.slice(1).map((imgUrl: string, idx: number) => (
                                <div key={idx} className="relative w-full h-[300px] md:h-[400px] rounded-[30px] overflow-hidden shadow-lg">
                                    <Image
                                        src={imgUrl}
                                        alt={`${caseStudy.title} gallery image ${idx + 2}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </article>

            <Footer />
        </main>
    );
}
