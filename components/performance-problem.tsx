import React from 'react';
import { Target, Activity, GitBranch } from 'lucide-react';

export default function PerformanceProblem() {
  const painPoints = [
    {
      icon: Target,
      title: "Wrong audiences",
      desc: "Ads that reach people who will never buy.",
    },
    {
      icon: Activity,
      title: "No conversion tracking",
      desc: "Money spent with no data to learn from.",
    },
    {
      icon: GitBranch,
      title: "No funnel",
      desc: "Clicks arrive, bounce, and disappear.",
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F9FAFB] border-t border-b border-gray-100 relative overflow-hidden">
      {/* Decorative element for depth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A3E635] opacity-[0.03] rounded-full blur-[100px] pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Text Column */}
          <div className="flex-1 lg:sticky lg:top-32 relative z-10">
            <span className="inline-block px-4 py-1.5 border border-[#1A1A1A]/10 text-[#1A1A1A] font-semibold rounded-full text-[10px] tracking-[0.2em] uppercase mb-8 bg-white shadow-sm">
              Why most businesses waste ad spend
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#1A1A1A] leading-[1.1] tracking-tight mb-8">
              You're Running Ads.<br />
              <span className="text-gray-400 font-light">But Are You Running a System?</span>
            </h2>
            
            <div className="space-y-6 text-[15px] md:text-[17px] text-gray-600 leading-[1.8] font-light">
              <p>
                Most businesses in Kerala launch ads the same way — a boosted Instagram post here, a Google campaign there, no funnel, no tracking, no consistency. The result is spend without return.
              </p>
              <p>
                Performance marketing isn't about running ads. It's about engineering a full system — from audience targeting and creative strategy to funnel architecture and conversion tracking — so that every rupee you spend works predictably toward a business outcome.
              </p>
            </div>
          </div>

          {/* Right Cards Column */}
          <div className="flex-1 w-full relative z-10">
            <div className="grid gap-6">
              {painPoints.map((point, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.05)] hover:border-[#A3E635]/50 transition-all hover:-translate-y-1 group"
                >
                  <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                    <div className="w-14 h-14 shrink-0 rounded-[20px] bg-[#1A1A1A] flex items-center justify-center text-white group-hover:bg-[#A3E635] group-hover:text-black transition-colors shadow-md">
                      <point.icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1A1A1A] mb-2 group-hover:text-[#A3E635] transition-colors">
                        {point.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
