import React from 'react';
import Navbar from '@/layouts/navbar';
import Footer from '@/layouts/footer';
import ScrollReveal from '@/components/scroll-reveal';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, CreditCard, Activity, Briefcase, BarChart3, Settings } from 'lucide-react';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Jones Gym App — Case Study | SalHurry Growth Systems',
  description: "How SalHurry developed a comprehensive custom gym management ecosystem for Kerala's biggest gym, automating memberships, billing, and staff operations.",
  path: '/projects/jones-gym',
});

const features = [
  {
    title: 'Gym Management Core',
    desc: 'The central nervous system of the facility. A unified dashboard managing multi-branch operations, equipment status, and daily gym capacity without relying on fragmented third-party tools.',
    icon: Settings,
    color: 'bg-[#1A1A1A]',
    iconColor: 'text-[#A3E635]',
    textColor: 'text-white',
    descColor: 'text-gray-400'
  },
  {
    title: 'Membership Tracking',
    desc: 'A robust CRM designed exclusively for fitness clients. Automates member onboarding, stores attendance logs securely, and maps individual fitness journeys efficiently.',
    icon: Users,
    color: 'bg-[#F9FAFB]',
    iconColor: 'text-black',
    textColor: 'text-black',
    descColor: 'text-gray-500'
  },
  {
    title: 'Subscription Engine',
    desc: 'Intelligent subscription tracking that handles tiered plans, automated renewals, and expiry notifications, drastically reducing the manual churn rate.',
    icon: Activity,
    color: 'bg-[#1A1A1A]',
    iconColor: 'text-[#A3E635]',
    textColor: 'text-white',
    descColor: 'text-gray-400'
  },
  {
    title: 'Staff Management',
    desc: 'Integrated HR capabilities allowing admins to track trainer schedules, assign dedicated personal training slots, and manage payroll directly within the ecosystem.',
    icon: Briefcase,
    color: 'bg-[#A3E635]',
    iconColor: 'text-black',
    textColor: 'text-black',
    descColor: 'text-black/70'
  },
  {
    title: 'Payment & Accounts',
    desc: 'Flawless financial tracking with integrated payment gateways. Reconciles daily transactions, logs pending dues, and generates instant invoices for zero financial leakage.',
    icon: CreditCard,
    color: 'bg-[#1A1A1A]',
    iconColor: 'text-[#A3E635]',
    textColor: 'text-white',
    descColor: 'text-gray-400'
  },
  {
    title: 'Revenue Analytics',
    desc: 'Data-driven insights visualizing monthly recurring revenue (MRR), lifetime value of members, and granular financial reporting to help stakeholders make growth-oriented decisions.',
    icon: BarChart3,
    color: 'bg-[#F9FAFB]',
    iconColor: 'text-black',
    textColor: 'text-black',
    descColor: 'text-gray-500'
  }
];

export default function JonesGymCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Scaling Kerala's Biggest Gym with a Custom Management Ecosystem",
    "description": "How SalHurry developed a comprehensive custom gym management software for Kerala's biggest gym.",
    "about": {
      "@type": "SoftwareApplication",
      "name": "Custom Gym Management Software",
      "applicationCategory": "BusinessApplication"
    },
    "creator": {
      "@type": "Organization",
      "name": "SalHurry by divegrid pvt ltd"
    },
    "mentions": {
      "@type": "Organization",
      "name": "Jones Gym"
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
              Case Study · Software Development
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight max-w-5xl mx-auto">
              Scaling Kerala's Biggest Gym with a Custom Management Ecosystem
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-light max-w-3xl mx-auto mb-16 leading-relaxed">
              When standard SaaS tools fail to keep up with massive scale, you build your own. Here’s how we developed a comprehensive application to automate operations for the largest fitness brand in the state.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="w-full">
            <div className="flex flex-wrap justify-center gap-4 text-xs tracking-wider uppercase text-gray-400 mb-16">
              <div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <span className="text-white font-bold">Client:</span> Jones Gym
              </div>
              <div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <span className="text-white font-bold">Location:</span> Kerala, South India
              </div>
              <div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <span className="text-white font-bold">Services:</span> Custom App Dev · UI/UX
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Hero Image */}
        <ScrollReveal delay={0.4}>
          <div className="w-full max-w-[1200px] mx-auto h-[40vh] md:h-[70vh] relative rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(163,230,53,0.15)] border border-[#A3E635]/20 bg-[#1A1A1A]">
            <Image 
              src="https://res.cloudinary.com/der2xk0cv/image/upload/v1772206058/ChatGPT_Image_Feb_27_2026_08_56_25_PM_poqwpf.png" 
              alt="Jones Gym App Interface Mockup" 
              fill 
              className="object-cover opacity-90"
              priority
              unoptimized
            />
            {/* Gradient Overlay to blend with background */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
          </div>
        </ScrollReveal>
      </div>

      {/* SECTION 2 — The Context */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <span className="text-[#A3E635] text-[10px] tracking-widest uppercase font-bold mb-4 block">The Context</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Outgrowing the Spreadsheets</h2>
          <div className="prose prose-lg prose-gray max-w-none text-gray-600 leading-relaxed font-light mx-auto">
            <p>
              Jones Gym didn’t just grow; they exploded. As the single largest fitness facility in Kerala, managing thousands of active members across varying subscription tiers using basic spreadsheets and off-the-shelf software quickly became a logistical nightmare for the operations team.
            </p>
            <p className="mt-6">
              They were facing severe data fragmentation. Account receivables were slipping through the cracks, trainer schedules were chaotic, and the management had zero real-time visibility into the gym's daily revenue flow. They needed a single, airtight platform tailored precisely to their operational workflows.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 3 — The Features Engine (Home Page Inspired Grid) */}
      <section className="py-24 px-6 bg-[#0A0A0A] overflow-hidden relative">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#A3E635] blur-[180px] opacity-10 pointer-events-none rounded-full"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="inline-block px-4 py-1.5 border border-white/20 text-gray-300 rounded-full text-[10px] tracking-widest uppercase mb-6 font-bold">
                The Solution
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                An Ecosystem Built for Scale
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                We engineered a completely bespoke architecture to replace their entire tech stack. No bloat. No forced workflows. Just pure, targeted functionality.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div
                  className={`p-10 rounded-[40px] flex flex-col h-full gap-8 ${feature.color} hover:-translate-y-2 transition-transform duration-500 w-full`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${feature.color === 'bg-[#F9FAFB]' ? 'bg-white shadow-xl' : 'bg-white/10'} ${feature.iconColor}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold mb-4 ${feature.textColor}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-[15px] leading-relaxed ${feature.descColor}`}>
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — The Impact */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="bg-[#F3F4F6] p-10 md:p-16 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black leading-tight">Total Operational Clarity.</h2>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                The implementation of the custom Jones Gym App eradicated administrative bottlenecks entirely. Members check in seamlessly, payments are reconciled to the penny without human error, and the ownership relies on real-time revenue analytics rather than delayed monthly reports to drive the business forward.
              </p>
            </div>
            <div className="flex-shrink-0 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-3xl shadow-sm text-center">
                <div className="text-3xl font-black text-[#A3E635] mb-2">100%</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Cloud Based</div>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm text-center">
                <div className="text-3xl font-black text-[#A3E635] mb-2">Zero</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Data Leaks</div>
              </div>
              <div className="bg-black text-white p-6 rounded-3xl shadow-sm text-center col-span-2">
                <div className="text-3xl font-black text-[#A3E635] mb-2">Real-Time</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Revenue Tracking</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 5 — Custom CTA (Gym Software Specifc) */}
      <section className="py-32 px-6 bg-[#A3E635] text-black text-center relative overflow-hidden">
        {/* Abstract Background element */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://res.cloudinary.com/der2xk0cv/image/upload/v1772370499/salhurry_lvye6e.png')] bg-cover bg-center mix-blend-overlay"></div>
        
        <ScrollReveal className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
              Want to Build Custom Software for Your Gym?
            </h2>
            <p className="text-lg md:text-xl text-black/80 font-medium leading-relaxed mb-12 max-w-2xl mx-auto">
              Stop fitting your unique business operations into rigid, off-the-shelf software. We build scalable, high-performance web applications tailored to how you actually run your facility.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-white hover:text-black hover:scale-105 transition-all text-sm w-full sm:w-auto shadow-xl">
                Start a Conversation
              </Link>
              <Link href="/services/web-development" className="px-8 py-4 bg-transparent border-2 border-black text-black font-bold rounded-full hover:bg-black hover:text-[#A3E635] transition-all text-sm flex items-center justify-center gap-2 w-full sm:w-auto group">
                View Tech Stack <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
