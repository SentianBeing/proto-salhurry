import React from 'react';
import Navbar from '@/layouts/navbar';
import Footer from '@/layouts/footer';
import ScrollReveal from '@/components/scroll-reveal';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Settings, Users, Activity, Briefcase, CreditCard, BarChart3, Target, Megaphone, Zap } from 'lucide-react';
import { Metadata } from 'next';
import { sanityClient } from '@/lib/sanity.client';
import { portfolioBySlugQuery } from '@/lib/sanity.queries';
import { PortableText } from '@portabletext/react';

export const revalidate = 60;

const IconMap: Record<string, any> = {
  Settings, Users, Activity, Briefcase, CreditCard, BarChart3, Target, Megaphone, Zap
};

const ColorThemeMap: Record<string, { color: string, iconColor: string, textColor: string, descColor: string }> = {
  dark: { color: 'bg-[#1A1A1A]', iconColor: 'text-[#A3E635]', textColor: 'text-white', descColor: 'text-gray-400' },
  light: { color: 'bg-[#F9FAFB]', iconColor: 'text-black', textColor: 'text-black', descColor: 'text-gray-500' },
  accent: { color: 'bg-[#A3E635]', iconColor: 'text-black', textColor: 'text-black', descColor: 'text-black/70' }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = await sanityClient.fetch(portfolioBySlugQuery, { slug: resolvedParams.slug });
  if (!project) return {};

  return {
    title: project.seoTitle || `${project.title} | SalHurry Portfolio`,
    description: project.seoDescription || `Case study on how we helped ${project.clientName}.`,
    alternates: {
      canonical: `/portfolio/${resolvedParams.slug}`
    }
  };
}

export default async function PortfolioItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = await sanityClient.fetch(portfolioBySlugQuery, { slug: resolvedParams.slug });

  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": project.seoTitle || project.title,
    "description": project.seoDescription,
    "creator": {
      "@type": "Organization",
      "name": "SalHurry"
    },
    "mentions": {
      "@type": "Organization",
      "name": project.clientName || "Client"
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans text-[#1A1A1A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* SECTION 1 — Hero */}
      <div className="relative bg-[#0A0A0A] overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 px-6">
        <Navbar />
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 border border-[#A3E635]/30 text-[#A3E635] bg-[#A3E635]/10 rounded-full text-[10px] tracking-[0.2em] uppercase mb-8 font-bold backdrop-blur-sm">
              {project.tags && project.tags.length > 0 ? project.tags.join(' · ') : 'Case Study'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight max-w-5xl mx-auto">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-light max-w-3xl mx-auto mb-16 leading-relaxed">
              {project.seoDescription || "Explore how we delivered measurable growth and built scalable solutions."}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="w-full">
            <div className="flex flex-wrap justify-center gap-4 text-xs tracking-wider uppercase text-gray-400 mb-16">
              {project.clientName && (
                <div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                  <span className="text-white font-bold">Client:</span> {project.clientName}
                </div>
              )}
              {project.location && (
                <div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                  <span className="text-white font-bold">Location:</span> {project.location}
                </div>
              )}
              {project.services && (
                <div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                  <span className="text-white font-bold">Services:</span> {project.services}
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>

        {/* Hero Image */}
        {project.heroImage && (
          <ScrollReveal delay={0.4}>
            <div className="w-full max-w-[1200px] mx-auto h-[40vh] md:h-[70vh] relative rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(163,230,53,0.15)] border border-[#A3E635]/20 bg-[#1A1A1A]">
              <Image 
                src={project.heroImage} 
                alt={project.title} 
                fill 
                className="object-cover opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
            </div>
          </ScrollReveal>
        )}
      </div>

      {/* SECTION 2 — The Context */}
      {(project.contextTitle || project.contextDescription) && (
        <section className="py-24 px-6 max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-[#A3E635] text-[10px] tracking-widest uppercase font-bold mb-4 block">
              {project.contextTitle || "The Context"}
            </span>
            {project.contextDescription ? (
              <div className="prose prose-lg prose-gray max-w-none text-gray-600 leading-relaxed font-light mx-auto">
                <PortableText value={project.contextDescription} />
              </div>
            ) : null}
          </ScrollReveal>
        </section>
      )}

      {/* Optional Gallery Section (if inline images exist) */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <section className="py-12 px-6 max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.galleryImages.map((img: string, idx: number) => (
                <div key={idx} className={`relative h-[300px] md:h-[500px] rounded-[30px] overflow-hidden ${idx === 2 ? 'md:col-span-2' : ''}`}>
                  <Image src={img} alt={`Gallery ${idx}`} fill className="object-cover" />
                </div>
              ))}
           </div>
        </section>
      )}

      {/* SECTION 3 — The Features Engine */}
      {project.features && project.features.length > 0 && (
        <section className="py-24 px-6 bg-[#0A0A0A] overflow-hidden relative">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#A3E635] blur-[180px] opacity-10 pointer-events-none rounded-full"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="inline-block px-4 py-1.5 border border-white/20 text-gray-300 rounded-full text-[10px] tracking-widest uppercase mb-6 font-bold">
                  The Solution
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {project.featuresSectionTitle || "An Ecosystem Built for Scale"}
                </h2>
                {project.featuresDescription && (
                  <p className="text-gray-400 text-lg leading-relaxed font-light">
                    {project.featuresDescription}
                  </p>
                )}
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature: any, i: number) => {
                const IconComponent = IconMap[feature.icon] || Settings;
                const theme = ColorThemeMap[feature.colorTheme || 'dark'];
                
                return (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <div
                      className={`p-10 rounded-[40px] flex flex-col h-full gap-8 ${theme.color} hover:-translate-y-2 transition-transform duration-500 w-full`}
                    >
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${theme.color === 'bg-[#F9FAFB]' ? 'bg-white shadow-xl' : 'bg-white/10'} ${theme.iconColor}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className={`text-2xl font-bold mb-4 ${theme.textColor}`}>
                          {feature.title}
                        </h3>
                        <p className={`text-[15px] leading-relaxed ${theme.descColor}`}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4 — The Impact */}
      {(project.impactTitle || project.impactDescription || (project.impactStats && project.impactStats.length > 0)) && (
        <section className="py-24 px-6 max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="bg-[#F3F4F6] p-10 md:p-16 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-lg">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black leading-tight">
                  {project.impactTitle || "Total Operational Clarity."}
                </h2>
                {project.impactDescription && (
                  <p className="text-gray-600 leading-relaxed text-lg font-light whitespace-pre-line">
                    {project.impactDescription}
                  </p>
                )}
              </div>
              
              {project.impactStats && project.impactStats.length > 0 && (
                <div className="flex-shrink-0 grid grid-cols-2 gap-4">
                  {project.impactStats.map((stat: any, i: number) => {
                    const isLastOdd = i === project.impactStats.length - 1 && project.impactStats.length % 2 !== 0;
                    return (
                      <div key={i} className={`p-6 rounded-3xl shadow-sm text-center ${isLastOdd ? 'col-span-2 bg-black text-white' : 'bg-white'}`}>
                        <div className="text-3xl font-black text-[#A3E635] mb-2">{stat.value}</div>
                        <div className={`text-xs font-bold uppercase tracking-wider ${isLastOdd ? 'text-gray-400' : 'text-gray-500'}`}>{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* SECTION 5 — Custom CTA */}
      <section className="py-32 px-6 bg-[#A3E635] text-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://res.cloudinary.com/der2xk0cv/image/upload/v1772370499/salhurry_lvye6e.png')] bg-cover bg-center mix-blend-overlay"></div>
        
        <ScrollReveal className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
              {project.ctaTitle || "Want to Build Something Similar?"}
            </h2>
            <p className="text-lg md:text-xl text-black/80 font-medium leading-relaxed mb-12 max-w-2xl mx-auto">
              {project.ctaDescription || "Stop fitting your unique business operations into rigid, off-the-shelf software. Let's discuss your next project."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-white hover:text-black hover:scale-105 transition-all text-sm w-full sm:w-auto shadow-xl">
                Start a Conversation
              </Link>
              {project.liveLink && (
                <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border-2 border-black text-black font-bold rounded-full hover:bg-black hover:text-[#A3E635] transition-all text-sm flex items-center justify-center gap-2 w-full sm:w-auto group">
                  View Live Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
