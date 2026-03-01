'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 block w-fit">
              <div className="relative w-32 h-10">
                <Image
                  src="https://res.cloudinary.com/der2xk0cv/image/upload/v1772211250/salhurry-logo_encw7m.svg"
                  alt="Salhurry Logo"
                  fill
                  className="object-contain brightness-0 invert"
                  referrerPolicy="no-referrer"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              We are digital magicians, turning ideas into compelling designs.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm">Pages</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-[#A3E635] transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-[#A3E635] transition-colors">Service</Link></li>
              <li><Link href="/about" className="hover:text-[#A3E635] transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-[#A3E635] transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-[#A3E635] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm">Other links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/careers" className="hover:text-[#A3E635] transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-[#A3E635] transition-colors">Parent Company</Link></li>
              <li><Link href="/legal" className="hover:text-[#A3E635] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/legal" className="hover:text-[#A3E635] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm">Office</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                Salhurry, JS Arcade,<br />
                MC Rd, Kilimanoor, Trivandrum
              </li>
              <li>Phone: +91 62826 87001, +91 9746133532</li>
              <li>salhurry@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest">
          <p>© 2026 SALHURRY, a venture of Divegrid PVT LTD</p>
          <div className="flex gap-8">
            <Link href="/legal" className="hover:text-white">Privacy Policy</Link>
            <Link href="/legal" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
