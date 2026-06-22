import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RequestBook from '@/components/RequestBook';

export default function RequestBookPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-neutral-800 antialiased flex flex-col">
      <Navbar />
      <RequestBook />
      <Footer />
    </div>
  );
}