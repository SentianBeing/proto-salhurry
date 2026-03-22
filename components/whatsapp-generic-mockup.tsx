'use client';

import React, { useEffect } from 'react';

export default function WhatsAppGenericMockup() {
  useEffect(() => {
    function resetAndPlay() {
      const rows = document.querySelectorAll(
        '.wa-generic-row, .wa-generic-date, #wa-generic-link, #wa-generic-main, #wa-generic-typing, #wa-generic-reply'
      );

      rows.forEach((el) => {
        (el as HTMLElement).style.animation = 'none';
        // Trigger reflow
        void (el as HTMLElement).offsetHeight;
      });

      setTimeout(() => {
        const dateStamp = document.querySelector('.wa-generic-date') as HTMLElement;
        if (dateStamp) dateStamp.style.animation = 'waFadeIn 0.4s ease forwards 0.3s';

        const bubbleMain = document.getElementById('wa-generic-main');
        if (bubbleMain) bubbleMain.style.animation = 'waSlideUp 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards 0.7s';

        const sheetLink = document.getElementById('wa-generic-link');
        if (sheetLink) sheetLink.style.animation = 'waFadeIn 0.3s ease forwards 1.0s';

        const rs = document.querySelectorAll('.wa-generic-row');
        const delays = [1.2, 1.45, 1.7, 1.95, 2.2];
        rs.forEach((r, i) => {
          (r as HTMLElement).style.animation = `waRowIn 0.3s ease forwards ${delays[i]}s`;
        });

        const typingInd = document.getElementById('wa-generic-typing');
        if (typingInd) typingInd.style.animation = 'waFadeIn 0.3s ease forwards 3.2s';

        const dots = document.querySelectorAll('#wa-generic-typing .wa-dot');
        if (dots.length >= 3) {
          (dots[0] as HTMLElement).style.animation = 'waBounce 1.1s ease infinite 3.5s';
          (dots[1] as HTMLElement).style.animation = 'waBounce 1.1s ease infinite 3.65s';
          (dots[2] as HTMLElement).style.animation = 'waBounce 1.1s ease infinite 3.8s';
        }

        const reply = document.getElementById('wa-generic-reply');
        if (reply) reply.style.animation = 'waSlideUp 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards 4.6s';
      }, 50);
    }

    const interval = setInterval(resetAndPlay, 7500);
    // Initial play
    resetAndPlay();

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes waFadeIn { to { opacity: 1; transform: none; } }
        @keyframes waSlideUp { to { opacity: 1; transform: none; } }
        @keyframes waRowIn { to { opacity: 1; transform: none; } }
        @keyframes waBounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
        }

        .wa-generic-date { opacity: 0; transform: translateY(0); }
        #wa-generic-main { opacity: 0; transform: translateY(12px); }
        #wa-generic-link { opacity: 0; }
        .wa-generic-row { opacity: 0; transform: translateX(-6px); }
        #wa-generic-typing { opacity: 0; }
        #wa-generic-reply { opacity: 0; transform: translateY(8px); }
      `}} />
      <div className="w-full max-w-[360px] h-[600px] md:h-[720px] bg-[#111b21] rounded-[36px] border-2 border-[#2a3942] overflow-hidden relative shadow-[0_30px_80px_rgba(0,0,0,0.6)] mx-auto font-sans flex flex-col">
        {/* Header */}
        <div className="bg-[#1f2c34] p-3 md:p-4 flex items-center gap-3 border-b border-[#2a3942] z-10 shrink-0">
          <div className="w-10 h-10 bg-[#00a884] rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0 text-sm">
            SH
          </div>
          <div>
            <h3 className="text-[#e9edef] text-[15px] font-medium m-0 leading-snug">Project Core Sync 🚀</h3>
            <p className="text-[#8696a0] text-[12px] m-0 leading-snug">SalHurry Team, Client Founders · 6 members</p>
          </div>
        </div>

        {/* Chat Area */}
        <div 
          className="flex-1 overflow-hidden p-3 md:p-4 flex flex-col gap-2 md:gap-3 bg-[#0b141a]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23182229' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        >
          {/* Date */}
          <div className="wa-generic-date text-center mt-2 mb-2">
            <span className="bg-[#182229] text-[#8696a0] text-[10px] md:text-[11px] px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg inline-block font-medium">
              TODAY
            </span>
          </div>

          {/* Main message from SH */}
          <div 
            id="wa-generic-main" 
            className="self-end bg-[#005c4b] rounded-[10px] rounded-tr-[2px] p-2.5 md:p-3 max-w-[90%] md:max-w-[88%] shadow-sm"
          >
            <div className="text-[#00a884] text-[11px] md:text-[12px] font-semibold mb-1.5">
              ~ AswinLal (SalHurry)
            </div>

            <div id="wa-generic-link" className="bg-[#182229] rounded-md p-2 flex items-center gap-2 mb-2">
              <div className="w-7 h-7 bg-[#1557a7] rounded flex items-center justify-center text-[12px] shrink-0">
                📄
              </div>
              <div className="text-[#e9edef] text-[10px] md:text-[11px] leading-tight flex flex-col">
                <span className="font-medium truncate">Execution Tracking Board</span>
                <span className="text-[#8696a0] text-[9px] md:text-[10px]">notion.so · Live updates</span>
              </div>
            </div>

            <div className="text-[#e9edef] text-[12px] md:text-[14px] font-semibold mb-2.5 pb-2 border-b border-white/10 leading-snug">
              📢 DAILY SYNC & PROGRESS
            </div>

            <div className="wa-generic-row flex items-start gap-2 mb-1.5">
              <span className="text-[14px] shrink-0 mt-0.5">🗓️</span>
              <div className="flex flex-col">
                <div className="text-[#8696a0] text-[11px] md:text-[12px] leading-tight">Timeline Status</div>
                <div className="text-[#00e676] text-[12px] md:text-[13px] font-medium leading-tight">On Track (Sprint 2)</div>
              </div>
            </div>
            
            <div className="wa-generic-row flex items-start gap-2 mb-1.5">
              <span className="text-[14px] shrink-0 mt-0.5">✅</span>
              <div className="flex flex-col">
                <div className="text-[#8696a0] text-[11px] md:text-[12px] leading-tight">Completed Today</div>
                <div className="text-[#e9edef] text-[12px] md:text-[13px] font-medium leading-tight">UI wireframes locked</div>
              </div>
            </div>

            <div className="wa-generic-row flex items-start gap-2 mb-1.5">
              <span className="text-[14px] shrink-0 mt-0.5">⏳</span>
              <div className="flex flex-col">
                <div className="text-[#8696a0] text-[11px] md:text-[12px] leading-tight">In Progress</div>
                <div className="text-[#e9edef] text-[12px] md:text-[13px] font-medium leading-tight">Integration & API setup</div>
              </div>
            </div>

            <div className="wa-generic-row flex items-start gap-2 mb-1.5">
              <span className="text-[14px] shrink-0 mt-0.5">👀</span>
              <div className="flex flex-col">
                <div className="text-[#8696a0] text-[11px] md:text-[12px] leading-tight">Action Required</div>
                <div className="text-[#ffd740] text-[12px] md:text-[13px] font-semibold leading-tight">Need approval on assets</div>
              </div>
            </div>

            <div className="text-right text-[#8696a0] text-[9px] md:text-[10px] mt-1.5 flex items-center justify-end gap-1">
              09:30 AM <span className="text-[#53bdeb] text-[11px] md:text-[12px]">✓✓</span>
            </div>
          </div>

          {/* Typing Indicator */}
          <div 
            id="wa-generic-typing" 
            className="self-start bg-[#1f2c34] rounded-[18px] p-2.5 px-3.5 flex gap-1 items-center max-w-[70px] mt-1"
          >
            <div className="wa-dot w-1.5 h-1.5 rounded-full bg-[#8696a0]"></div>
            <div className="wa-dot w-1.5 h-1.5 rounded-full bg-[#8696a0]"></div>
            <div className="wa-dot w-1.5 h-1.5 rounded-full bg-[#8696a0]"></div>
          </div>

          {/* Reply Message */}
          <div 
            id="wa-generic-reply" 
            className="self-start bg-[#1f2c34] rounded-[10px] rounded-tl-[2px] p-2.5 md:p-3 max-w-[85%] md:max-w-[80%] shadow-sm mt-1"
          >
            <div className="text-[#f472b6] text-[11px] md:text-[12px] font-semibold mb-1">
              ~ Client Partner
            </div>
            <div className="text-[#e9edef] text-[12px] md:text-[13px] leading-relaxed">
              Awesome update. Reviewing the assets right now, looks very solid! 🤝
            </div>
            <div className="text-right text-[#8696a0] text-[9px] md:text-[10px] mt-1 flex items-center justify-end gap-1">
              09:34 AM <span className="text-[#8696a0] text-[11px] md:text-[12px]">✓✓</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
