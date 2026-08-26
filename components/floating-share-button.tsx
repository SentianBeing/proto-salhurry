'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Share2, Check } from 'lucide-react';

export default function FloatingShareButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = async () => {
    const url = window.location.href;
    const title = document.title;

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
        return;
      } catch (err) {
        // User cancelled or share failed, fallback to clipboard
      }
    }

    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch (e) {
        alert(`Copy this URL: ${url}`);
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <button
            onClick={handleShare}
            className="flex items-center gap-2 bg-white text-gray-800 border border-gray-200 hover:border-gray-400 p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            title="Share this article"
            aria-label="Share article"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-emerald-600 hidden sm:inline">
                  Link Copied!
                </span>
              </>
            ) : (
              <>
                <Share2 className="w-5 h-5 text-gray-700 group-hover:text-black transition-colors shrink-0" strokeWidth={1.75} />
                <span className="text-xs font-semibold text-gray-700 group-hover:text-black transition-colors hidden sm:inline">
                  Share Article
                </span>
              </>
            )}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
