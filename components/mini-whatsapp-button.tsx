'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function MiniWhatsappButton() {
  const pathname = usePathname();
  const [showButton, setShowButton] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [bubbleDismissed, setBubbleDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      // Show WhatsApp button midway (40%)
      if (scrollY > vh * 0.4) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }

      // Show typing text bubble further down (60%)
      if (scrollY > vh * 0.6) {
        setShowBubble(true);
      } else {
        setShowBubble(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle typing indicator delay
  useEffect(() => {
    if (showBubble && !bubbleDismissed) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setIsTyping(false);
      }, 1100);
      return () => clearTimeout(timer);
    }
  }, [showBubble, bubbleDismissed]);

  // Hide on all blog pages (/blog, /blog/*)
  if (pathname && pathname.startsWith('/blog')) {
    return null;
  }

  return (
    <AnimatePresence>
      {showButton && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex items-center gap-2.5">
          {/* Chat Tooltip Bubble with Typing Animation */}
          <AnimatePresence>
            {showBubble && !bubbleDismissed && (
              <motion.div
                initial={{ opacity: 0, x: 15, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 15, scale: 0.9 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-white text-black px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-[0_12px_35px_rgba(0,0,0,0.18)] border border-gray-200/90 flex items-center text-xs font-bold font-sans"
              >
                {/* Speech Bubble Arrow */}
                <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white border-r border-t border-gray-200/90 rotate-45" />

                {isTyping ? (
                  <div className="flex items-center gap-1.5 py-0.5 px-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <a
                      href="https://wa.me/919400478845"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-[#25D366] transition-colors whitespace-nowrap"
                    >
                      Wanna chat?
                    </a>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setBubbleDismissed(true);
                      }}
                      className="p-0.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-black transition-colors ml-0.5"
                      aria-label="Close message bubble"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Icon Button */}
          <motion.a
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            href="https://wa.me/919400478845"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.5)] hover:scale-110 hover:shadow-[0_14px_35px_rgba(37,211,102,0.7)] transition-all duration-300 group border border-white/20 shrink-0"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 fill-current group-hover:rotate-12 transition-transform duration-300"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.149 4.194 4.195-1.101z" />
            </svg>
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
