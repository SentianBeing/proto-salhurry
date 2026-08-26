'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Upload, Loader2, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: string | null;
}

export default function ContactModal({ isOpen, onClose, defaultPackage }: ContactModalProps) {
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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-lg my-auto p-[2px] rounded-[30px] sm:rounded-[34px] shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col"
          >
            {/* Beaming Border Effect */}
            <div className="absolute inset-[-100%] z-0 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#A3E635_0%,transparent_15%,transparent_85%,#A3E635_100%)]" />

            {/* Inner Modal Body with Scrollable Area */}
            <div className="relative w-full h-full bg-white rounded-[28px] sm:rounded-[32px] z-10 flex flex-col overflow-hidden">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-30"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
              </button>

              <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(92vh-4px)] scrollbar-thin scrollbar-thumb-gray-300">
                {isSuccess ? (
                  <div className="py-8 sm:py-12 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-16 h-16 sm:w-20 sm:h-20 bg-[#A3E635]/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                    >
                      <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#A3E635]" />
                    </motion.div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Thank you!</h2>
                    <p className="text-gray-500 text-sm">We will respond within 24 hours.</p>
                    <button
                      onClick={onClose}
                      className="mt-6 sm:mt-8 px-8 py-3 bg-black text-white rounded-full font-bold text-sm hover:bg-gray-800 transition-all"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6 pr-8">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight mb-1">
                        {defaultPackage ? `Get Started: ${defaultPackage}` : "Let's Build Something Great"}
                      </h2>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        {defaultPackage
                          ? `Selected tier: ${defaultPackage}. Fill in details to get started!`
                          : "Fill out the form below and we'll get back to you shortly."}
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3.5">
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1 ml-1">
                          Full Name *
                        </label>
                        <input
                          required
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          className="w-full px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#A3E635] text-gray-900 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1 ml-1">
                          Email Address *
                        </label>
                        <input
                          required
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          className="w-full px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#A3E635] text-gray-900 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1 ml-1">
                          Phone Number *
                        </label>
                        <input
                          required
                          name="phone"
                          type="tel"
                          placeholder="+91 00000 00000"
                          className="w-full px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#A3E635] text-gray-900 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1 ml-1">
                          Project Type *
                        </label>
                        <select
                          required
                          name="projectType"
                          defaultValue={defaultPackage ? "Digital Marketing" : ""}
                          className="w-full px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#A3E635] text-gray-900 transition-colors appearance-none"
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
                        <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1 ml-1">
                          Message (Optional)
                        </label>
                        <textarea
                          name="message"
                          rows={2}
                          defaultValue={
                            defaultPackage
                              ? `Hi SalHurry team, I am interested in getting started with the ${defaultPackage}. Please send over the onboarding steps and proposal.`
                              : ""
                          }
                          placeholder="Tell us about your project..."
                          className="w-full px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#A3E635] text-gray-900 transition-colors resize-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1 ml-1">
                          Attachment (PDF, DOC, DOCX - Max 10MB)
                        </label>
                        <div
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full px-4 py-2.5 sm:py-3 bg-gray-50 border border-dashed border-gray-300 rounded-xl text-sm cursor-pointer hover:border-[#A3E635] transition-colors flex items-center justify-between"
                        >
                          <span className="text-gray-500 truncate max-w-[200px]">
                            {fileName || 'Upload project brief...'}
                          </span>
                          <Upload className="w-4 h-4 text-gray-400" />
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
                        <p className="text-red-500 text-xs mt-2 ml-1">{error}</p>
                      )}

                      <button
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full py-3.5 sm:py-4 bg-black text-white rounded-full font-bold text-sm hover:bg-gray-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-3 relative overflow-hidden group shadow-lg"
                      >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] animate-[shimmer_2s_infinite] group-hover:animate-none" />
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
