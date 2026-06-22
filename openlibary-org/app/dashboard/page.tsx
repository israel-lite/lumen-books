import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Dashboard from '@/components/Dashboard';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-500 selection:text-white antialiased">
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
}