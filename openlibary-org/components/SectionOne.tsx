import React from 'react';
import Image from 'next/image';

export default function SectionOne() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12 space-y-12 bg-white">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="border border-slate-100 rounded-sm p-8 flex items-center gap-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <div className="border border-amber-500 p-4 flex items-center justify-center">
            <Image 
              src="/images/car.png" 
              alt="Quick Delivery" 
              width={48} 
              height={48} 
              className="object-contain"
            />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-neutral-800 text-base">Quick Delivery</h3>
            <p className="text-xs text-neutral-400 font-medium">Swift delivery to your doorstep in just few days</p>
          </div>
        </div>

        <div className="border border-slate-100 rounded-sm p-8 flex items-center gap-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <div className="border border-amber-500 p-4 flex items-center justify-center">
            <Image 
              src="/images/quality.png" 
              alt="Best Book Quality" 
              width={48} 
              height={48} 
              className="object-contain"
            />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-neutral-800 text-base">Best Book Quality</h3>
            <p className="text-xs text-neutral-400 font-medium">Enjoy the top notch quality of our wide range of books.</p>
          </div>
        </div>

        <div className="border border-slate-100 rounded-sm p-8 flex items-center gap-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <div className="border border-amber-500 p-4 flex items-center justify-center">
            <Image 
              src="/images/payment.png" 
              alt="Secure Payment" 
              width={48} 
              height={48} 
              className="object-contain"
            />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-neutral-800 text-base">Secure Payment</h3>
            <p className="text-xs text-neutral-400 font-medium">Shop confidently with our secure payment for worry free transactions.</p>
          </div>
        </div>

      </div>

      <div className="w-full bg-[#FCF6EC] border border-slate-100 rounded-sm overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-[320px]">
        
        <div className="p-10 flex flex-col justify-between items-start space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-neutral-800 tracking-tight">About us</h2>
            <p className="text-xs md:text-sm text-neutral-500 leading-relaxed max-w-md font-medium">
              Lumen Books is a Nigerian online bookstore selling multiple genres of books to both Local and International Audiences.
            </p>
            <p className="text-xs md:text-sm text-neutral-500 italic font-medium pt-2">
              &ldquo;Knowledge is power&rdquo;...
            </p>
          </div>
          
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs px-6 py-3 rounded-sm transition-colors tracking-wide">
            Read more
          </button>
        </div>

        <div className="relative w-full h-full min-h-[260px] md:min-h-full">
          <Image 
            src="/images/house.png" 
            alt="Bookstore storefront storefront window views" 
            width={600} 
            height={320} 
            className="w-full h-full object-cover"
          />
        </div>

      </div>

    </section>
  );
}