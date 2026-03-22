import React from 'react';
import { Compass, Box, PartyPopper, BriefcaseMedical, Sofa, GraduationCap, Factory, Plane, Handshake } from 'lucide-react';
import Image from 'next/image';

export default function Industries() {
  return (
    <section className="bg-[#0A0A0A] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="text-[#A3E635] text-[10px] tracking-widest uppercase font-bold mb-4 block cursor-default">
            WHO WE WORK WITH
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            Industries We've Driven <br className="hidden md:block" /> Growth In
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[250px] gap-4">
          
          {/* Constuction & Real Estate - span 4 */}
          <div className="md:col-span-6 lg:col-span-4 bg-[#141414] border border-white/5 rounded-[16px] p-8 relative overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" 
                alt="Construction & Real Estate background placeholder" 
                fill 
                className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#141414]/60 to-transparent"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex justify-between items-start">
                <Compass className="w-6 h-6 text-[#A3E635]" />
                <span className="text-[9px] uppercase tracking-widest text-gray-400 font-medium">Growth Sector 01</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Construction & Real Estate</h3>
                <p className="text-gray-300 text-sm max-w-sm leading-relaxed">
                  Scaling development firms and real estate conglomerates through precision lead acquisition.
                </p>
              </div>
            </div>
          </div>

          {/* HVAC & MEP - span 2 */}
          <div className="md:col-span-3 lg:col-span-2 bg-[#1A1A1A] border border-white/5 rounded-[16px] p-8 relative overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://res.cloudinary.com/der2xk0cv/image/upload/v1774188899/2cadf30425f901a347c2d47bf80ae488_b8pldg.jpg" 
                alt="HVAC & MEP" 
                fill 
                className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-[#1A1A1A]/40"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="w-10 h-10 bg-[#A3E635] rounded-lg flex items-center justify-center shadow-lg">
                <Box className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white leading-tight drop-shadow-md">HVAC & MEP<br/>Contracting</h3>
              </div>
            </div>
          </div>

          {/* Wedding & Events - span 2 */}
          <div className="md:col-span-3 lg:col-span-2 bg-[#141414] border border-white/5 rounded-[16px] p-8 relative overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://res.cloudinary.com/der2xk0cv/image/upload/v1774189062/b8170bc9a44e40844d2397c70dc6761d_bdc1iv.jpg" 
                alt="Wedding & Events" 
                fill 
                className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-[#1A1A1A]/40"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/10">
                <PartyPopper className="w-5 h-5 text-[#A3E635]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white drop-shadow-md">Wedding & Events</h3>
              </div>
            </div>
          </div>

          {/* Healthcare & Clinics - span 2 */}
          <div className="md:col-span-3 lg:col-span-2 bg-[#141414] border border-white/5 rounded-[16px] p-8 relative overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://res.cloudinary.com/der2xk0cv/image/upload/v1774189159/79c775101066e05c134c9eb9d8485cf5_yxiu12.jpg" 
                alt="Healthcare & Clinics" 
                fill 
                className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-[#1A1A1A]/40"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="w-10 h-10 bg-[#A3E635] rounded-lg flex items-center justify-center shadow-lg">
                <BriefcaseMedical className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white drop-shadow-md">Healthcare & Clinics</h3>
              </div>
            </div>
          </div>

          {/* Furniture & Home Decor - span 2 (Accent) */}
          <div className="md:col-span-3 lg:col-span-2 bg-[#A3E635] rounded-[16px] p-8 relative overflow-hidden group">
            <div className="absolute inset-0 z-0 mix-blend-multiply opacity-60">
              <Image 
                src="https://res.cloudinary.com/der2xk0cv/image/upload/v1774189247/3b83a36b41180a75a11163e6d9d3e4ae_dwuxqy.jpg" 
                alt="Furniture & Home Decor" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale"
                unoptimized
              />
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="w-10 h-10 bg-black/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-black/10">
                <Sofa className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black drop-shadow-sm">Furniture & Home Decor</h3>
              </div>
            </div>
          </div>

          {/* Education & Coaching - span 2 */}
          <div className="md:col-span-6 lg:col-span-2 bg-[#1A1A1A] border border-white/5 rounded-[16px] p-8 relative overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://res.cloudinary.com/der2xk0cv/image/upload/v1774189436/videoframe_7220_wm3uv2.png" 
                alt="Education & Coaching" 
                fill 
                className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-[#1A1A1A]/40"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/10">
                <GraduationCap className="w-5 h-5 text-[#A3E635]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white drop-shadow-md">Education & Coaching</h3>
              </div>
            </div>
          </div>

          {/* B2B Manufacturing - span 4 (With Image bg) */}
          <div className="md:col-span-6 lg:col-span-4 bg-[#141414] border border-white/5 rounded-[16px] p-8 relative overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://res.cloudinary.com/der2xk0cv/image/upload/v1774189558/125dc1bb8e6eb530aabe8efa1dce3607_zpivcj.jpg" 
                alt="B2B Manufacturing" 
                fill 
                className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#141414]/90 to-transparent"></div>
            </div>
            <div className="relative z-10 flex border-0 flex-col justify-between h-full w-full sm:w-2/3">
              <div className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/10 mb-6 sm:mb-0">
                <Factory className="w-5 h-5 text-[#A3E635]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">B2B Manufacturing</h3>
                <p className="text-gray-300 text-sm leading-relaxed max-w-[280px]">
                  Optimizing supply chains and wholesale distribution networks for the digital age.
                </p>
              </div>
            </div>
          </div>

          {/* Tours and travel - span 3 */}
          <div className="md:col-span-3 lg:col-span-3 bg-[#1A1A1A] border border-white/5 rounded-[16px] p-8 relative overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://res.cloudinary.com/der2xk0cv/image/upload/v1774189671/cce468f1a3673579335ba9107dbe387c_thcl0t.avif" 
                alt="Tours and Travel" 
                fill 
                className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 to-[#1A1A1A]/40"></div>
            </div>
            <div className="relative z-10 flex h-full items-end sm:items-center">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 bg-[#A3E635] rounded-xl flex items-center justify-center shadow-lg">
                  <Plane className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white drop-shadow-md">Tours & Travel</h3>
              </div>
            </div>
          </div>

          {/* Professional Services - span 3 */}
          <div className="md:col-span-3 lg:col-span-3 bg-[#141414] border border-white/5 rounded-[16px] p-8 relative overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://res.cloudinary.com/der2xk0cv/image/upload/v1774189719/cff5e1cba8964bcaeaee87cf0eaecb59_avdq80.jpg" 
                alt="Professional Services" 
                fill 
                className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 to-[#1A1A1A]/40"></div>
            </div>
             <div className="relative z-10 flex h-full items-end sm:items-center">
               <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center">
                  <Handshake className="w-6 h-6 text-[#A3E635]" />
                </div>
                <h3 className="text-xl font-bold text-white drop-shadow-md">Professional Services</h3>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Text */}
        <div className="mt-20 text-center flex flex-col items-center">
          <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl">
            If your business sells something and needs qualified <span className="text-[#A3E635] font-medium border-b border-[#A3E635] pb-0.5">buyers</span> — we can build the system for it.
          </p>
          <div className="flex gap-1 mt-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#A3E635]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
