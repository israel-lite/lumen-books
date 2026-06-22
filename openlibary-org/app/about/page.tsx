import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutUs from '@/components/AboutUs';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-500 selection:text-white antialiased">
      <Navbar />
      <AboutUs />
      <Footer />
    </div>
  );
}