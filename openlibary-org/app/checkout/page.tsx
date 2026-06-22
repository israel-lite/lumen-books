'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const dynamic = 'force-dynamic';

function CheckoutContent() {
  const searchParams = useSearchParams();
  const bookTitle = searchParams.get('title') || 'Selected Book';
  const bookPrice = searchParams.get('price') || '$0.00';
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Fake payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    setSuccess(true);
    setLoading(false);
  };

  if (success) {
    return (
      <main className="flex-1 max-w-md mx-auto w-full px-6 py-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">Payment Successful!</h2>
          <p className="text-neutral-600 mb-6">
            Thank you for your purchase! Your order is being processed.
          </p>
          <button
            onClick={() => {
              setSuccess(false);
              setFirstName('');
              setLastName('');
              setAddress('');
              setEmail('');
              setPhone('');
            }}
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        
      <form onSubmit={handleSubmit} className="md:col-span-2 bg-white border border-slate-200/60 p-6 rounded-sm space-y-6 shadow-sm">
        <h2 className="text-lg font-bold text-neutral-900 border-b border-slate-100 pb-2">
          Shipping Information
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">First Name</label>
            <input
              required
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="John"
              className="w-full bg-white border border-slate-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Last Name</label>
            <input
              required
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Doe"
              className="w-full bg-white border border-slate-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Email</label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            className="w-full bg-white border border-slate-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Phone Number</label>
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+234 801 234 5678"
            className="w-full bg-white border border-slate-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Delivery Address</label>
          <textarea
            required
            rows={3}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter full address"
            className="w-full bg-white border border-slate-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm py-3 rounded-sm transition-colors disabled:opacity-70"
        >
          {loading ? 'Processing Payment...' : 'Complete Order'}
        </button>
      </form>

      <div className="bg-white border border-slate-200/60 p-6 rounded-sm h-fit space-y-4 shadow-sm">
        <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-wider border-b border-slate-100 pb-2">
          Order Summary
        </h2>
        
        <div className="space-y-3">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-neutral-800">{bookTitle}</p>
            <span className="text-xs font-bold text-neutral-700">{bookPrice}</span>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-3 flex justify-between text-sm font-bold text-neutral-900">
          <span>Total Amount</span>
          <span className="text-amber-500">{bookPrice}</span>
        </div>
        
        <p className="text-[10px] text-center font-medium text-neutral-400 leading-normal">
          This catalog portal functions as a static layout demo with fake payment processing.
        </p>
      </div>

    </main>
  );
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-neutral-800 antialiased flex flex-col">
      <Navbar />
      <Suspense fallback={<div className="flex-1 flex items-center justify-center">Loading...</div>}>
        <CheckoutContent />
      </Suspense>
      <Footer />
    </div>
  );
}