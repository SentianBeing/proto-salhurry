import React from 'react';
import Navbar from '@/layouts/navbar';
import Footer from '@/layouts/footer';
import Link from 'next/link';
import { Metadata } from 'next';
import { Target, Zap, LayoutGrid, FileText, ArrowRight, Briefcase } from 'lucide-react';

import { constructMetadata } from '@/lib/seo';
import { sanityClient } from '@/lib/sanity.client';
import { allBlogsQuery, allCaseStudiesQuery } from '@/lib/sanity.queries';
import { staticRoutes } from '@/lib/routes';

export const metadata: Metadata = constructMetadata({
  title: 'Sitemap',
  description: 'Navigate through all the pages, services, case studies, and blog posts of SalHurry.',
  path: '/sitemap',
});

// Revalidate the page frequently so that new sanity items appear automatically
export const revalidate = 60; // 60 seconds

export default async function SitemapPage() {
  const [blogs, caseStudies] = await Promise.all([
    sanityClient.fetch(allBlogsQuery).catch(() => []),
    sanityClient.fetch(allCaseStudiesQuery).catch(() => [])
  ]);

  const safeBlogs = blogs || [];
  const safeCaseStudies = caseStudies || [];

  const mainPages = staticRoutes.filter(r => ['/', '/about', '/how-we-work', '/contact'].includes(r.path));
  const servicePages = staticRoutes.filter(r => r.path.startsWith('/services') || r.path.includes('company') || r.path.includes('agency'));
  const resourcePages = staticRoutes.filter(r => ['/blog', '/careers', '/case-studies'].includes(r.path));

  const dynamicCaseStudies = safeCaseStudies.map((cs: any) => ({
    path: `/case-studies/${cs.slug}`,
    title: cs.title
  }));

  const dynamicBlogs = safeBlogs.map((blog: any) => ({
    path: `/blog/${blog.slug}`,
    title: blog.title
  }));

  const sections = [
    {
      title: 'Main Pages',
      icon: Target,
      links: mainPages
    },
    {
      title: 'Our Services',
      icon: Zap,
      links: servicePages
    },
    {
      title: 'Company & Resources',
      icon: LayoutGrid,
      links: resourcePages
    },
    {
      title: 'Case Studies',
      icon: Briefcase,
      links: dynamicCaseStudies
    },
    {
      title: 'Latest Insights (Blog)',
      icon: FileText,
      links: dynamicBlogs
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-[#0A0A0A] pb-6">
        <Navbar />
      </div>

      <section className="py-16 px-6 md:px-12 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1A1A1A] mb-12">Sitemap</h1>
          <nav aria-label="Sitemap Links" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:border-[#A3E635] transition-all group">
                <div className="w-12 h-12 bg-[#F9FAFB] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#A3E635] transition-colors">
                  <section.icon className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">{section.title}</h2>
                <ul className="space-y-4">
                  {section.links.map((link: {path: string, title: string}, lidx: number) => (
                    <li key={lidx}>
                      <Link 
                        href={link.path}
                        title={link.title}
                        className="group/link flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
                      >
                        <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all text-[#A3E635]" />
                        <span className="font-medium text-lg border-b border-transparent group-hover/link:border-black transition-all">
                          {link.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                  {section.links.length === 0 && (
                    <li className="text-gray-400 italic text-sm">No items found.</li>
                  )}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </section>

      <Footer />
    </main>
  );
}
