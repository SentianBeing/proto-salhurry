'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const defaultProjects = [
  {
    title: 'Paperplane Wedding Studio',
    desc: 'We helped them grow their online visibility on Instagram through organic reach and trending strategies. We also handled branding and UI/UX design. Paperplane is a luxury wedding photography company in Kerala.',
    image: 'https://res.cloudinary.com/der2xk0cv/image/upload/v1772204480/rishi0_1_-AJivLpPK_bfnlgh.jpg',
    color: 'bg-[#F3F4F6]',
    btnColor: 'border border-gray-200 text-black',
    slug: '#'
  },
  {
    title: 'Jones Gym App',
    desc: 'Jones Gym is the biggest gym in Kerala. We developed a comprehensive dashboard for them to manage gym memberships, billing, and optimize their overall business operations.',
    image: 'https://res.cloudinary.com/der2xk0cv/image/upload/v1772206058/ChatGPT_Image_Feb_27_2026_08_56_25_PM_poqwpf.png',
    color: 'bg-[#1A1A1A]',
    textColor: 'text-white',
    descColor: 'text-gray-400',
    btnColor: 'bg-[#A3E635] text-black',
    slug: '#'
  },
  {
    title: 'Sigma Sands',
    desc: 'A construction and mining giant. We provided total branding, ERP setup, and secured investments. Our work included lead generation and sales as a service for their Sigma Rocks division.',
    image: 'https://res.cloudinary.com/der2xk0cv/image/upload/v1772207119/051737f6-fec7-4d05-9dbb-3c10f65d12cf_wu1bl6.png',
    color: 'bg-[#F3F4F6]',
    btnColor: 'border border-gray-200 text-black',
    slug: '#'
  },
  {
    title: 'Transindia Cooling Solutions',
    desc: 'An HVAC Contracting Company. We implemented a complete digital transformation including marketing, sales lead generation setup, and custom website development.',
    image: 'https://res.cloudinary.com/der2xk0cv/image/upload/v1772208495/Screenshot_2026-02-27_213719_nxaxrs.png',
    color: 'bg-[#F3F4F6]',
    btnColor: 'border border-gray-200 text-black',
    slug: '#'
  }
];

const colorVariants = [
  { color: 'bg-[#F3F4F6]', btnColor: 'border border-gray-200 text-black', textColor: 'text-black', descColor: 'text-gray-500' },
  { color: 'bg-[#1A1A1A]', btnColor: 'bg-[#A3E635] text-black', textColor: 'text-white', descColor: 'text-gray-400' },
];

export default function Projects({ initialCaseStudies = [] }: { initialCaseStudies?: any[] }) {
  const projects = initialCaseStudies.length > 0
    ? initialCaseStudies.map((study, index) => {
      // Apply alternate coloring to maintain existing design aesthetic
      const variant = colorVariants[index % colorVariants.length];
      return {
        title: study.title,
        desc: study.industry ? `${study.clientName} (${study.industry})` : study.clientName || 'Case Study',
        image: study.coverImage || 'https://res.cloudinary.com/der2xk0cv/image/upload/v1772204480/rishi0_1_-AJivLpPK_bfnlgh.jpg',
        slug: `/case-studies/${study.slug}`,
        ...variant
      };
    })
    : defaultProjects;

  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto py-24">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 border border-gray-200 rounded-full text-[10px] uppercase tracking-widest text-gray-500 mb-6">
          Projects
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
          Our Creative Digital Projects
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
          Every project we work on is an opportunity to demonstrate our dedication to creating creative solutions that have a positive impact and meet our clients&apos; business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`${project.color} p-8 sm:p-12 rounded-[40px] flex flex-col gap-8`}
          >
            <div className="relative h-[250px] sm:h-[350px] rounded-[30px] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col gap-6">
              <h3 className={`text-2xl sm:text-3xl font-bold ${project.textColor || 'text-black'}`}>
                {project.title}
              </h3>
              <p className={`text-sm leading-relaxed ${project.descColor || 'text-gray-500'}`}>
                {project.desc}
              </p>
              <a href={project.slug} className={`px-6 py-3 rounded-full font-bold text-xs flex items-center gap-2 w-fit hover:opacity-80 transition-all ${project.btnColor}`}>
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
