import React from 'react';
import Navbar from '@/layouts/navbar';
import Footer from '@/layouts/footer';
import Partners from '@/components/partners';
import CTA from '@/components/cta';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Code2, Layout, Smartphone, Zap, ArrowRight, CheckCircle2, Cpu, Shield, Rocket, Layers } from 'lucide-react';

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative bg-[#0A0A0A] overflow-hidden pb-24">
        {/* Neon Smudge Effect */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#2D3321] blur-[120px] rounded-full opacity-40 pointer-events-none"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-[#1A1C18] blur-[100px] rounded-full opacity-30 pointer-events-none"></div>
        
        <Navbar />
        
        <div className="px-6 md:px-12 max-w-7xl mx-auto pt-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Web Development <br />
              <span className="text-[#A3E635]">& Engineering</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-12">
              Building high-performance, conversion-optimized web experiences that serve as your 24/7 digital sales force.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#A3E635] text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all">
                Start Your Project
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                View Our Stack
              </button>
            </div>
          </div>
        </div>
      </div>

      <Partners />

      {/* Core Capabilities Grid */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 border border-gray-200 rounded-full text-[10px] uppercase tracking-widest text-gray-500 mb-6">
            Our Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Modern Web Engineering
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Custom Web Apps',
              description: 'Scalable, secure, and high-performance applications built with modern stacks.',
              icon: Code2
            },
            {
              title: 'UI/UX Design',
              description: 'User-centric interfaces designed to maximize engagement and conversion.',
              icon: Layout
            },
            {
              title: 'Mobile First',
              description: 'Seamless experiences across all devices, ensuring you never miss a lead.',
              icon: Smartphone
            },
            {
              title: 'Speed Optimized',
              description: 'Lightning-fast load times that keep users engaged and boost SEO rankings.',
              icon: Zap
            }
          ].map((service, idx) => (
            <div key={idx} className="p-8 rounded-[32px] bg-[#F9FAFB] border border-gray-100 hover:border-[#A3E635] transition-all group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#A3E635] transition-colors">
                <service.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack & Process Section */}
      <section className="bg-[#0A0A0A] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1 relative h-[400px] md:h-[600px] rounded-[40px] overflow-hidden">
              <Image 
                src="https://picsum.photos/seed/web-dev-code/800/1000"
                alt="Web Development Process"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-1 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-[#A3E635] mb-6">
                Our Tech Stack
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Built for Speed <br />& Scalability
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                We use the latest technologies to build websites that are not only beautiful but also robust, secure, and incredibly fast.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Cpu, title: 'Modern Stack', desc: 'React, Next.js, Node.js' },
                  { icon: Shield, title: 'Secure by Design', desc: 'Enterprise-grade security' },
                  { icon: Rocket, title: 'SEO Ready', desc: 'Optimized for search' },
                  { icon: Layers, title: 'Scalable', desc: 'Grows with your business' }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <item.icon className="w-6 h-6 text-[#A3E635] mb-2" />
                    <h4 className="text-white font-bold text-sm">{item.title}</h4>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & UX',
                desc: 'We map out the user journey and create wireframes that focus on conversion.'
              },
              {
                step: '02',
                title: 'Agile Development',
                desc: 'Our developers bring the design to life using clean, efficient, and modern code.'
              },
              {
                step: '03',
                title: 'QA & Deployment',
                desc: 'Rigorous testing ensures a flawless launch and peak performance from day one.'
              }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:border-[#A3E635] transition-all">
                <span className="text-4xl font-bold text-[#A3E635] block mb-6">{item.step}</span>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1 border border-gray-200 rounded-full text-[10px] uppercase tracking-widest text-gray-500 mb-6">
              Why SalHurry?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8">
              Websites That Work <br />As Hard As You Do.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              A website should be more than just a digital business card. It should be a powerful tool that drives growth, captures leads, and builds trust with your audience.
            </p>
            <div className="space-y-4 mb-8">
              {[
                'Conversion-Focused Design Architecture',
                'Lightning-Fast Core Web Vitals',
                'Seamless Third-Party Integrations',
                'Full Mobile & Tablet Responsiveness'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#A3E635]" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            <button className="flex items-center gap-2 font-bold text-black border-b-2 border-[#A3E635] pb-1 hover:gap-4 transition-all">
              Start your project today <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
            <Image 
              src="https://picsum.photos/seed/web-dev-hero/800/800"
              alt="Web Development Excellence"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
