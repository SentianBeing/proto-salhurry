import Navbar from '@/layouts/navbar';
import Hero from '@/components/hero';
import Services from '@/components/services';
import About from '@/components/about';
import Process from '@/components/process';
import Projects from '@/components/projects';
import Blog from '@/components/blog';
import Testimonials from '@/components/testimonials';
import Partners from '@/components/partners';
import CTA from '@/components/cta';
import Footer from '@/layouts/footer';
import { sanityClient } from '@/lib/sanity.client';
import { latestBlogsQuery, allCaseStudiesQuery } from '@/lib/sanity.queries';

export const revalidate = 60; // Revalidate the homepage periodically

export default async function Home() {
  const latestBlogs = await sanityClient.fetch(latestBlogsQuery, { limit: 3 });
  const allCaseStudies = await sanityClient.fetch(allCaseStudiesQuery);

  return (
    <main className="min-h-screen bg-white">
      <div className="relative bg-[#0A0A0A] overflow-hidden">
        {/* Neon Smudge Effect */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#2D3321] blur-[120px] rounded-full opacity-40 pointer-events-none"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-[#1A1C18] blur-[100px] rounded-full opacity-30 pointer-events-none"></div>

        <Navbar />
        <Hero />
      </div>
      <Services />
      <About />
      <Process />
      <Projects initialCaseStudies={allCaseStudies.slice(0, 4)} />
      <Blog initialPosts={latestBlogs} />
      <Testimonials />
      <Partners />
      <CTA />
      <Footer />
    </main>
  );
}
