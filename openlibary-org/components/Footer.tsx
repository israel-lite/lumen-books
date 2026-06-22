import React from 'react';
import Image from 'next/image';
import { MapPin, Mail, Phone, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A1A1A] text-white py-16 border-t-4 border-amber-500 relative">
      
      <div className="absolute inset-0 z-0 opacity-10">
        <Image 
          src="/images/footer.png" 
          alt="Background grid" 
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
        
        <div className="space-y-4">
          <h3 className="text-amber-500 font-bold text-base relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-amber-500">
            About Lumen Book shelf
          </h3>
          <p className="text-neutral-300 leading-relaxed font-medium">
            lumen Book shelf is an online bookstore selling multiple genres of books to both Local and International Audiences. Our aim is to give as many people as possible access to affordable books and the opportunity to read them for pleasure, study and lifelong learning.
          </p>
        </div>

        <div className="space-y-4 md:pl-12">
          <h3 className="text-amber-500 font-bold text-base relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-amber-500">
            Shortcuts
          </h3>
          <ul className="space-y-3 font-semibold text-neutral-300">
            <li className="hover:text-amber-500 cursor-pointer transition-colors">Shop</li>
            <li className="hover:text-amber-500 cursor-pointer transition-colors">Cart</li>
            <li className="hover:text-amber-500 cursor-pointer transition-colors">Wishlist</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-amber-500 font-bold text-base relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-amber-500">
            Our Contact
          </h3>
          <ul className="space-y-4 font-semibold text-neutral-300">
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
              <span>block, Fuse labs.</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-amber-500 shrink-0" />
              <span>lumenbooks@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-amber-500 shrink-0" />
              <span>+234-go-to-the-contact-page!!!.</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-6 border-t border-neutral-800 relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-neutral-400">
        <p>&copy; lumen bookshelf 2026 , All Rights Reserved</p>
        <button className="bg-amber-500 text-white p-2.5 rounded-sm hover:bg-amber-600 transition-colors shadow-md flex items-center justify-center">
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

    </footer>
  );
}