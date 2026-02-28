'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useContactModal } from '@/context/contact-modal-context';

const servicesList = [
  { name: 'Digital Marketing', href: '/services/digital-marketing' },
  { name: 'Ai Video Production', href: '#' },
  { name: 'Web Development', href: '/services/web-development' },
  { name: 'Custom ERP Solutions', href: '#' }
];

const featuredServices = [
  {
    title: 'Short Form Video Marketing',
    description: 'Engage your audience with viral-ready short form content tailored for social growth.',
    image: 'https://res.cloudinary.com/der2xk0cv/image/upload/v1772209780/4e1e77f2d32b8838af32d9dd56e7b7c3_sghypy.jpg'
  },
  {
    title: 'For Local Business',
    description: 'Boost your local presence with targeted strategies that drive foot traffic and sales.',
    image: 'https://picsum.photos/seed/localbiz/600/400'
  }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const { openModal } = useContactModal();

  return (
    <nav className="relative z-50 flex items-center justify-between py-6 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-2">
        <div className="relative w-32 h-10">
          <Image 
            src="https://res.cloudinary.com/der2xk0cv/image/upload/v1768468698/eOOLuJEvTLWEYPDnDVB5EtBMEw_b1c3a0.svg" 
            alt="Salhurry Logo" 
            fill 
            className="object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        <Link href="/" className="text-white hover:text-[#A3E635] transition-colors">Home</Link>
        
        {/* Services Dropdown Trigger */}
        <div 
          className="relative group py-2"
          onMouseEnter={() => setIsServicesHovered(true)}
          onMouseLeave={() => setIsServicesHovered(false)}
        >
          <button className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
            Services <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesHovered ? 'rotate-180' : ''}`} />
          </button>

          {/* Mega Dropdown */}
          <AnimatePresence>
            {isServicesHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white rounded-[32px] shadow-2xl border border-gray-100 p-10 overflow-hidden"
              >
                <div className="grid grid-cols-[250px_1fr] gap-12">
                  {/* Left Side: Services List */}
                  <div className="border-r border-gray-100 pr-12">
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-8">Services</p>
                    <div className="flex flex-col gap-6">
                      {servicesList.map((service) => (
                        <Link 
                          key={service.name} 
                          href={service.href} 
                          className="text-lg font-bold text-gray-800 hover:text-[#A3E635] transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Right Side: Featured Content */}
                  <div className="grid grid-cols-2 gap-8">
                    {featuredServices.map((item, idx) => (
                      <div key={idx} className="group/item cursor-pointer">
                        <div className="relative h-40 rounded-2xl overflow-hidden mb-4">
                          <Image 
                            src={item.image} 
                            alt={item.title} 
                            fill 
                            className="object-cover transition-transform duration-500 group-hover/item:scale-110"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <h4 className="font-bold text-sm mb-2 group-hover/item:text-[#A3E635] transition-colors">{item.title}</h4>
                        <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link href="#" className="hover:text-white transition-colors">Project</Link>
        <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={openModal}
          className="hidden md:block px-6 py-2 border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all"
        >
          Contact Us
        </button>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-6 md:hidden shadow-xl"
          >
            <Link href="/" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <div className="flex flex-col gap-4">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Services</p>
              {servicesList.map(s => (
                <Link key={s.name} href={s.href} className="text-lg font-medium text-gray-600 pl-4" onClick={() => setIsMenuOpen(false)}>{s.name}</Link>
              ))}
            </div>
            <Link href="#" className="text-lg font-medium text-gray-600" onClick={() => setIsMenuOpen(false)}>Project</Link>
            <Link href="/about" className="text-lg font-medium text-gray-600" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                openModal();
              }}
              className="w-full py-3 bg-black text-white rounded-full font-medium"
            >
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
