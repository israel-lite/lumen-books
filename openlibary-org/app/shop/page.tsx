import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Shop from '@/components/Shop';

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-800 antialiased flex flex-col">
      <Navbar />
      <Shop />
      <Footer />
    </div>
  );
}