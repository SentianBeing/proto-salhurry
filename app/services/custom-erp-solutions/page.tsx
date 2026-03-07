import React from 'react';
import Navbar from '@/layouts/navbar';
import Footer from '@/layouts/footer';
import Partners from '@/components/partners';
import CTA from '@/components/cta';
import ContactButton from '@/components/contact-button';
import { Metadata } from 'next';
import { Settings, Database, Server, Cog, Building2, Activity, Dumbbell, ShieldCheck, ArrowRight, Truck } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Custom ERP Solutions | SalHurry',
    description: 'Bespoke Enterprise Resource Planning software tailored for Gyms, Medical Clinics, Construction, and Fleet Management. Streamline your operations with SalHurry.',
    alternates: {
        canonical: '/services/custom-erp-solutions',
    },
};

export default function CustomERPSolutionsPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="relative bg-[#0A0A0A] overflow-hidden pb-24">
                {/* Neon Smudge Effect */}
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#A3E635] blur-[120px] rounded-full opacity-10 pointer-events-none"></div>
                <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-[#2D3321] blur-[100px] rounded-full opacity-30 pointer-events-none"></div>

                <Navbar />

                <div className="px-6 md:px-12 max-w-7xl mx-auto pt-20 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="max-w-3xl relative z-20 min-h-[500px] flex flex-col justify-center">
                            <span className="inline-block px-4 py-1 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-[#A3E635] mb-6 w-max">
                                Enterprise Engineering
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
                                Custom ERP <br />
                                <span className="text-[#A3E635]">Solutions</span>
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed mb-12 drop-shadow-md">
                                We build specialized, robust Enterprise Resource Planning software that aligns perfectly with your business logic. Remove bottlenecks, automate operations, and reclaim lost revenue.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <ContactButton
                                    text="Discuss Your Project"
                                    className="bg-[#A3E635] text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all shadow-lg"
                                />
                            </div>
                        </div>

                        {/* Right Graphics */}
                        <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center lg:ml-auto">
                            <div className="relative w-full aspect-square border border-white/10 rounded-[40px] bg-white/5 backdrop-blur-md flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

                                <div className="relative z-10 grid grid-cols-2 gap-6 p-8">
                                    {[
                                        { icon: Database, label: 'Centralized Data' },
                                        { icon: Cog, label: 'Automated Workflows' },
                                        { icon: Server, label: 'Cloud Infrastructure' },
                                        { icon: Settings, label: 'Seamless Integration' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-black/50 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-4 hover:border-[#A3E635]/50 transition-colors">
                                            <item.icon className="w-8 h-8 text-[#A3E635]" />
                                            <span className="text-sm font-medium text-white">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Partners />

            {/* Industries Grid */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 border border-gray-200 rounded-full text-[10px] uppercase tracking-widest text-gray-500 mb-6">
                        Industry Focus
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                        Specialized ERP For Your Sector
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Off-the-shelf software often forces you to change how you work. We build Custom ERP platforms tailored to the exact requirements of specific industries.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: 'Construction Companies',
                            description: 'Manage projects, track materials, schedule resources, and monitor costs in real-time across multiple job sites.',
                            icon: Building2
                        },
                        {
                            title: 'Medical Clinics',
                            description: 'Streamline patient records, appointment scheduling, billing, and inventory management with HIPAA-compliant infrastructure.',
                            icon: Activity
                        },
                        {
                            title: 'Fitness & Gyms',
                            description: 'Handle membership subscriptions, class scheduling, automated billing, and member communications in one platform.',
                            icon: Dumbbell
                        }
                    ].map((industry, idx) => (
                        <div key={idx} className="p-8 rounded-[32px] bg-[#F9FAFB] border border-gray-100 hover:border-[#A3E635] transition-all group">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#A3E635] transition-colors">
                                <industry.icon className="w-7 h-7 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{industry.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Product Highlight: Gym Scribe */}
            <section className="bg-[#0A0A0A] py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative h-[450px] md:h-[600px] rounded-[40px] border border-white/10 overflow-hidden bg-white/5 flex flex-col p-8 md:p-12">
                            <div className="flex-1 flex flex-col justify-center">
                                <div className="w-16 h-16 bg-[#A3E635]/20 rounded-2xl flex items-center justify-center mb-8">
                                    <ShieldCheck className="w-8 h-8 text-[#A3E635]" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">Cash Leakage Prevention</h3>
                                <p className="text-gray-400 mb-8">Gyms consistently lose revenue because payment follow-ups aren't made on time, or members simply forget to pay their subscription amounts.</p>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-white/80 border border-white/10 p-4 rounded-xl bg-white/5">
                                        <div className="w-2 h-2 rounded-full bg-[#A3E635]"></div>
                                        <span>Automated Payment Collection</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-white/80 border border-white/10 p-4 rounded-xl bg-white/5">
                                        <div className="w-2 h-2 rounded-full bg-[#A3E635]"></div>
                                        <span>Smart Follow-up Reminders</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-white/80 border border-white/10 p-4 rounded-xl bg-white/5">
                                        <div className="w-2 h-2 rounded-full bg-[#A3E635]"></div>
                                        <span>Zero Friction Subscription Management</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="inline-block px-4 py-1 border border-[#A3E635]/30 rounded-full text-[10px] uppercase tracking-widest text-[#A3E635] mb-6">
                                Featured SaaS Product
                            </span>
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                Gym Scribe
                            </h2>
                            <p className="text-xl text-gray-300 mb-8">
                                The ultimate revenue collection engine specifically engineered for the fitness industry.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed mb-10">
                                The biggest advantage of our Gym Scribe SaaS product is its ability to completely automate your payment collection. Stop chasing down members for unpaid invoices and let the system handle the heavy lifting, instantly boosting your bottom line.
                            </p>

                            <ContactButton
                                text="Get Early Access"
                                className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-[#A3E635] transition-all"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Highlight: Fleet Management */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="inline-block px-4 py-1 border border-gray-200 rounded-full text-[10px] uppercase tracking-widest text-gray-500 mb-6">
                            Featured SaaS Product
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                            Fleet Management System
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-8">
                            Designed from the ground up for Construction and Mining Supply companies, our Fleet Management ERP gives you unprecedented visibility over your assets. Track vehicle telemetry, schedule preventative maintenance, optimize dispatch routes, and reduce fuel costs with a centralized, real-time dashboard.
                        </p>

                        <ContactButton
                            text="Get Early Access"
                            className="flex items-center gap-2 font-bold text-black border-b-2 border-[#A3E635] pb-1 hover:gap-4 transition-all !bg-transparent !p-0"
                        />
                    </div>

                    <div className="relative h-[450px] md:h-[600px] rounded-[40px] overflow-hidden bg-[#F9FAFB] border border-gray-100 flex items-center justify-center p-8">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

                        <div className="relative z-10 w-full max-w-sm bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
                            <div className="flex items-center gap-4 border-b border-gray-100 pb-4 mb-4">
                                <div className="w-12 h-12 bg-[#2D3321] rounded-xl flex items-center justify-center">
                                    <Truck className="w-6 h-6 text-[#A3E635]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">Active Fleet Status</h4>
                                    <p className="text-xs text-gray-500">Live Telemetry Tracking</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500">In Transit</span>
                                    <span className="font-bold text-green-600">42 Units</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full w-[65%]"></div>
                                </div>

                                <div className="flex justify-between items-center text-sm mt-4">
                                    <span className="text-gray-500">Maintenance Required</span>
                                    <span className="font-bold text-amber-500">3 Units</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className="bg-amber-500 h-2 rounded-full w-[15%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
