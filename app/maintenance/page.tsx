import React from 'react';
import Navbar from '@/layouts/navbar';
import Footer from '@/layouts/footer';
import { Settings } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Under Maintenance | SalHurry',
    robots: {
        index: false,
        follow: false,
    }
};

export default function MaintenancePage() {
    return (
        <main className="min-h-screen bg-white flex flex-col">
            <div className="bg-[#0A0A0A]">
                <Navbar />
            </div>

            <div className="flex-1 flex flex-col items-center justify-center py-32 px-6 md:px-12 text-center">
                <div className="bg-gray-50 border border-gray-100 p-8 sm:p-12 md:p-16 rounded-[40px] max-w-3xl w-full shadow-sm">
                    <div className="w-20 h-20 bg-[#A3E635]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                        <Settings className="w-10 h-10 text-[#A3E635] animate-spin-slow" />
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                        We are building something <span className="text-[#A3E635]">amazing</span> here.
                    </h1>

                    <p className="text-gray-500 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-10">
                        Our projects portfolio is currently under maintenance as we add our latest success stories. Please check back soon!
                    </p>

                    <a href="/" className="inline-flex items-center justify-center bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-black transition-colors">
                        Back to Home
                    </a>
                </div>
            </div>

            <Footer />
        </main>
    );
}
