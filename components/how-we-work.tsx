import React from 'react';
import { MessageCircle, CalendarClock, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import WhatsAppMockup from '@/components/whatsapp-mockup';

export default function HowWeWork() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#060606] relative overflow-hidden border-t border-white/5">
      {/* Decorative Blur */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#A3E635] opacity-[0.03] rounded-full blur-[120px] pointer-events-none transform -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 border border-[#A3E635]/20 text-[#A3E635] font-semibold rounded-full text-[10px] tracking-[0.2em] uppercase mb-8 shadow-sm">
            How we work with you
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            No Black Boxes.<br />
            <span className="font-serif italic font-normal text-gray-400">No Radio Silence.</span><br />
            <span className="text-[#A3E635]">Just Full Visibility.</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-400 leading-[1.8] font-light">
            Most agencies send you a report at the end of the month and disappear in between. You're left wondering where your money went, whether the campaign is working, and whether anyone is actually watching. We work differently — and we've built a communication system around it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Block 1: WhatsApp */}
          <div className="bg-[#1A1A1A] rounded-[40px] p-8 md:p-12 border border-white/5 hover:border-[#A3E635]/30 transition-all flex flex-col h-full group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#A3E635] opacity-[0.05] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 group-hover:opacity-[0.1] transition-opacity"></div>
            
            <div className="w-14 h-14 bg-[#A3E635]/10 rounded-2xl flex items-center justify-center text-[#A3E635] mb-8">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Your campaign, in your pocket.<br/>Every day.</h3>
            <p className="text-gray-400 text-[15px] leading-[1.8] mb-8 flex-grow">
              From day one, we create a dedicated WhatsApp group — just you, your team, and ours. Every single day you'll see current ad spend, running balance, active campaigns status, creative changes, and any anomalies flagged immediately. You never have to chase us for an update. By the time you've had your morning chai, the numbers are already in your phone.
            </p>
            
            {/* WhatsApp Mockup graphic */}
            <div className="mt-8 scale-[0.85] sm:scale-90 md:scale-100 origin-top">
              <WhatsAppMockup />
            </div>
          </div>

          <div className="flex flex-col gap-12 lg:gap-16">
            
            {/* Block 2: Meetings */}
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <div className="w-16 h-16 shrink-0 bg-white/5 rounded-[24px] flex items-center justify-center text-white border border-white/10 shadow-lg">
                <CalendarClock className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">We call the meeting. You don't have to chase one.</h3>
                <p className="text-gray-400 leading-[1.8] text-[15px]">
                  If something isn't working — conversions are low, lead quality is dropping, a campaign needs a strategic rethink — we don't wait for your monthly review. We arrange a call or meeting immediately. No agenda templates, no delayed responses. We get on a call, walk you through what the data is telling us, and agree on the next move together.
                  <br/><br/>
                  Regular check-ins are scheduled at natural milestones: end of warmup phase, first 30 days, and monthly thereafter. But the door is always open.
                </p>
              </div>
            </div>

            {/* Block 3: Commitment */}
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <div className="w-16 h-16 shrink-0 bg-[#A3E635] rounded-[24px] flex items-center justify-center text-black shadow-[0_10px_30px_rgba(163,230,53,0.3)]">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">We don't keep your money if your campaign doesn't deliver.</h3>
                <p className="text-gray-400 leading-[1.8] text-[15px] mb-6">
                  Every campaign has a warmup period — typically 30–45 days — where the algorithm learns, creatives are tested, and audiences are refined. This is standard across every platform and every agency in the world.
                  <br/><br/>
                  But if your campaign completes the warmup phase and still isn't generating results, we don't collect our agency fee. Simple as that. We're interested in long-term partnerships — and those only happen when you actually see ROI.
                </p>
                
                {/* Small Print Note */}
                <div className="bg-[#1A1A1A] rounded-[24px] p-6 border border-white/5 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#A3E635]"></div>
                  <p className="text-[13px] text-gray-400 leading-[1.7]">
                    <strong className="text-white block mb-2">Our Ask:</strong>
                    Tell us what's happening on your side. When a lead comes in, let us know if it converted. If it was bad quality, tell us why. We can only optimise what we can measure — and conversions happen in your sales process, not just in our ad account.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Block 4: Availability */}
        <div className="bg-[#1A1A1A] rounded-[40px] p-10 md:p-14 border border-white/5 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#A3E635] opacity-[0.03] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-white mx-auto mb-8 border border-white/10">
            <Clock className="w-7 h-7" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-6">Real people. Real hours. Real responses.</h3>
          <p className="text-gray-400 text-[16px] leading-[1.8] max-w-3xl mx-auto mb-12">
            We're available Monday through Sunday, 8 AM to 8 PM. That includes Sundays — because campaigns don't pause for weekends, and neither do we. If something needs attention on a Saturday afternoon, it gets attention on a Saturday afternoon.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-[#0A0A0A] p-6 rounded-[24px] border border-white/5 flex flex-col items-center justify-center text-center">
              <span className="text-white font-bold mb-2 block">Monday – Friday</span>
              <span className="text-[#A3E635] text-sm font-semibold mb-2">8:00 AM – 8:00 PM IST</span>
              <span className="text-gray-500 text-xs">Full team available</span>
            </div>
            <div className="bg-[#0A0A0A] p-6 rounded-[24px] border border-white/5 flex flex-col items-center justify-center text-center">
              <span className="text-white font-bold mb-2 block">Saturday</span>
              <span className="text-[#A3E635] text-sm font-semibold mb-2">8:00 AM – 8:00 PM IST</span>
              <span className="text-gray-500 text-xs">Monitoring & response</span>
            </div>
            <div className="bg-[#0A0A0A] p-6 rounded-[24px] border border-[#A3E635]/20 shadow-[0_0_20px_rgba(163,230,53,0.05)] flex flex-col items-center justify-center text-center relative">
              <div className="absolute top-3 right-3 flex space-x-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A3E635] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A3E635]"></span>
                </span>
              </div>
              <span className="text-white font-bold mb-2 block">Sunday</span>
              <span className="text-[#A3E635] text-sm font-semibold mb-2">8:00 AM – 8:00 PM IST</span>
              <span className="text-gray-500 text-xs">Yes, even Sunday</span>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm">
            Reach us on WhatsApp, call, or email. Average response time: <strong className="text-white">under 2 hours</strong> during working hours.
          </p>
        </div>

        {/* Section Closing Line */}
        <div className="mt-20 text-center max-w-4xl mx-auto px-6">
          <p className="text-[20px] md:text-[24px] font-medium text-white italic leading-relaxed">
            "We treat your ad budget the way we'd treat our own — with daily attention, full transparency, and zero tolerance for waste."
          </p>
        </div>
        
      </div>
    </section>
  );
}
