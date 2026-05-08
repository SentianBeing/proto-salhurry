import React from 'react';
import Navbar from '@/layouts/navbar';
import Footer from '@/layouts/footer';
import ScrollReveal from '@/components/scroll-reveal';
import Link from 'next/link';
import { ArrowRight, Target, LayoutTemplate, GitFork, Crosshair, Users, Activity, Play, Calendar, CheckCircle2, ShieldAlert } from 'lucide-react';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Growth Strategy & GTM Consulting in Trivandrum | SalHurry',
  description: "Before you spend a rupee on ads, build a system that works. GTM strategy, business growth consulting, and sales structuring for Trivandrum & Kerala businesses.",
  path: '/services/growth-strategy',
});

export default function GrowthStrategyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Growth Strategy & GTM Consulting",
    "provider": {
      "@type": "Organization",
      "name": "SalHurry by divegrid pvt ltd"
    },
    "areaServed": ["Trivandrum", "Kerala", "UAE", "Germany"],
    "description": "Go-to-market strategy, positioning, and revenue pathway design for startups, traditional businesses, and F&B in Trivandrum.",
    "keywords": "go-to-market strategy Trivandrum, GTM strategy Kerala, business growth consultant Trivandrum, marketing strategy for restaurants Kerala, startup GTM Kerala, sales strategy Trivandrum"
  };

  return (
    <main className="min-h-screen bg-white font-sans text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* SECTION 1 — Hero */}
      <div className="relative bg-[#0A0A0A] overflow-hidden pb-24 px-6">
        <Navbar />
        
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#A3E635] opacity-[0.03] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white opacity-[0.02] rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center pt-12">
          <ScrollReveal>
            <span className="inline-block px-5 py-2 border border-[#A3E635]/30 text-[#A3E635] bg-[#A3E635]/10 rounded-full text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-8 font-bold backdrop-blur-sm shadow-sm">
              Growth Strategy & GTM · Trivandrum, Kerala
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Before We Spend a Single Rupee — We Figure Out If It's Worth Spending.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-light max-w-4xl mx-auto mb-16 leading-relaxed">
              Most businesses in Trivandrum don't have a marketing problem. They have a clarity problem — unclear positioning, no defined customer, no system to convert interest into revenue. We fix that first. Then we build your growth engine around it.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-[#A3E635] text-black font-bold rounded-full hover:bg-white transition-all text-sm w-full sm:w-auto shadow-xl flex items-center justify-center gap-2 group">
                Book a Free Strategy Session <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform" />
              </Link>
              <a href="#case-studies" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all text-sm w-full sm:w-auto flex items-center justify-center">
                See Our Case Studies
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* SECTION 2 — The Problem (Real Story, Real Pain) */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <ScrollReveal>
          <span className="text-gray-400 uppercase tracking-widest text-[10px] font-bold mb-4 block">Sound familiar?</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">₹20,000–₹40,000 Spent on Ads. Zero Clarity on What's Broken.</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 font-light leading-relaxed mb-12">
            <p className="mb-6">
              An online coaching startup based in Trivandrum came to us frustrated. They were offering coordinated tutoring and student mentoring — matching students with tutors, handling schedules, managing progress. A real service with real demand.
            </p>
            <p className="mb-6">
              But they had a problem nobody was naming: they didn't actually know if ads would help them.
            </p>
            <p className="mb-6">
              They'd already spent ₹20,000, then ₹30,000, then ₹40,000 with another agency running Facebook and Google ads. The clicks came. The cost per lead was reasonable on paper. But they had no system to understand which of those leads were actually qualified, how many inquiries converted to paid sessions, or what their actual customer acquisition cost really was.
            </p>
            <p className="mb-6">
              The deeper problem: they didn't have clarity on their business model itself. How many leads did they need? What was their conversion rate from inquiry to first session? What was their repeat rate? How much was a customer actually worth? Without those numbers, no amount of ad spend would tell them if marketing was working or failing.
            </p>
            <p className="mb-6">
              They were literally flying blind — spending money, getting activity, but with no data to know if any of it mattered.
            </p>
          </div>

          <div className="bg-[#F9FAFB] border border-gray-100 rounded-3xl p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold mb-6">The Real Problem:</h3>
            <p className="text-gray-600 mb-6">This isn't an ad problem. This is a clarity problem. Before you spend ₹20,000 on ads, you need to know:</p>
            <ul className="space-y-4 text-gray-700 font-light list-disc pl-5">
              <li><strong className="text-black">Do you have product-market fit?</strong> (Are people asking for what you're offering, or are you trying to create demand for something nobody asked for?)</li>
              <li><strong className="text-black">Can you handle the leads you get?</strong> (Do you have the team, systems, and processes to convert interest into revenue?)</li>
              <li><strong className="text-black">Can you measure what's working?</strong> (Do you track inquiries, conversions, customer value, and repeat rate?)</li>
              <li><strong className="text-black">Is this the right channel?</strong> (Should you even be running ads right now, or are there faster, cheaper ways to find your first customers?)</li>
            </ul>
            <p className="mt-8 text-gray-600 italic">If you can't answer these questions with data, no agency can fix it for you by running ads. They can only burn your budget while you both pretend the activity is progress.</p>
          </div>

          <blockquote className="border-l-4 border-[#A3E635] pl-6 md:pl-8 py-2 my-12">
            <p className="text-2xl md:text-4xl font-black leading-tight tracking-tight text-black italic">
              "The startup that asks 'Should we run ads?' before 'Are we ready for ads?' doesn't waste money. They build systems."
            </p>
          </blockquote>
        </ScrollReveal>
      </section>

      {/* SECTION 3 — What GTM Actually Means (Education) */}
      <section className="py-24 px-6 md:px-12 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold mb-4 block">What we actually do</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">GTM Is Not a Campaign. It's a Blueprint.</h2>
              <div className="text-gray-400 text-lg font-light leading-relaxed prose prose-invert mx-auto">
                <p>
                  Go-to-market strategy is the plan that answers three questions before any marketing begins: Who exactly is your customer? What do you offer them that nobody else does? And how does a stranger become a paying client?
                </p>
                <p>
                  Without answers to these three questions, any money you spend on ads, content, or branding is a guess. With these answers, every rupee you spend is pointed at a defined target.
                </p>
                <p>
                  At SalHurry, GTM strategy is the foundation we build before anything else — before ads, before content, before campaigns. It's the work that makes everything else actually work.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={0.1}>
              <div className="bg-[#1A1A1A] rounded-[32px] p-8 h-full border border-white/5 hover:border-[#A3E635]/30 transition-colors">
                <div className="w-14 h-14 bg-[#A3E635]/10 rounded-2xl flex items-center justify-center text-[#A3E635] mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">Pillar 1 — Positioning</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  Who you are, who you serve, and why you're the right choice. Not generic. Not "we provide quality service." A specific, differentiated reason to choose you over the next option.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="bg-[#1A1A1A] rounded-[32px] p-8 h-full border border-white/5 hover:border-[#A3E635]/30 transition-colors">
                <div className="w-14 h-14 bg-[#A3E635]/10 rounded-2xl flex items-center justify-center text-[#A3E635] mb-6">
                  <LayoutTemplate className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">Pillar 2 — Offer Engineering</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  The way you package and present your product or service determines whether people say yes or "let me think about it." We structure your offer so it's easy to say yes to.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-[#1A1A1A] rounded-[32px] p-8 h-full border border-white/5 hover:border-[#A3E635]/30 transition-colors">
                <div className="w-14 h-14 bg-[#A3E635]/10 rounded-2xl flex items-center justify-center text-[#A3E635] mb-6">
                  <GitFork className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">Pillar 3 — Revenue Pathway</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  How does a potential customer first hear about you, develop trust, and eventually pay you? We map this entire journey and identify where it's currently breaking down.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 4 — How We Work (The Real Process, Non-Generic) */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div className="sticky top-32">
                <span className="text-gray-400 uppercase tracking-widest text-[10px] font-bold mb-4 block">How we actually work</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">We Come to You First. Literally.</h2>
                <div className="prose prose-lg text-gray-600 font-light leading-relaxed">
                  <p>We don't do a 30-minute onboarding call and send you a strategy deck. That's not how you learn a business.</p>
                  <p>When we take on a new client, if it's necessary — and often it is — we send one of our people to work with you in person. Sit in your shop. Attend your sales calls. Watch how you handle enquiries. Understand your operations on the ground before we make a single recommendation.</p>
                  <p>We've done this for a restaurant in Trivandrum to understand why footfall wasn't converting to repeat customers. We did it for a construction and mining company in Kilimanoor to understand their sales cycle before we even thought about a <Link href="/services/web-development" className="text-black font-semibold hover:underline">campaign</Link>.</p>
                  <p>This is what we call <strong>Interim Leadership as a Service</strong>. For businesses that need more than strategy and execution — that need experienced eyes inside the operation — we embed with you temporarily to identify what's truly blocking growth.</p>
                  <p>We find it. We fix it — or we build the system that fixes it. Then we step back.</p>
                </div>
              </div>
            </ScrollReveal>

            <div className="flex flex-col gap-6">
              {[
                { step: "01", title: "Immersion (We come to you)", desc: "We study your business from the inside — your sales process, your customer conversations, your operations, your current marketing. We identify what's actually happening before we prescribe anything." },
                { step: "02", title: "Strategy Architecture", desc: "We build your GTM blueprint — positioning, offer, funnel structure, channel strategy, revenue milestones. You get full clarity on what we're building and why before any execution begins." },
                { step: "03", title: "Execution or Handoff", desc: "We either execute the plan ourselves (running campaigns, building systems, managing performance) or hand it off to your team with full documentation and training. Your choice." },
                { step: "04", title: "Measure, Optimise, Scale", desc: "We track the metrics that matter to revenue — not vanity numbers. Monthly reviews, real data, honest assessments of what's working and what's not." }
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-[#F9FAFB] p-8 rounded-3xl border border-gray-100 flex gap-6 hover:shadow-lg transition-shadow">
                    <div className="text-xs font-black text-gray-300 tracking-widest mt-1">STEP {item.step}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-600 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Who This Is For */}
      <section className="py-24 px-6 md:px-12 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold mb-4 block">Is this for you?</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Built for Trivandrum Businesses That Are Done Guessing.</h2>
              <p className="text-gray-600 text-lg font-light">GTM strategy and growth consulting isn't for everyone. Here's who we work best with:</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { type: "Traditional Business — Expansion Ready", desc: "You've built something solid over years — a shop, a service, a family business — and now you want to grow beyond word of mouth. You know there's a larger market, but you're not sure how to reach it without wasting money.", pain: "We've been here 10 years but nobody outside our area knows us." },
              { type: "Restaurant or F&B Business", desc: "You have good food and a loyal local crowd but footfall is inconsistent, online orders aren't growing, and you've tried boosting posts with no real return. You need a structured approach to customer acquisition.", pain: "We get good reviews but people don't come back consistently." },
              { type: "Startup — Product or SaaS", desc: "You've built your product. Now you need to sell it. You're not sure who your ideal customer segment is, how to price, how to position against competitors, or how to build a repeatable sales process from scratch.", pain: "We have a great product but can't figure out how to get traction." },
              { type: "Education or Coaching Business", desc: "You have genuine expertise and a good programme but your marketing isn't reflecting that quality. You've tried ads, reels, WhatsApp broadcasts — none of it has built a consistent pipeline of serious students.", pain: "I keep spending on content and ads but serious enquiries don't come." },
              { type: "Business With a Broken Sales Process", desc: "Your marketing is generating some leads but your conversion rate is low, your team doesn't have a clear process to follow up, and leads go cold. The problem isn't awareness — it's what happens after interest.", pain: "We get enquiries but most of them go nowhere." }
            ].map((profile, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className={i === 4 ? "md:col-span-2 lg:col-span-1" : ""}>
                <div className="bg-white p-8 rounded-3xl h-full shadow-sm border border-gray-100 flex flex-col">
                  <h3 className="text-[17px] font-bold mb-3">{profile.type}</h3>
                  <p className="text-gray-600 font-light text-[15px] leading-relaxed mb-6 flex-grow">{profile.desc}</p>
                  <div className="bg-[#FFF4E5] text-[#D97706] p-4 rounded-xl text-sm italic font-medium">
                    Pain: "{profile.pain}"
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — Case Studies */}
      <section id="case-studies" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20 max-w-2xl mx-auto">
              <span className="text-gray-400 uppercase tracking-widest text-[10px] font-bold mb-4 block">Proof from Trivandrum</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">We've Done This Here. Not in Bangalore. Not in Mumbai. Here.</h2>
              <p className="text-gray-600 text-lg font-light">Every case study below is a business based in or operating from Kerala. We understand this market because we work in it every day.</p>
            </div>
          </ScrollReveal>

          <div className="space-y-16">
            {/* Case 1 */}
            <ScrollReveal>
              <div className="border border-gray-100 rounded-[40px] p-8 md:p-12 hover:shadow-2xl transition-shadow bg-[#FAFAFA]">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Sigma Sands / Southern Sigma Ventures</h3>
                    <p className="text-[#A3E635] font-bold text-sm tracking-widest uppercase">Construction, Mining & Aggregates · Kilimanoor, Trivandrum</p>
                  </div>
                  <Link href="/case-studies/sigma-sands" className="shrink-0 bg-black text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-[#A3E635] hover:text-black transition-colors">
                    Read Case Study
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="prose text-gray-600 font-light">
                    <p>Southern Sigma Ventures came to SalHurry when their Sigma Rocks division needed to scale beyond local referral networks. They were a construction and mining giant with a strong operational foundation but no structured approach to reaching new B2B buyers, securing investment relationships, or expanding their market presence digitally.</p>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <strong className="block text-black mb-1">What we did:</strong>
                      <p className="text-gray-600 font-light text-[15px]">Complete brand positioning and identity work, ERP setup to improve operational visibility, and a structured lead generation and sales system for the division. We also supported investment outreach — positioning the business credibly for capital conversations.</p>
                    </div>
                    <div>
                      <strong className="block text-black mb-1">Outcome:</strong>
                      <p className="text-gray-600 font-light text-[15px]">Consistent B2B enquiry pipeline established. Brand presence built from scratch. Investment conversations opened.</p>
                    </div>
                  </div>
                </div>
                <blockquote className="mt-10 border-l-2 border-black pl-5 italic text-gray-700">
                  "SalHurry helped us scale with a modern, data-driven approach. Their strategies brought consistent enquiries and real revenue growth. They truly opened new doors for our construction and mining business in Kerala." — <span className="font-bold">Vishnu Gopinath</span>, Southern Sigma Ventures
                </blockquote>
              </div>
            </ScrollReveal>

            {/* Case 2 */}
            <ScrollReveal>
              <div className="border border-gray-100 rounded-[40px] p-8 md:p-12 hover:shadow-2xl transition-shadow bg-[#FAFAFA]">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Steamed Restaurant</h3>
                    <p className="text-[#A3E635] font-bold text-sm tracking-widest uppercase">F&B · Trivandrum</p>
                  </div>
                  <Link href="/case-studies/steamed" className="shrink-0 bg-black text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-[#A3E635] hover:text-black transition-colors">
                    Read Case Study
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="prose text-gray-600 font-light">
                    <p>Steamed came to us with a problem familiar to many Trivandrum restaurants — good food, genuine local reputation, but no system to grow beyond it. Their marketing was reactive and inconsistent, online presence was weak, and they had no mechanism to turn first-time visitors into regulars.</p>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <strong className="block text-black mb-1">What we did:</strong>
                      <p className="text-gray-600 font-light text-[15px]">Built a full GTM approach for the restaurant — audience definition, offer structuring (how they positioned their menu), local digital presence optimisation, and a structured approach to customer retention. Before recommending anything, we studied how their floor operations actually worked.</p>
                    </div>
                    <div>
                      <strong className="block text-black mb-1">Outcome:</strong>
                      <p className="text-gray-600 font-light text-[15px]">Improved repeat customer rate, stronger local digital visibility, and a clear marketing system the team could run consistently without depending on an agency for every decision.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Case 3 */}
            <ScrollReveal>
              <div className="border border-gray-100 rounded-[40px] p-8 md:p-12 hover:shadow-2xl transition-shadow bg-[#FAFAFA]">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Finotes → Appxiom</h3>
                    <p className="text-[#A3E635] font-bold text-sm tracking-widest uppercase">B2B SaaS / Mobile App Monitoring · Tech Startup</p>
                  </div>
                  <Link href="/case-studies/appxiom" className="shrink-0 bg-black text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-[#A3E635] hover:text-black transition-colors">
                    Read Case Study
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="prose text-gray-600 font-light">
                    <p>Finotes (now Appxiom) is a mobile and web application bug detection platform used globally. When they approached SalHurry, the product was technically mature, but their go-to-market approach wasn't matching the product's quality. The challenge: buyers need to understand value in business terms, not just feature terms. Their positioning needed to shift from "what the product does" to "what it prevents costing you."</p>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <strong className="block text-black mb-1">What we did:</strong>
                      <p className="text-gray-600 font-light text-[15px]">GTM strategy refinement — repositioning from a pure developer tool to a business impact platform, defining the ideal customer profile across developer/QA/Product Manager personas, and structuring their sales approach for both self-serve and outbound enterprise conversations.</p>
                    </div>
                    <div>
                      <strong className="block text-black mb-1">Outcome:</strong>
                      <p className="text-gray-600 font-light text-[15px]">Clearer market positioning, improved sales conversation quality, and a repeatable GTM framework the founding team could execute and iterate on independently.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Interim Leadership as a Service */}
      <section className="py-24 px-6 md:px-12 bg-[#1A1A1A] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-[#A3E635] uppercase tracking-widest text-[10px] font-bold mb-4 block">For businesses that need more than advice</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Sometimes You Don't Need a Strategy Deck. You Need Someone in the Room.</h2>
                <div className="prose prose-invert prose-lg text-gray-400 font-light leading-relaxed">
                  <p>Some businesses have tried consultants before. They get a document, a presentation, a set of recommendations — and then the consultant leaves, and nothing actually changes because the knowledge stayed with the consultant, not the team.</p>
                  <p>We work differently. For clients who need it, we offer what we call <strong>Interim Leadership as a Service</strong> — where one of our experienced people joins your operations temporarily, not as an external advisor, but as an embedded team member.</p>
                  <p>This is for businesses in a transition — expanding to a new location, launching a new product line, rebuilding a broken sales team, or navigating a period where they need senior thinking but aren't ready to hire a full-time person for it.</p>
                  <p>What this looks like in practice: your day-to-day operations get a senior eye on them. Decisions get made faster because there's someone with experience in the room. The knowledge transfers to your team so when we step back, you're stronger, not dependent.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-[#0A0A0A] border border-white/5 rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-6">3 scenarios where this makes sense:</h3>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#A3E635] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white mb-1">You're expanding</strong>
                      <p className="text-gray-400 font-light text-sm">Opening a second location, entering a new market, or launching a new division. The complexity is higher than your current team can manage alone.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#A3E635] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white mb-1">Your sales process is broken</strong>
                      <p className="text-gray-400 font-light text-sm">Leads exist but conversion is poor, the team has no consistent process, and nobody is accountable for revenue targets.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#A3E635] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white mb-1">You need a GTM lead but can't hire one yet</strong>
                      <p className="text-gray-400 font-light text-sm">You're at the stage where you need experienced sales or marketing leadership but the business isn't ready for a full-time hire. We fill that gap.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 8 — The Honest Part */}
      <section className="py-24 px-6 md:px-12 bg-[#F3F4F6]">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <ShieldAlert className="w-12 h-12 text-black mx-auto mb-6 opacity-30" />
            <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold mb-4 block">What we won't do</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">We'll Tell You If Ads Aren't the Answer Yet.</h2>
            
            <div className="text-gray-600 text-lg font-light leading-relaxed space-y-6 mb-12 text-left bg-white p-8 md:p-12 rounded-3xl border border-gray-100">
              <p>Some businesses come to us wanting to run Google Ads or Meta <Link href="/services/web-development" className="text-black font-semibold hover:underline">campaigns</Link> immediately. Sometimes that's exactly the right move. Sometimes it isn't — and we'll tell you that directly.</p>
              <ul className="space-y-4 list-disc pl-5">
                <li>If your lead handling process is broken — if an interested customer calls and nobody follows up properly — then generating more leads just means more wasted opportunities. We'll fix the process first.</li>
                <li>If your offer isn't compelling — if the reason to choose you isn't clear — then more visibility just means more people clearly deciding not to choose you. We'll refine the offer first.</li>
                <li>If your business has an operational issue that marketing can't solve — pricing, team, product — we'll name it. We won't take your budget and run campaigns that we know won't convert.</li>
              </ul>
              <p>This is why some clients come to us for a GTM engagement before they ever run a single ad. And it's why the clients who do run campaigns with us tend to get better results — because by the time we spend money on ads, everything the ad is pointing to actually works.</p>
            </div>

            <p className="text-2xl font-black italic tracking-tight">
              "We'd rather lose a client in the first meeting than waste their money for three months."
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 9 — Final CTA */}
      <section className="py-24 px-6 bg-[#A3E635] text-black text-center">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Start With a Conversation.<br />Not a Contract.
            </h2>
            <p className="text-lg md:text-xl text-black/80 font-medium leading-relaxed mb-10">
              Book a free strategy session with our team in Trivandrum. We'll spend 45 minutes understanding your business, your current situation, and whether we're the right fit for what you need. No pitch deck. No obligations.
            </p>
            <p className="text-md text-black/70 mb-10 max-w-xl mx-auto">
              If we can help you, we'll tell you exactly how. If we can't, we'll tell you that too — and point you in the right direction.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-white hover:text-black transition-all text-sm w-full sm:w-auto shadow-xl">
                Book Free Strategy Session
              </Link>
              <a href="https://wa.me/916282687001" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border-2 border-black text-black font-bold rounded-full hover:bg-black hover:text-[#A3E635] transition-all text-sm w-full sm:w-auto">
                WhatsApp Us — +91 62826 87001
              </a>
            </div>

            <div className="mt-12 text-xs font-bold uppercase tracking-widest text-black/50 border-t border-black/10 pt-8 inline-block">
              Based in Kilimanoor, Trivandrum. We work with businesses across Trivandrum, Kochi, and select UAE markets. In-person meetings available for Trivandrum clients.
            </div>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
