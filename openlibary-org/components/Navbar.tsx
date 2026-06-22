import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-slate-100 h-24">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        
        <Link href="/" className="relative w-16 h-16 flex items-center justify-center cursor-pointer">
          <Image 
            src="/images/main-logo.png" 
            alt="Logo" 
            width={84} 
            height={84} 
            className="object-contain"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-10 text-base font-semibold text-neutral-700">
          <Link href="/" className="hover:text-amber-500 cursor-pointer transition-colors">Home</Link>
          <Link href="/shop" className="hover:text-amber-500 cursor-pointer transition-colors">Shop</Link>
          <Link href="/about" className="hover:text-amber-500 cursor-pointer transition-colors">About Us</Link>
          <Link href="/contact" className="hover:text-amber-500 cursor-pointer transition-colors">Contact Us</Link>
          <Link href="/dashboard" className="hover:text-amber-500 cursor-pointer transition-colors">Dashboard</Link>
        </ul>

        <div className="flex items-center gap-6">
          <Link href="/request-book">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm px-5 py-2.5 rounded-md transition-colors tracking-wide shadow-sm">
              Request Book
            </button>
          </Link>

          <Link href="/checkout" className="relative cursor-pointer flex items-center justify-center">
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
          </Link>

          <div className="flex items-center gap-3">
            <Link href="/login">
              <button className="text-neutral-700 font-semibold text-sm hover:text-amber-500 transition-colors">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="bg-slate-100 hover:bg-slate-200 text-neutral-900 font-bold text-sm px-5 py-2.5 rounded-md transition-colors">
                Sign Up
              </button>
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
}