import React from 'react';
import Navbar from '@/layouts/navbar';
import Footer from '@/layouts/footer';
import ContactButton from '@/components/contact-button';
import ScrollReveal from '@/components/scroll-reveal';
import Image from 'next/image';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { Target, MonitorSmartphone, ShoppingCart, LayoutTemplate, Settings, Code, Wrench, Megaphone, CheckCircle2 } from 'lucide-react';

export function generateMetadata(): Metadata {
  return {
    ...constructMetadata({
      title: 'Web Development Company in Kerala | Salhurry',
      description: "Salhurry is a web development company in Kerala building custom websites, e-commerce platforms, and web apps that drive real business growth. Let's build yours.",
      path: '/web-development-company-kerala',
      openGraph: {
        title: "Web Development Company in Kerala | Salhurry",
        description: "From startups to enterprises - Salhurry designs and develops high-performance websites tailored to your business goals. Based in Kerala, serving clients across India.",
        url: "https://www.salhurry.in/web-development-company-kerala",
        siteName: "Salhurry",
        locale: "en_IN",
        type: "website"
      }
    }),
    robots: {
      index: true,
      follow: true,
    }
  };
}

export default function WebDevelopmentKeralaPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Salhurry",
            "description": "Salhurry is a web development company in Kerala building custom websites, e-commerce platforms, and web apps that drive real business growth.",
            "url": "https://www.salhurry.in/web-development-company-kerala",
            "telephone": "+916282687001",
            "email": "info@salhurry.in",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "JS Arcade, MC Rd, Kilimanoor",
              "addressLocality": "Trivandrum",
              "addressRegion": "Kerala",
              "addressCountry": "IN"
            },
            "areaServed": "Kerala",
            "serviceType": "Web Development",
            "image": "https://res.cloudinary.com/der2xk0cv/image/upload/v1772368693/salhurry-why-choose-us_coslns.webp"
          }),
        }}
      />

      <div className="relative bg-[#0A0A0A] overflow-hidden pb-24">
        {/* Neon Smudge Effect */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#2D3321] blur-[120px] rounded-full opacity-40 pointer-events-none"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-[#1A1C18] blur-[100px] rounded-full opacity-30 pointer-events-none"></div>

        <Navbar />

        {/* HERO SECTION */}
        <section className="relative z-10 pt-16 lg:pt-24 pb-0 lg:pb-12">
          <div className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="max-w-xl relative z-20 pb-12 lg:pb-0 pt-8 lg:pt-0">
              <span className="inline-block px-4 py-1.5 border border-[#A3E635]/50 text-[#A3E635] rounded-full text-[10px] tracking-[0.2em] font-medium uppercase mb-8 shadow-[0_0_15px_rgba(163,230,53,0.15)] bg-[#A3E635]/5">
                KERALA&apos;S PREMIER WEB AGENCY
              </span>
              <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6 leading-[1.05] tracking-tight">
                Web Development Company in Kerala <br />
              </h1>
              <p className="text-[15px] sm:text-[17px] text-gray-300 leading-[1.8] mb-12 max-w-md font-light">
                At Salhurry, we craft high-performance websites tailored to the ambitions of businesses across Kerala. Whether you&apos;re a growing startup in Thiruvananthapuram, an established enterprise in Kochi, or a retailer in Kozhikode - we engineer web experiences that work hard for your brand, around the clock.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <ContactButton
                  text="Book a Free Consultation"
                  className="border border-[#A3E635]/80 shadow-[0_0_20px_rgba(163,230,53,0.2)] bg-[#A3E635] text-black px-8 py-3.5 rounded-full font-bold hover:bg-white transition-all flex items-center gap-2"
                />
                <a href="https://wa.me/916282687001" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#A3E635] transition-colors font-medium border-b border-white/20 hover:border-[#A3E635] pb-1">
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right Hero Images */}
            <div className="relative w-full z-10 h-[400px] sm:h-[600px] lg:h-[700px] rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/der2xk0cv/image/upload/v1772368693/salhurry-why-choose-us_coslns.webp"
                alt="Web Development in Kerala"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/20 to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                  <p className="text-[#A3E635] text-sm font-bold mb-1">Tailored for Kerala Businesses.</p>
                  <p className="text-white text-sm">We build websites that turn visitors into customers.</p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>

      <ScrollReveal>
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="relative h-[400px] sm:h-[500px] w-full rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/der2xk0cv/image/upload/v1772370499/salhurry_lvye6e.png"
                alt="Web Development Process at Salhurry Kerala"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            <article>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                Web Development Company in Kerala You Can Rely On
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-left">
                <p>
                  Finding the right web development partner in Kerala is not just about design - it's about finding a team that understands your business goals, your customers, and the competitive digital landscape. That's exactly what Salhurry brings to the table.
                </p>
                <p className="font-semibold text-black p-6 bg-gray-50 rounded-2xl border-l-4 border-[#A3E635]">
                  We combine technical precision with creative thinking to deliver websites that are fast, secure, scalable, and optimised for search engines from day one. Our clients don't just get a website - they get a growth engine.
                </p>
              </div>
            </article>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-gray-50 py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <span className="inline-block px-4 py-1 border border-gray-200 rounded-full text-[10px] uppercase tracking-widest text-[#A3E635] mb-6 bg-white shadow-sm">
                Our Services
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
                Our Web Development Services in Kerala
              </h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Custom Website Development',
                  desc: 'We build fully bespoke websites from scratch - no cookie-cutter templates. Every line of code, every pixel of design is crafted to reflect your brand and convert your visitors into customers.',
                  icon: Code
                },
                {
                  title: 'Business Website Development',
                  desc: 'From small businesses to large enterprises, we design and develop professional business websites that establish credibility, communicate your value, and drive enquiries.',
                  icon: Target
                },
                {
                  title: 'E-Commerce Website Development',
                  desc: 'Launch a powerful online store backed by a robust, secure, and user-friendly e-commerce platform. We help Kerala businesses sell online with confidence - with smooth checkout experiences and mobile-first design.',
                  icon: ShoppingCart
                },
                {
                  title: 'CMS-Based Website Development',
                  desc: 'We build flexible, easy-to-manage websites on leading content management systems including WordPress, so your team can update content without any technical knowledge.',
                  icon: Settings
                },
                {
                  title: 'Landing Page Development',
                  desc: 'High-converting, focused landing pages designed to support your marketing campaigns, product launches, or lead generation efforts.',
                  icon: LayoutTemplate
                },
                {
                  title: 'Website Redesign & Revamp',
                  desc: 'Is your existing website outdated or underperforming? Our team will audit, redesign, and rebuild your site to meet modern standards and business demands.',
                  icon: MonitorSmartphone
                },
                {
                  title: 'Website Maintenance & Support',
                  desc: "We don't disappear after launch. Our dedicated support team ensures your website stays updated, secure, and running at peak performance.",
                  icon: Wrench
                }
              ].map((service, idx) => (
                <article key={idx} className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 hover:border-[#A3E635] transition-all group">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#A3E635] transition-colors">
                    <service.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-24 px-6 md:px-12 bg-[#060606] relative overflow-hidden text-white">
          <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#A3E635] opacity-[0.03] rounded-full blur-[120px] pointer-events-none transform -translate-x-1/2"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 border border-[#A3E635]/20 text-[#A3E635] font-semibold rounded-full text-[10px] tracking-[0.2em] uppercase mb-8 shadow-sm">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Why Businesses Across Kerala Choose Salhurry
              </h2>
            </div>

            <div className="relative w-full max-w-6xl mx-auto h-[250px] sm:h-[400px] rounded-[40px] overflow-hidden mb-16 shadow-2xl border border-white/5">
              <Image 
                src="https://res.cloudinary.com/der2xk0cv/image/upload/v1772370499/salhurry_lvye6e.png"
                alt="Web Development and Growth Agency"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Results-Driven Approach', desc: 'Every website we build is engineered with your business outcomes in mind - more leads, more sales, more growth.' },
                { title: 'SEO-Ready from Day One', desc: 'Our websites are structured, coded, and optimised to rank well on Google - giving you organic visibility from the moment you go live.' },
                { title: 'Mobile-First Design', desc: 'With the majority of Kerala\'s internet users browsing on smartphones, we build every website to deliver a flawless mobile experience.' },
                { title: 'Transparent Communication', desc: 'You\'ll always know where your project stands. From kickoff to launch, we keep you informed at every stage.' },
                { title: 'On-Time Delivery', desc: 'We respect your timelines. Our project management process is built to deliver quality work without delays.' },
                { title: 'Dedicated Project Manager', desc: 'You\'ll have a single point of contact throughout your project - someone who understands your goals and keeps everything on track.' },
                { title: 'Affordable Web Development Packages', desc: 'Premium web development doesn\'t have to be expensive. Salhurry offers competitive, budget-friendly pricing tailored to businesses of all sizes across Kerala.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-[#1A1A1A] p-8 rounded-[32px] border border-white/5 hover:border-[#A3E635]/30 transition-all text-left">
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-white py-24 overflow-hidden border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
            <span className="inline-block px-4 py-1 border border-gray-200 rounded-full text-[10px] uppercase tracking-widest text-[#A3E635] mb-6 shadow-sm font-bold bg-white">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
              Recent Web Projects
            </h2>
          </div>

          <style dangerouslySetInnerHTML={{__html: `
            @keyframes marqueeSlider {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee-slider {
              animation: marqueeSlider 35s linear infinite;
            }
            .animate-marquee-slider:hover {
              animation-play-state: paused;
            }
          `}} />

          <div className="relative w-full overflow-hidden flex">
            <div className="flex w-max animate-marquee-slider gap-6 md:gap-8 px-4">
              {[1, 2, 3, 4, 1, 2, 3, 4].map((item, idx) => (
                <div key={idx} className="relative w-[300px] h-[200px] sm:w-[400px] sm:h-[300px] md:w-[450px] md:h-[350px] rounded-[30px] overflow-hidden shadow-lg border border-gray-100 bg-white flex-shrink-0 group cursor-pointer">
                  <Image 
                    src={item % 2 === 0 ? "https://res.cloudinary.com/der2xk0cv/image/upload/v1772370499/salhurry_lvye6e.png" : "https://res.cloudinary.com/der2xk0cv/image/upload/v1772368693/salhurry-why-choose-us_coslns.webp"} 
                    alt="Recent Web Development Project Kerala" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-[#A3E635] font-bold text-xs uppercase tracking-widest mb-1 shadow-sm">Web Platform</p>
                    <p className="text-white font-bold text-lg">Client Case Study</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

            {/* Process */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-10">Our Web Development Process</h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                {[
                  { step: '1', title: 'Discovery & Requirement Analysis', desc: 'We begin by understanding your business, your audience, your competitors, and your goals. This foundation shapes everything that follows.' },
                  { step: '2', title: 'Strategy & Planning', desc: 'Our team defines the sitemap, wireframes, technology stack, and project roadmap before a single line of code is written.' },
                  { step: '3', title: 'UI/UX Design', desc: 'Our designers create visually compelling, intuitively navigated interfaces - tested for usability before development begins.' },
                  { step: '4', title: 'Development & Integration', desc: 'Our developers bring the design to life with clean, scalable, and secure code - integrating all necessary tools, plugins, and third-party services.' },
                  { step: '5', title: 'Testing & Quality Assurance', desc: 'Rigorous cross-device and cross-browser testing ensures your website performs flawlessly before it reaches your audience.' },
                  { step: '6', title: 'Launch', desc: 'We handle the deployment process end to end - making your website live smoothly and without disruption.' },
                  { step: '7', title: 'Post-Launch Support', desc: 'Our relationship doesn\'t end at launch. We provide ongoing maintenance, updates, and performance monitoring to ensure long-term success.' }
                ].map((item, i) => (
                  <div key={i} className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#A3E635] text-black font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow uppercase text-xs z-10 relative left-0 md:left-auto">
                      {item.step}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm ml-4 md:ml-0">
                      <h4 className="text-lg font-bold text-black mb-2">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Industries & Image Banner */}
            <div className="flex flex-col gap-10 h-fit">
              <div className="relative h-[250px] sm:h-[350px] w-full rounded-[40px] overflow-hidden shadow-xl">
                <Image
                  src="https://res.cloudinary.com/der2xk0cv/image/upload/v1772368693/salhurry-why-choose-us_coslns.webp"
                  alt="Kerala Website Developers"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              <div className="bg-gray-50 rounded-[40px] p-10 lg:p-12">
              <h2 className="text-3xl font-bold text-black mb-8">Industries We Serve in Kerala</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">Salhurry has delivered web development solutions to businesses across a wide range of sectors in Kerala, including:</p>

              <ul className="space-y-4">
                {[
                  'Retail & E-Commerce',
                  'Healthcare & Clinics',
                  'Education & eLearning',
                  'Hospitality & Tourism',
                  'Real Estate & Construction',
                  'Finance & Professional Services',
                  'Manufacturing & Logistics',
                  'Startups & Entrepreneurs',
                ].map((industry, i) => (
                  <li key={i} className="flex items-center gap-3 text-black font-medium text-sm">
                    <div className="w-2 h-2 rounded-full bg-[#A3E635]"></div>
                    {industry}
                  </li>
                ))}
              </ul>
              <div className="mt-10 p-6 bg-white rounded-2xl border border-gray-100 italic text-gray-500 text-sm leading-relaxed shadow-sm">
                "From Thiruvananthapuram to Thrissur, from Kochi to Kannur - Salhurry is the web development company Kerala businesses call when they're serious about their digital presence."
              </div>
            </div>
            </div>

          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-white py-24 px-6 md:px-12 border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Frequently Asked Questions - Web Development in Kerala</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "How much does web development cost in Kerala?",
                  a: "Website development costs vary depending on the complexity, features, and scope of the project. At Salhurry, we offer flexible packages to suit startups, SMEs, and large enterprises. Contact us for a custom quote."
                },
                {
                  q: "How long does it take to build a website?",
                  a: "A standard business website typically takes 3 to 6 weeks. E-commerce platforms and custom web applications may take longer depending on functionality requirements."
                },
                {
                  q: "Do you provide website maintenance after launch?",
                  a: "Yes. We offer comprehensive website maintenance and support packages to keep your site secure, updated, and performing at its best."
                },
                {
                  q: "Will my website be optimised for Google?",
                  a: "Absolutely. Every website we build follows SEO best practices - including proper site structure, fast loading speeds, mobile optimisation, and clean code."
                },
                {
                  q: "Can you redesign my existing website?",
                  a: "Yes. We specialise in website audits, redesigns, and revamps for businesses looking to modernise their online presence."
                },
                {
                  q: "Do you work with clients outside Thiruvananthapuram or Kochi?",
                  a: "Yes. We work with clients across all of Kerala and beyond. Our remote collaboration process is seamless and communication is always clear."
                }
              ].map((faq, i) => (
                <details key={i} className="group bg-gray-50 rounded-2xl p-6 sm:p-8 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between font-bold text-xl text-black">
                    {faq.q}
                    <span className="ml-4 flex-shrink-0 transition-transform group-open:-rotate-180">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <section className="bg-[#A3E635] py-24 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-8 leading-tight">
            Get a Free Consultation with Salhurry - Kerala&apos;s Trusted Web Development Company
          </h2>
          <p className="text-black/80 font-medium text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Ready to build a website that works as hard as you do? Talk to our web development experts today and let&apos;s discuss how we can help your business grow online.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <ContactButton
              text="Get a Free Quote"
              className="bg-black text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-xl"
            />
            <ContactButton
              text="Talk to an Expert"
              className="border-2 border-black text-black px-8 py-4 rounded-full font-bold hover:bg-black hover:text-white transition-all"
            />
          </div>

          <address className="mt-16 flex flex-wrap justify-center gap-x-6 gap-y-3 font-semibold text-black not-italic">
            <div className="flex items-center gap-2">📍 Kerala, India</div>
            <div className="flex items-center gap-2">📞 +91 62826 87001</div>
            <div className="flex items-center gap-2">📧 info@salhurry.in</div>
          </address>

          <p className="mt-8 text-xs font-semibold text-black/60 uppercase tracking-widest">
            Salhurry - Web Development Company in Kerala | Custom Websites | E-Commerce Solutions | SEO-Ready Development
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
