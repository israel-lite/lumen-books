import React from 'react';
import Image from 'next/image';

export default function Main() {
  return (
    <section className="relative w-full h-[600px] flex flex-col items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-bg.png" 
          alt="Bookshelf background" 
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 flex flex-col items-center justify-center flex-1">
        <h1 className="text-4xl md:text-5xl font-extrabold text-amber-500 tracking-tight mb-4">
          Knowledge is Power!
        </h1>
        
        <p className="text-sm md:text-base text-white tracking-wide font-normal opacity-90 max-w-2xl mb-2">
          Revitalize your reading culture today by accessing our wide range and genre of books at *Lumen Books* shelf
        </p>

        <p className="text-xs md:text-sm text-amber-500 italic mb-8 font-medium">
          Let us help you find your next book...
        </p>

        <div className="w-full max-w-3xl flex items-center bg-white rounded-md p-1.5 shadow-md">
          <input 
            type="text" 
            placeholder="Type to start searching..." 
            className="flex-1 bg-transparent px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none"
          />
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-md transition-colors">
            Search
          </button>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-md grid grid-cols-2 bg-amber-500 text-white text-center rounded-t-xl overflow-hidden border border-amber-400">
        <div className="py-5 flex flex-col justify-center items-center border-r border-white/20">
          <span className="text-xs font-semibold uppercase tracking-wider opacity-90 mb-1">Books</span>
          <span className="text-3xl font-black tracking-tight">700 +</span>
        </div>
        <div className="py-5 flex flex-col justify-center items-center">
          <span className="text-xs font-semibold uppercase tracking-wider opacity-90 mb-1">Authors</span>
          <span className="text-3xl font-black tracking-tight">463 +</span>
        </div>
      </div>

    </section>
  );
}
