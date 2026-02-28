import React from 'react';
import Navbar from '@/layouts/navbar';
import Footer from '@/layouts/footer';

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative bg-[#0A0A0A] overflow-hidden pb-24">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#2D3321] blur-[120px] rounded-full opacity-40 pointer-events-none"></div>
        <Navbar />
        <div className="px-6 md:px-12 max-w-7xl mx-auto pt-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">Legal Information</h1>
          <p className="text-xl text-gray-400">Privacy Policy & Terms of Service</p>
        </div>
      </div>

      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="prose prose-slate max-w-none">
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-black border-b-2 border-[#A3E635] pb-2 inline-block">Privacy Policy</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                At SalHurry, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information when you use our website and services.
              </p>
              <h3 className="text-xl font-bold text-black mt-8">1. Information Collection</h3>
              <p>
                We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us via email.
              </p>
              <h3 className="text-xl font-bold text-black mt-8">2. Use of Information</h3>
              <p>
                We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to develop new products and features.
              </p>
              <h3 className="text-xl font-bold text-black mt-8">3. Data Security</h3>
              <p>
                We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or destruction.
              </p>
            </div>
          </div>

          <div className="pt-20 border-t border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-black border-b-2 border-[#A3E635] pb-2 inline-block">Terms of Service</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                By accessing or using SalHurry&apos;s services, you agree to be bound by these Terms of Service.
              </p>
              <h3 className="text-xl font-bold text-black mt-8">1. Use of Services</h3>
              <p>
                You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of any account information.
              </p>
              <h3 className="text-xl font-bold text-black mt-8">2. Intellectual Property</h3>
              <p>
                All content, features, and functionality on our website are the exclusive property of SalHurry and its licensors and are protected by international copyright, trademark, and other laws.
              </p>
              <h3 className="text-xl font-bold text-black mt-8">3. Limitation of Liability</h3>
              <p>
                SalHurry shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
