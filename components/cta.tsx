'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

export default function CTA() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setStatus('loading');

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('phone', phone);
      formData.append('email', `${name.toLowerCase().replace(/[^a-z0-9]/g, '') || 'lead'}@salhurry.in`);
      formData.append('projectType', 'Ready To Talk Mini Form');
      formData.append('message', `Callback requested by ${name} (Phone/WhatsApp: ${phone})`);

      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        // Fallback open WhatsApp chat with details
        const waText = encodeURIComponent(`Hi SalHurry! I am ${name} (${phone}). Ready to talk about a website project.`);
        window.open(`https://wa.me/919400478845?text=${waText}`, '_blank');
      }

      setStatus('success');
    } catch (err) {
      // Direct WhatsApp fallback if fetch fails
      const waText = encodeURIComponent(`Hi SalHurry! I am ${name} (${phone}). Ready to talk about a website project.`);
      window.open(`https://wa.me/919400478845?text=${waText}`, '_blank');
      setStatus('success');
    }
  };

  return (
    <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto py-12 sm:py-24">
      <div className="relative min-h-[420px] sm:min-h-[460px] rounded-[40px] sm:rounded-[60px] overflow-hidden flex items-center justify-center text-center px-6 py-12 sm:py-16">
        <Image
          src="https://picsum.photos/1200/600?grayscale"
          alt="SalHurry Contact Us Background"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/75 backdrop-blur-xs"></div>

        <div className="relative z-10 max-w-xl mx-auto w-full">
          <span className="inline-block px-4 py-1 border border-[#A3E635]/40 text-[#A3E635] bg-[#A3E635]/10 rounded-full text-[10px] uppercase tracking-widest mb-4 font-bold backdrop-blur-md">
            STAY IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-5 tracking-tight">
            Ready To Talk
          </h2>
          <p className="text-white/70 mb-8 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Leave your name and number below. Our team will get back to you right away.
          </p>

          {status === 'success' ? (
            <div className="bg-white/10 border border-[#A3E635] rounded-3xl p-6 backdrop-blur-md max-w-md mx-auto flex flex-col items-center gap-3 shadow-2xl">
              <CheckCircle2 className="w-10 h-10 text-[#A3E635]" />
              <h3 className="text-lg font-bold text-white">Request Received!</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Thank you <span className="text-white font-bold">{name}</span>! We have received your number and will reach out to you shortly.
              </p>
              <button
                onClick={() => {
                  setStatus('idle');
                  setName('');
                  setPhone('');
                }}
                className="mt-2 text-xs font-bold text-[#A3E635] underline hover:text-white transition-colors"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto bg-white/10 p-2.5 sm:p-3 rounded-3xl sm:rounded-full border border-white/20 backdrop-blur-md shadow-2xl">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full sm:flex-1 px-5 py-3.5 bg-black/50 border border-white/15 text-white placeholder-gray-400 rounded-full text-xs font-medium focus:outline-none focus:border-[#A3E635] transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone / WhatsApp"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full sm:flex-1 px-5 py-3.5 bg-black/50 border border-white/15 text-white placeholder-gray-400 rounded-full text-xs font-medium focus:outline-none focus:border-[#A3E635] transition-colors"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#A3E635] text-black font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 shrink-0 shadow-lg"
              >
                {status === 'loading' ? (
                  <Loader2 className="w-4 h-4 animate-spin text-black" />
                ) : (
                  <>
                    <span>Submit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
