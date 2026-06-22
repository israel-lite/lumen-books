'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Auth from '@/components/Auth';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-slate-50 text-neutral-800 antialiased flex flex-col">
      <Navbar />
      <Auth onSuccess={() => router.push('/dashboard')} />
      <Footer />
    </div>
  );
}