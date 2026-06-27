"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero with Photo */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <Image
          src="/photos/backyard.jpg"
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-12">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            Contact Us
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Let&apos;s Work Together
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl">
            Have a question or ready to book? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-cream border-b border-cream-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-cream-dark">
            <div className="flex items-center gap-4 py-6 sm:px-6 first:pl-0">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-xs text-gray-body uppercase tracking-wider">Call Us</p>
                <a href="tel:+17606462321" className="text-sm font-medium text-brown hover:text-gold transition-colors">
                  (760) 646-2321
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 py-6 sm:px-6">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-xs text-gray-body uppercase tracking-wider">Email</p>
                <a href="mailto:framethevision1@gmail.com" className="text-sm font-medium text-brown hover:text-gold transition-colors">
                  framethevision1@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 py-6 sm:px-6">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-xs text-gray-body uppercase tracking-wider">Location</p>
                <p className="text-sm font-medium text-brown">Victorville, CA</p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-6 sm:px-6">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-xs text-gray-body uppercase tracking-wider">Hours</p>
                <p className="text-sm font-medium text-brown">Mon–Sat 7AM–7PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
              Send a Message
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-brown">
              Get in Touch
            </h2>
            <p className="mt-4 text-gray-body">
              Leave your info and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-2xl bg-green-50 border border-green-200 p-12 text-center">
              <p className="text-2xl font-bold text-green-800">
                Message Sent!
              </p>
              <p className="mt-3 text-green-700">
                We&apos;ll get back to you within 24 hours.
              </p>
              <Link
                href="/"
                className="mt-6 inline-flex items-center text-gold font-medium hover:text-gold-dark transition-colors"
              >
                Back to Home <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-brown mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-xl border border-cream-dark px-4 py-3.5 text-brown focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brown mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full rounded-xl border border-cream-dark px-4 py-3.5 text-brown focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                    placeholder="(760) 555-1234"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-brown mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-xl border border-cream-dark px-4 py-3.5 text-brown focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brown mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  className="w-full rounded-xl border border-cream-dark px-4 py-3.5 text-brown focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors resize-none"
                  placeholder="How can we help?"
                />
              </div>
              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-gold px-10 py-4 text-base font-semibold text-white hover:bg-gold-dark transition-colors"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/photos/front-exterior.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Ready to Book Instead?
          </h2>
          <p className="mt-3 text-gray-300 max-w-lg mx-auto">
            Skip the wait — book your shoot directly and pick your date.
          </p>
          <div className="mt-8">
            <a
              href="/book"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-white hover:bg-gold-dark transition-colors"
            >
              Book Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
