import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-slate-100 h-24">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        
        <div className="relative w-16 h-16 flex items-center justify-center cursor-pointer">
          <Image 
            src="/images/main-logo.png" 
            alt="Logo" 
            width={84} 
            height={84} 
            className="object-contain"
          />
        </div>

        <ul className="hidden lg:flex items-center gap-10 text-base font-semibold text-neutral-700">
          <li className="hover:text-amber-500 cursor-pointer transition-colors">Home</li>
          <li className="hover:text-amber-500 cursor-pointer transition-colors">Shop</li>
          <li className="hover:text-amber-500 cursor-pointer transition-colors">About Us</li>
          <Link href="/contact">
            <li className="hover:text-amber-500 cursor-pointer transition-colors">Contact Us</li>
          </Link>
        </ul>

        <div className="flex items-center gap-8">
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm px-6 py-3.5 rounded-md transition-colors tracking-wide shadow-sm">
            Request Book
          </button>

          <div className="relative cursor-pointer flex items-center justify-center">
            <Image 
              src="/images/cart-icon.png" 
              alt="Cart" 
              width={28} 
              height={28} 
              className="object-contain"
            />
            <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-black rounded-full w-5 h-5 flex items-center justify-center border border-white">
              0
            </span>
          </div>

          <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm px-6 py-3.5 rounded-md transition-colors tracking-wide shadow-sm">
            My Account
          </button>
        </div>

      </div>
    </nav>
  );
}