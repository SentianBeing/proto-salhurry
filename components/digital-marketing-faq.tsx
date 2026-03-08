'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'What makes SalHurry different from a typical digital marketing agency?',
        answer: (
            <div className="space-y-4">
                <p>Most digital marketing agencies focus only on running ads or posting on social media.</p>
                <p>SalHurry operates as a <span className="font-bold text-black">sales growth agency</span>. Instead of just executing marketing tasks, we build structured customer acquisition systems that help businesses generate consistent sales.</p>
                <p>This includes strategy, campaign architecture, landing pages, funnels, lead management systems, and performance marketing. Our goal is not just traffic or leads — it is real business growth and measurable sales results.</p>
            </div>
        )
    },
    {
        question: 'Do you only run ads or do you provide complete marketing systems?',
        answer: (
            <div className="space-y-4">
                <p>We build complete growth systems.</p>
                <p>Running ads without the right strategy often wastes budget. Before launching campaigns, we design the growth infrastructure needed for customer acquisition. This may include:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Growth strategy and GTM planning</li>
                    <li>Landing page and funnel systems</li>
                    <li>Lead generation and CRM automation</li>
                    <li>Performance marketing campaigns</li>
                    <li>Creative marketing campaigns and activations</li>
                </ul>
                <p>The goal is to build a structured system that consistently brings customers, not just temporary ad results.</p>
            </div>
        )
    },
    {
        question: 'What types of businesses do you work with?',
        answer: (
            <div className="space-y-4">
                <p>We primarily work with:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Startups and early-stage businesses</li>
                    <li>Local businesses</li>
                    <li>Construction, mining, and real estate companies</li>
                    <li>Clinics and gyms</li>
                    <li>Event companies and wedding planners</li>
                    <li>Businesses launching new products or services</li>
                </ul>
                <p>Many of our clients already have a product or service but need a structured strategy to acquire customers and scale their sales.</p>
            </div>
        )
    },
    {
        question: 'Do you help startups launch their products in the market?',
        answer: (
            <div className="space-y-4">
                <p>Yes.</p>
                <p>We work with early-stage startups and product founders to design a <span className="font-bold text-black">Go-To-Market (GTM) strategy</span>.</p>
                <p>Our team has experience working with SaaS products, digital platforms, and service businesses, which allows us to help founders:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Position their product correctly</li>
                    <li>Identify their target audience</li>
                    <li>Design acquisition channels</li>
                    <li>Launch campaigns that create early traction</li>
                </ul>
                <p>This helps startups enter the market with a clear growth roadmap instead of guessing marketing strategies.</p>
            </div>
        )
    },
    {
        question: 'Do you charge monthly or project-based pricing?',
        answer: (
            <div className="space-y-4">
                <p>Our pricing structure depends on the type of work.</p>
                <p className="font-bold text-black mt-4">One-time services</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Website development</li>
                    <li>Landing page creation</li>
                    <li>Initial brand setup</li>
                    <li>Marketing infrastructure setup</li>
                </ul>
                <p className="font-bold text-black mt-4">Monthly retainers</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Performance marketing campaigns</li>
                    <li>Lead generation systems</li>
                    <li>Campaign optimization</li>
                    <li>Continuous growth support</li>
                </ul>
                <p>Ad spend is separate from agency fees, and campaigns are optimized regularly to improve performance.</p>
            </div>
        )
    },
    {
        question: 'What happens if campaigns do not perform well?',
        answer: (
            <div className="space-y-4">
                <p>We focus on long-term growth partnerships, not short-term billing.</p>
                <p>If a campaign significantly underperforms and the client is not satisfied with the results, we may reduce or waive our agency fees, depending on the situation.</p>
                <p>Our goal is to ensure clients feel confident that our incentives are aligned with their business growth and success.</p>
            </div>
        )
    },
    {
        question: 'Do you provide reporting and campaign transparency?',
        answer: (
            <div className="space-y-4">
                <p>Yes.</p>
                <p>Clients receive clear performance reports and campaign insights, which may include:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Campaign performance metrics</li>
                    <li>Lead and sales tracking</li>
                    <li>Ad performance breakdown</li>
                    <li>Optimization insights</li>
                </ul>
                <p>For active campaign clients, we also provide regular updates and performance discussions to ensure campaigns are improving over time.</p>
            </div>
        )
    },
    {
        question: 'Do you help businesses generate leads or sales?',
        answer: (
            <div className="space-y-4">
                <p>Our main focus is <span className="font-bold text-black">sales growth</span>.</p>
                <p>While lead generation is part of the process, our strategy is built around converting those leads into paying customers.</p>
                <p>This is why we often build:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Conversion-focused landing pages</li>
                    <li>Lead qualification systems</li>
                    <li>CRM and automation workflows</li>
                    <li>Follow-up funnels</li>
                </ul>
                <p>This ensures that leads are properly nurtured and converted into actual revenue.</p>
            </div>
        )
    },
    {
        question: 'Do you build websites and landing pages as part of your services?',
        answer: (
            <div className="space-y-4">
                <p>Yes.</p>
                <p>Websites, landing pages, and digital assets are often part of our growth infrastructure. We create:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Campaign-focused landing pages</li>
                    <li>Conversion-optimized websites</li>
                    <li>Lead capture forms and funnels</li>
                    <li>Marketing automation integrations</li>
                </ul>
                <p>These assets help ensure that traffic from marketing campaigns converts into real customers.</p>
            </div>
        )
    },
    {
        question: 'Do you work with gyms and fitness businesses?',
        answer: (
            <div className="space-y-4">
                <p>Yes. We have worked extensively with fitness businesses and gyms.</p>
                <p>We are also developing a fitness SaaS platform called <span className="font-bold text-black">GymScribe</span>, designed to help gym owners manage memberships and automate payment collection. The system includes:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Member payment tracking</li>
                    <li>Automated reminders for pending payments</li>
                    <li>Dashboard for gym owners</li>
                    <li>Future automated payment collection features</li>
                </ul>
                <p>This allows gyms to improve revenue collection while reducing manual follow-ups.</p>
            </div>
        )
    },
    {
        question: 'What is the Free Growth Audit?',
        answer: (
            <div className="space-y-4">
                <p>The Free Growth Audit is a strategy session where we evaluate your business’s current marketing and customer acquisition system.</p>
                <p>During the audit, we review:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Current marketing channels</li>
                    <li>Customer acquisition strategy</li>
                    <li>Website and conversion systems</li>
                    <li>Lead generation process</li>
                    <li>Growth opportunities</li>
                </ul>
                <p>At the end, you receive actionable insights and growth recommendations for improving your sales pipeline.</p>
            </div>
        )
    },
    {
        question: 'How do I get started with SalHurry?',
        answer: (
            <div className="space-y-4">
                <p>The best way to start is with a <span className="font-bold text-[#A3E635] bg-black px-2 py-0.5 rounded-md">Free Growth Audit</span>.</p>
                <p>This helps us understand your business, growth goals, and current challenges before recommending a strategy.</p>
                <p>Once we identify the right approach, we design a structured growth plan to help you acquire more customers and scale your business.</p>
            </div>
        )
    }
];

export default function DigitalMarketingFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <span className="inline-block px-4 py-1 border border-gray-200 rounded-full text-[10px] uppercase tracking-widest text-[#A3E635] font-bold mb-6 bg-gray-50">
                    FAQ
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-6 tracking-tight">
                    Digital Marketing & Sales Growth
                </h2>
                <p className="text-gray-500 text-lg">
                    Answers to common questions about our strategy, execution, and growth models.
                </p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-[#A3E635] bg-[#F9FAFB] shadow-sm' : 'border-gray-100 bg-white hover:border-gray-300'}`}
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                        >
                            <h3 className={`font-bold text-lg md:text-xl pr-8 transition-colors ${openIndex === index ? 'text-black' : 'text-gray-800'}`}>
                                {faq.question}
                            </h3>
                            <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-[#A3E635] text-black' : 'bg-gray-100 text-gray-500'}`}>
                                {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                            </div>
                        </button>

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100/50 mt-2">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
