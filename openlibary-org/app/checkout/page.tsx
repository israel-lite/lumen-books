import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-neutral-800 antialiased flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="md:col-span-2 bg-white border border-slate-200/60 p-6 rounded-sm space-y-6 shadow-sm">
          <h2 className="text-lg font-bold text-neutral-900 border-b border-slate-100 pb-3">
            Shipping Information
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">First Name</label>
              <input disabled type="text" placeholder="John" className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-2.5 text-sm cursor-not-allowed" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Last Name</label>
              <input disabled type="text" placeholder="Doe" className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-2.5 text-sm cursor-not-allowed" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Delivery Address</label>
            <input disabled type="text" placeholder="Enter full address" className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-2.5 text-sm cursor-not-allowed" />
          </div>
        </div>

        <div className="bg-white border border-slate-200/60 p-6 rounded-sm h-fit space-y-4 shadow-sm">
          <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-wider border-b border-slate-100 pb-2">
            Order Summary
          </h2>
          
          <div className="flex justify-between text-xs font-semibold text-neutral-500">
            <span>Selected Book Edition</span>
            <span className="font-bold text-neutral-800">$00.00</span>
          </div>

          <div className="border-t border-slate-100 pt-3 flex justify-between text-sm font-bold text-neutral-900">
            <span>Total Amount</span>
            <span className="text-amber-500">$00.00</span>
          </div>

          <button disabled className="w-full bg-neutral-400 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-sm cursor-not-allowed mt-4 shadow-inner">
            Checkout Disabled
          </button>
          
          <p className="text-[10px] text-center font-medium text-neutral-400 leading-normal">
            This catalog portal functions as a static layout demo. Purchasing utilities are currently unavailable.
          </p>
        </div>

      </main>

      <Footer />
    </div>
  );
}