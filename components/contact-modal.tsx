'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Upload, Loader2, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[32px] shadow-2xl overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            <div className="p-8 sm:p-10">
              {isSuccess ? (
                <div className="py-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-[#A3E635]/20 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-[#A3E635]" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank you!</h2>
                  <p className="text-gray-500">We will respond within 24 hours.</p>
                  <button
                    onClick={onClose}
                    className="mt-8 px-8 py-3 bg-black text-white rounded-full font-bold text-sm hover:bg-gray-800 transition-all"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Let&apos;s Build Something Great</h2>
                    <p className="text-gray-500 text-sm">Fill out the form below and we&apos;ll get back to you shortly.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1.5 ml-1">Full Name *</label>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:outline-none focus:border-[#A3E635] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1.5 ml-1">Phone Number *</label>
                      <input
                        required
                        name="phone"
                        type="tel"
                        placeholder="+91 00000 00000"
                        className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:outline-none focus:border-[#A3E635] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1.5 ml-1">Project Type *</label>
                      <select
                        required
                        name="projectType"
                        className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:outline-none focus:border-[#A3E635] transition-colors appearance-none"
                      >
                        <option value="">Select a service</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Branding">Branding</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Ai Video Production">Ai Video Production</option>
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
                        className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:outline-none focus:border-[#A3E635] transition-colors resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1.5 ml-1">Attachment (PDF, DOC, DOCX - Max 10MB)</label>
                      <div 
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full px-5 py-3 bg-gray-50 border border-dashed border-gray-200 rounded-2xl text-sm cursor-pointer hover:border-[#A3E635] transition-colors flex items-center justify-between"
                      >
                        <span className="text-gray-400 truncate max-w-[200px]">
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
                      className="w-full py-4 bg-black text-white rounded-full font-bold text-sm hover:bg-gray-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                    >
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
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
