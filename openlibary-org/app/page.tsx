import React from 'react';
import Navbar from '@/components/Navbar';
import Main from '@/components/Main';
import SectionOne from '@/components/SectionOne';
import SectionTwo from '@/components/SectionTwo';
import Footer from '@/components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-500 selection:text-white antialiased">
      <Navbar />
      <Main />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </div>
  );
}