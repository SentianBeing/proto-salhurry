import React from 'react';
import Image from 'next/image';
import { Bookmark, Heart, Send, ChevronRight } from 'lucide-react';

export default function SocialMediaFlyers() {
  // Ultra-precise modern UI folder bezier path calculation
  // Total width: 600, Total height: 420. Tab width: 260px (43.3%)
  // Drop starts at 240px, straight diagonal drop slope = 1.5, ends at 340px (height 80px)
  const pathData = "M 40 0 H 260 C 275 0, 280 5, 290 20 L 310 50 C 320 65, 325 80, 340 80 H 560 C 582 80, 600 98, 600 120 V 380 C 600 402, 582 420, 560 420 H 40 C 18 420, 0 402, 0 380 V 40 C 0 18, 18 0, 40 0 Z";

  const maskSvg = `<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg"><path d="${pathData}" fill="black"/></svg>`;
  const maskUrl = `data:image/svg+xml;utf8,${encodeURIComponent(maskSvg)}`;

  return (
    <section className="relative w-full bg-[#0A0A0A] overflow-hidden py-32 flex flex-col justify-center border-t border-white/5">
      {/* Background White Arc */}
      <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[200vw] h-[200vw] sm:w-[150vw] sm:h-[150vw] md:w-[120vw] md:h-[120vw] lg:w-[100vw] lg:h-[100vw] bg-[#F7FCF8] rounded-[50%] z-0 pointer-events-none drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)]">
        {/* Wireframe grids */}
        <div className="absolute inset-0 rounded-[50%] border-[2px] border-[#E1EDE4] scale-[0.6]"></div>
        <div className="absolute inset-0 rounded-[50%] border border-[#E1EDE4] scale-[0.8]"></div>

        {/* subtle radial gradient for inner depth */}
        <div className="absolute inset-0 rounded-[50%] bg-gradient-to-b from-transparent to-[#F7FCF8]/50 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 flex flex-col items-center">
        {/* Header Typography */}
        <div className="text-center mb-10 md:mb-16 relative z-30">
          <h2 className="text-5xl sm:text-7xl md:text-[7rem] font-bold text-[#111111] tracking-tighter leading-none mb-2 drop-shadow-sm">
            Social Media
          </h2>
          <h2 className="text-5xl sm:text-7xl md:text-[7rem] font-serif italic text-[#1C4122] leading-none mb-4 md:pl-24 drop-shadow-sm">
            Flyer Designs
          </h2>
        </div>

        {/* Central Graphic Container */}
        <div className="relative w-full max-w-[800px] h-[350px] sm:h-[450px] md:h-[600px] flex justify-center items-end mt-12 mb-12">

          {/* Cards behind folder - Fan of 5 Flyers */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[80%] flex justify-center perspective-1000 z-0">

            {/* 1. Far Left Card (Black, Red Glow) */}
            <div className="absolute top-[18%] w-[120px] sm:w-[160px] md:w-[200px] aspect-[4/5] bg-[#0A0A0A] rounded-2xl md:rounded-3xl shadow-xl -rotate-[22deg] -translate-x-[140px] sm:-translate-x-[200px] md:-translate-x-[260px] translate-y-[30px] sm:translate-y-[50px] md:translate-y-[70px] overflow-hidden border border-[#222] p-4 text-white transition-all hover:-translate-y-4 hover:-rotate-[20deg] duration-500 z-0">
              <div className="flex items-center gap-1.5 mb-4 text-[9px] md:text-xs text-white/50">
                <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm"><ChevronRight className="w-2.5 h-2.5 text-white" /></div> EkiePay
              </div>
              <h3 className="text-sm md:text-xl font-medium leading-tight mb-2">Invoices to China?</h3>
              <p className="text-xs md:text-sm text-white/40 italic font-serif">Consider it done!</p>
              <div className="absolute bottom-[-30%] right-[-30%] w-32 h-32 bg-red-600/30 blur-2xl rounded-full"></div>
            </div>

            {/* 2. Mid Left Card (Green Gradient) */}
            <div className="absolute top-[10%] w-[130px] sm:w-[170px] md:w-[210px] aspect-[4/5] bg-gradient-to-b from-[#7CB388] to-[#D5E8D9] rounded-2xl md:rounded-3xl shadow-2xl -rotate-[10deg] -translate-x-[70px] sm:-translate-x-[100px] md:-translate-x-[130px] translate-y-[15px] sm:translate-y-[20px] md:translate-y-[30px] overflow-hidden border border-white/40 p-4 transition-transform hover:-translate-y-4 hover:-rotate-[8deg] duration-500 z-10">
              <div className="flex items-center justify-center gap-1.5 mb-4 text-[9px] md:text-xs text-[#1C4122] font-semibold">
                <div className="w-4 h-4 rounded-full bg-[#1C4122]/10 flex items-center justify-center backdrop-blur-sm"><ChevronRight className="w-2.5 h-2.5 text-[#1C4122]" /></div> EkiePay
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-[#1C4122] text-center leading-tight">Kickstart your<br /><span className="text-white drop-shadow-sm">Holiday!</span></h3>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[100px] bg-white/40 rounded-t-full backdrop-blur-md border border-white/60 flex justify-center pt-3 shadow-[0_-10px_20px_rgba(255,255,255,0.2)]"></div>
            </div>

            {/* 3. Center Card (White Split App) */}
            <div className="absolute top-[5%] w-[140px] sm:w-[180px] md:w-[220px] aspect-[4/5] bg-[#EEF5F0] rounded-2xl md:rounded-3xl shadow-2xl rotate-0 translate-x-0 translate-y-[10px] overflow-hidden border border-white/50 p-2 sm:p-2.5 transition-transform hover:-translate-y-6 duration-500 z-30">
              <div className="w-full h-full bg-white rounded-xl md:rounded-2xl flex flex-col p-3 shadow-inner border border-gray-100/50">
                <div className="flex items-center justify-center gap-1.5 mb-3 text-[9px] md:text-[10px] text-[#1C4122] font-semibold">
                  <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center"><ChevronRight className="w-2.5 h-2.5 text-green-700" /></div> EkiePay
                </div>
                <div className="flex gap-2 h-[calc(100%-30px)]">
                  <div className="flex-1 bg-[#1A1A1A] rounded-xl md:rounded-2xl p-2 flex flex-col items-center justify-center text-center shadow-md">
                    <span className="text-white text-[8px] md:text-[10px] font-semibold mb-2">Stay<br />Powered</span>
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-sm">⚡</div>
                  </div>
                  <div className="flex-1 bg-[#E1EFE4] rounded-xl md:rounded-2xl p-2 flex flex-col items-center justify-center text-center shadow-sm border border-white/50">
                    <span className="text-[#1A1A1A] text-[8px] md:text-[10px] font-semibold mb-2 leading-[1.1]">Stay<br />Hydrated</span>
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-[#1C4122] rounded-full shadow-inner opacity-90"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Mid Right Card (App UI Dashboard) */}
            <div className="absolute top-[10%] w-[130px] sm:w-[170px] md:w-[210px] aspect-[4/5] bg-gradient-to-b from-white to-gray-50 rounded-2xl md:rounded-3xl shadow-2xl rotate-[10deg] translate-x-[70px] sm:translate-x-[100px] md:translate-x-[130px] translate-y-[15px] sm:translate-y-[20px] md:translate-y-[30px] overflow-hidden border border-gray-200/60 p-2.5 sm:p-3 transition-transform hover:-translate-y-4 hover:rotate-[8deg] duration-500 z-20">
              <div className="w-full h-full border border-gray-100 rounded-xl md:rounded-2xl bg-white shadow-sm flex flex-col pt-3 px-2 md:px-3 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-8 bg-green-50/50"></div>
                <div className="flex gap-2 items-center mb-3 relative z-10 mt-1">
                  <div className="w-6 h-6 rounded bg-green-100 flex-shrink-0"></div>
                  <div className="h-2 w-16 rounded bg-gray-200"></div>
                </div>
                <div className="w-full h-12 md:h-16 rounded-lg bg-green-50/50 mb-2 border border-green-100"></div>
                <div className="w-full h-6 rounded bg-gray-50 border border-gray-100 mb-1.5 opacity-70"></div>
                <div className="w-full flex-1 rounded bg-gray-50 border border-gray-100 opacity-70"></div>
              </div>
            </div>

            {/* 5. Far Right Card (Solid Green) */}
            <div className="absolute top-[18%] w-[120px] sm:w-[160px] md:w-[200px] aspect-[4/5] bg-[#316943] rounded-2xl md:rounded-3xl shadow-xl rotate-[22deg] translate-x-[140px] sm:translate-x-[200px] md:translate-x-[260px] translate-y-[30px] sm:translate-y-[50px] md:translate-y-[70px] overflow-hidden border border-white/20 p-4 transition-transform hover:-translate-y-4 hover:rotate-[20deg] duration-500 z-0 flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-[9px] md:text-xs text-white opacity-80">
                <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm"><ChevronRight className="w-2.5 h-2.5" /></div> EkiePay
              </div>
              <h3 className="text-base md:text-xl font-serif italic text-white leading-tight mb-2">One Platform<br /><span className="text-[#96D2A4] sans-serif font-semibold not-italic text-xs md:text-sm tracking-tight">Many solutions</span></h3>
              <div className="w-full h-16 sm:h-20 bg-white/10 rounded-xl backdrop-blur-md border border-white/30 relative overflow-hidden shadow-inner"></div>
            </div>

          </div>

          {/* Frosted Folder Foreground */}
          <div className="absolute bottom-0 w-[300px] sm:w-[420px] md:w-[600px] aspect-[10/7] z-30 transition-transform hover:-translate-y-2 duration-700 select-none">
            {/* The masked frosted backdrop - Liquid Glass Effect */}
            <div
              className="w-full h-full absolute inset-0 text-black overflow-hidden backdrop-blur-3xl bg-white/10"
              style={{
                WebkitMaskImage: `url('${maskUrl}')`,
                maskImage: `url('${maskUrl}')`,
                WebkitMaskSize: '100% 100%',
                maskSize: '100% 100%',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat'
              }}
            >
              {/* Liquid Glass Base Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent"></div>

              {/* Glass reflections and caustic highlights */}
              <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/40 to-transparent mix-blend-overlay pointer-events-none"></div>
              <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#A3E635]/20 blur-[40px] rounded-full mix-blend-screen pointer-events-none"></div>
            </div>

            {/* The glowing borders perfectly tracing the exact mathematical path */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen" viewBox="0 0 600 420" preserveAspectRatio="none">
              {/* Outer sharp glass edge */}
              <path d={pathData} fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              {/* Inner fuzzy glowing edge reproducing the bevel */}
              <path d={pathData} fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="6" filter="blur(3px)" vectorEffect="non-scaling-stroke" />
            </svg>

            {/* Drop shadow simulating the folder depth */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_-5px_25px_rgba(0,0,0,0.5)] z-[-1]" viewBox="0 0 600 420" preserveAspectRatio="none">
              <path d={pathData} fill="rgba(0,0,0,0.2)" />
            </svg>

            {/* Foreground Logo & Icons on Folder Bottom */}
            <div className="absolute bottom-6 sm:bottom-10 md:bottom-12 left-6 sm:left-10 md:left-12 right-6 sm:right-10 md:right-12 flex justify-between items-center z-40">
              {/* Logo */}
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 rounded-full border-[2px] md:border-[2.5px] border-black flex items-center justify-center opacity-90 shadow-sm">
                  <ChevronRight className="w-3 h-3 md:w-5 md:h-5 text-black ml-0.5" strokeWidth={3} />
                </div>
                <span className="font-semibold text-lg md:text-2xl tracking-normal text-black">Ekiepay</span>
              </div>

              {/* Status Icons Pill */}
              <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4 bg-white px-3.5 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),0_10px_20px_rgba(0,0,0,0.15)] border border-black/5">
                <Bookmark className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#96A69B]" fill="currentColor" />
                <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-black" fill="currentColor" />
                <div className="rotate-[-45deg] pb-0.5"><Send className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-black" fill="currentColor" /></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Thumbnail Gallery */}
        <div className="relative z-10 w-full max-w-[800px] flex justify-center gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-24">
          {[
            { url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=400&auto=format&fit=crop", alt: "Professional presenting" },
            { url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=400&auto=format&fit=crop", alt: "Design elements layout" },
            { url: "https://images.unsplash.com/photo-1573165231977-3f0e27806045?q=80&w=400&auto=format&fit=crop", alt: "Team celebration" },
            { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=400&auto=format&fit=crop", alt: "Business portrait" }
          ].map((item, i) => (
            <div key={i} className="group relative w-16 h-16 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-2xl md:rounded-[32px] overflow-hidden border border-white/5 shadow-2xl cursor-pointer">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-500 z-10 mix-blend-multiply"></div>
              <Image
                unoptimized
                src={item.url}
                alt={item.alt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
