"use client"

import React, { useState } from "react";
import Navbar from "@/components/Navbar";

export default function ContactPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    try {

      const response = await fetch("/api/contact", {

        method: "POST",

        headers: {

          "Content-Type": "application/json"

        },

        body: JSON.stringify({

          name,
          title,
          email,
          message

        })

      });

      if (response.ok) {

        alert("Message sent successfully 🎉");

        setName("");
        setEmail("");
        setTitle("");
        setMessage("");

      }

      else {

        alert("Failed to send message.");

      }

    }

    catch (error) {

      console.log(error);

      alert("Something went wrong.");

    }

  };

  return (

    <div className="min-h-screen bg-[#FCF6EC] text-neutral-800 antialiased flex flex-col">

      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 flex flex-col items-center justify-center">

        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">

          <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">

            Get in Touch with <span className="text-amber-500">Lumen Books</span>

          </h1>

          <p className="text-sm text-neutral-500 font-medium leading-relaxed">

            Have questions about a specific book, bulk orders, or shipping schedules? Reach out and our team will get back to you shortly.

          </p>

        </div>

        <div className="w-full bg-white border border-slate-100 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8 md:p-10 grid grid-cols-1 md:grid-cols-5 gap-8">

          <div className="md:col-span-2 space-y-6 md:border-r md:border-slate-100 md:pr-8">

            <div className="space-y-1">

              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-500">

                Our Location

              </h3>

              <p className="text-sm font-semibold text-neutral-800">

                Lagos, Nigeria

              </p>

            </div>

            <div className="space-y-1">

              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-500">

                Email Support

              </h3>

              <p className="text-sm font-semibold text-neutral-800">

                support@lumenbooks.com

              </p>

            </div>

            <div className="space-y-1">

              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-500">

                Business Hours

              </h3>

              <p className="text-sm font-semibold text-neutral-800">

                Monday - Friday: 9AM - 6PM

              </p>

              <p className="text-xs text-neutral-400 font-medium">

                Saturday: 10AM - 4PM

              </p>

            </div>

          </div>

          <form
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-4"
          >

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div className="space-y-1">

                <label className="text-xs font-bold text-neutral-600">

                  Full Name

                </label>

                <input

                  type="text"

                  value={name}

                  onChange={(e) => setName(e.target.value)}

                  placeholder="John Doe"

                  required

                  className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"

                />

              </div>

              <div className="space-y-1">

                <label className="text-xs font-bold text-neutral-600">

                  Email Address

                </label>

                <input

                  type="email"

                  value={email}

                  onChange={(e) => setEmail(e.target.value)}

                  placeholder="john@example.com"

                  required

                  className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"

                />

              </div>

            </div>

            <div className="space-y-1">

              <label className="text-xs font-bold text-neutral-600">

                Subject

              </label>

              <input

                type="text"

                value={title}

                onChange={(e) => setTitle(e.target.value)}

                placeholder="How can we help you?"

                required

                className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"

              />

            </div>

            <div className="space-y-1">

              <label className="text-xs font-bold text-neutral-600">

                Your Message

              </label>

              <textarea

                rows={4}

                value={message}

                onChange={(e) => setMessage(e.target.value)}

                placeholder="Type your message here..."

                required

                className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all resize-none"

              />

            </div>

            <button

              type="submit"

              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm py-3 rounded-sm transition-colors tracking-wide shadow-sm mt-2"

            >

              Send Message

            </button>

          </form>

        </div>

      </main>

    </div>

  );

}