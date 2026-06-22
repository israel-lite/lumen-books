'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function RequestBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Fake API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setSuccess(true);
    setLoading(false);

    // Reset form after a delay
    setTimeout(() => {
      setTitle('');
      setAuthor('');
      setDescription('');
      setSuccess(false);
    }, 3000);
  };

  return (
    <section className="w-full max-w-2xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8"
      >
        <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Request a Book</h2>

        {success && (
          <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg text-center">
            <p className="font-semibold">Request received! We'll get back to you soon.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Book Title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter book title"
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Author</label>
            <input
              type="text"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter author name"
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Additional Information</label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Any additional details about the book (e.g., edition, year)..."
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm py-3 rounded-lg transition-colors disabled:opacity-70"
          >
            {loading ? 'Sending Request...' : 'Submit Request'}
          </button>
        </form>
      </motion.div>
    </section>
  );
}