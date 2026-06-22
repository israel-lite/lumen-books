"use client"
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          About <span className="text-amber-500">LumenBooks</span>
        </h1>
        <p className="text-lg text-neutral-600 text-center max-w-3xl mx-auto mb-16">
          Welcome to LumenBooks, your gateway to a world of knowledge and stories. We are passionate about connecting readers with books that inspire, educate, and entertain.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-neutral-600 mb-4">
            At LumenBooks, our mission is to make quality literature accessible to everyone. We believe that books have the power to transform lives, expand horizons, and foster a lifelong love of reading.
          </p>
          <p className="text-neutral-600">
            We curate a diverse collection of books across all genres, from timeless classics to contemporary bestsellers, ensuring there's something for every reader.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-amber-50 rounded-2xl p-8 border border-amber-100"
        >
          <h3 className="text-2xl font-bold mb-4 text-amber-700">Why Choose Us?</h3>
          <ul className="space-y-3 text-neutral-700">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              Curated Selection
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              Quality Service
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              Fast Delivery
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              Secure Checkout
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Passion", desc: "We love books and share that passion with our customers" },
            { title: "Integrity", desc: "Honesty and transparency in everything we do" },
            { title: "Community", desc: "Building a community of book lovers" }
          ].map((value, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold mb-3 text-amber-600">{value.title}</h3>
              <p className="text-neutral-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}