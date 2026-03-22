'use client';

import React, { useState, useRef, useId } from 'react';
import Navbar from '@/layouts/navbar';
import Footer from '@/layouts/footer';
import ScrollReveal from '@/components/scroll-reveal';
import { motion } from 'motion/react';
import { Upload, Loader2, CheckCircle2, Phone, Mail, MapPin, Globe2 } from 'lucide-react';

import type { TCountryCode } from 'countries-list';
import { DottedMap } from '@/components/magicui/dotted-map';
import type { Marker } from '@/components/magicui/dotted-map';

type CountryCode = Lowercase<TCountryCode>;

type MyMarker = Marker & {
  overlay: {
    countryCode: CountryCode;
    label: string;
  };
};

const mapMarkers: MyMarker[] = [
  {
    lat: 25.2048,
    lng: 55.2708,
    size: 2.8,
    overlay: { countryCode: "ae", label: "UAE" },
  },
  {
    lat: 52.5200,
    lng: 13.4050,
    size: 2.8,
    overlay: { countryCode: "de", label: "Germany" },
  },
  {
    lat: 10.8505,
    lng: 76.2711,
    size: 2.8,
    overlay: { countryCode: "in", label: "India" },
  },
];

export default function ContactPage() {
  const id = useId();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
      } else {
        setError(result.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to send message. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert('File size exceeds 10MB limit');
        e.target.value = '';
        setFileName(null);
        return;
      }
      setFileName(file.name);
    } else {
      setFileName(null);
    }
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] font-sans text-white">
      <Navbar />

      <div className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Info & Map */}
          <div className="flex flex-col gap-12">
            <ScrollReveal>
              <div>
                <span className="inline-block px-4 py-1.5 border border-[#A3E635]/30 text-[#A3E635] bg-[#A3E635]/10 rounded-full text-[10px] tracking-[0.2em] uppercase mb-6 font-bold backdrop-blur-sm">
                  Get in Touch
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight text-white">
                  Request a <br />
                  <span className="text-[#A3E635]">call back.</span>
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md font-light">
                  Have a bold vision? Leave your details and an executive from Divegrid will reach out to you within hours to discuss your next big move.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-[#1A1A1A] border border-white/5 rounded-3xl p-8 flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#A3E635]" />
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Direct Lines</h3>
                    <p className="text-white font-medium text-lg">+91 62826 87001</p>
                    <p className="text-white font-medium text-lg">+91 9746133532</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#A3E635]" />
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">General Inquiries</h3>
                    <p className="text-white font-medium text-lg">info@salhurry.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#A3E635]" />
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Headquarters</h3>
                    <p className="text-white font-medium">Salhurry powered by Divegrid Pvt Ltd</p>
                    <p className="text-gray-400 text-sm mt-1">JS Arcade, MC Rd, Kilimanoor, Trivandrum</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-white/10 mt-2">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Globe2 className="w-5 h-5 text-[#A3E635]" />
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Global Reach</h3>
                    <p className="text-white font-medium text-[15px] sm:text-base">Serving: UAE, India, Germany</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Dotted Map Element */}
            <ScrollReveal delay={0.2}>
              <div className="bg-[#1A1A1A] border border-white/5 rounded-3xl relative overflow-hidden h-[240px] sm:h-[300px] w-full flex items-center justify-center group p-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#1A1A1A_100%)] z-10 pointer-events-none" />
                <DottedMap<MyMarker>
                  markers={mapMarkers}
                  dotColor="rgba(255, 255, 255, 0.15)"
                  markerColor="#A3E635"
                  className="z-0"
                  renderMarkerOverlay={({ marker, x, y, r, index }) => {
                    const { countryCode, label } = marker.overlay;
                    const href = `https://flagcdn.com/w80/${countryCode}.webp`;

                    const clipId = `${id}-flag-clip-${index}`.replace(/:/g, "-");
                    const imgR = r * 0.75;

                    const fontSize = r * 0.9;
                    const pillH = r * 1.5;
                    const pillW = label.length * (fontSize * 0.62) + r * 1.4;
                    const pillX = x + r + r * 0.6;
                    const pillY = y - pillH / 2;

                    return (
                      <g style={{ pointerEvents: "none" }}>
                        <clipPath id={clipId}>
                          <circle cx={x} cy={y} r={imgR} />
                        </clipPath>

                        <image
                          href={href}
                          x={x - imgR}
                          y={y - imgR}
                          width={imgR * 2}
                          height={imgR * 2}
                          preserveAspectRatio="xMidYMid slice"
                          clipPath={`url(#${clipId})`}
                        />

                        <rect
                          x={pillX}
                          y={pillY}
                          width={pillW}
                          height={pillH}
                          rx={pillH / 2}
                          fill="rgba(0,0,0,0.55)"
                        />
                        <text
                          x={pillX + r * 0.7}
                          y={y + fontSize * 0.35}
                          fontSize={fontSize}
                          fill="white"
                        >
                          {label}
                        </text>
                      </g>
                    );
                  }}
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Animated Beam Form Container */}
          <ScrollReveal delay={0.2}>
            {/* The wrapper that creates the animated beam border effect, sourced from contact-modal.tsx logic */}
            <div className="relative w-full p-[2px] rounded-[34px] shadow-2xl overflow-hidden mt-8 md:mt-0">
              
              {/* Beaming Border Effect */}
              <div className="absolute inset-[-100%] z-0 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#A3E635_0%,transparent_15%,transparent_85%,#A3E635_100%)]" />
              
              {/* Inner Form Container */}
              <div className="relative w-full h-full bg-white rounded-[32px] z-10 p-8 sm:p-10">
                
                {isSuccess ? (
                  <div className="py-16 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-24 h-24 bg-[#A3E635]/20 rounded-full flex items-center justify-center mx-auto mb-8"
                    >
                      <CheckCircle2 className="w-12 h-12 text-[#A3E635]" />
                    </motion.div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank you!</h2>
                    <p className="text-gray-500 text-lg">Your bold vision is received. We will respond within hours.</p>
                  </div>
                ) : (
                  <>
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1.5 ml-1">Full Name *</label>
                        <input
                          required
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-gray-50 text-black border border-gray-200 rounded-2xl text-[14px] sm:text-[15px] focus:outline-none focus:border-[#A3E635] focus:bg-white transition-all shadow-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1.5 ml-1">Phone Number *</label>
                        <input
                          required
                          name="phone"
                          type="tel"
                          placeholder="+91 00000 00000"
                          className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-gray-50 text-black border border-gray-200 rounded-2xl text-[14px] sm:text-[15px] focus:outline-none focus:border-[#A3E635] focus:bg-white transition-all shadow-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1.5 ml-1">Project Type *</label>
                        <select
                          required
                          name="projectType"
                          className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-gray-50 text-black border border-gray-200 rounded-2xl text-[14px] sm:text-[15px] focus:outline-none focus:border-[#A3E635] focus:bg-white transition-all shadow-sm appearance-none"
                        >
                          <option value="">Select a service</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                          <option value="Branding and Digital Infrastructure">Branding and Digital Infrastructure</option>
                          <option value="Web Development">Web Development</option>
                          <option value="Growth Strategy">Growth Strategy</option>
                          <option value="Ai Automation">Ai Automation</option>
                          <option value="Others">Others</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1.5 ml-1">Message (Optional)</label>
                        <textarea
                          name="message"
                          rows={3}
                          placeholder="Tell us about your project..."
                          className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-gray-50 text-black border border-gray-200 rounded-2xl text-[14px] sm:text-[15px] focus:outline-none focus:border-[#A3E635] focus:bg-white transition-all shadow-sm resize-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1.5 ml-1">Attachment (Max 10MB)</label>
                        <div
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-gray-50 text-black border border-dashed border-gray-300 rounded-2xl text-[14px] sm:text-[15px] cursor-pointer hover:border-[#A3E635] hover:bg-[#A3E635]/5 transition-all flex items-center justify-between"
                        >
                          <span className={`${fileName ? 'text-black font-medium' : 'text-gray-400'} truncate max-w-[200px] sm:max-w-full`}>
                            {fileName || 'Upload project brief (PDF, DOC)'}
                          </span>
                          <Upload className={`w-5 h-5 ${fileName ? 'text-[#A3E635]' : 'text-gray-400'}`} />
                        </div>
                        <input
                          ref={fileInputRef}
                          name="file"
                          type="file"
                          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </div>

                      {error && (
                        <p className="text-red-500 text-sm mt-3 ml-1 bg-red-50 p-3 rounded-lg border border-red-100">{error}</p>
                      )}

                      <button
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full py-4 sm:py-5 bg-black text-white rounded-full font-bold text-[14px] sm:text-[15px] hover:bg-[#A3E635] hover:text-black transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-4 sm:mt-6 relative overflow-hidden shadow-xl"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Submitting securely...
                          </>
                        ) : (
                          'Request a call back'
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <Footer />
    </main>
  );
}
