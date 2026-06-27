"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-cream pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-6">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brown">
              Let&apos;s Work Together
            </h1>
            <p className="mt-6 text-lg text-gray-body leading-relaxed">
              Ready to elevate your listings? Get in touch and we&apos;ll get
              you booked.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <SectionHeading
                tag="Send a Message"
                title="Get in Touch"
                center={false}
              />
              {submitted ? (
                <div className="mt-8 rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
                  <p className="text-lg font-semibold text-green-800">
                    Message Sent!
                  </p>
                  <p className="mt-2 text-green-700">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-brown mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border border-cream-dark px-4 py-3 text-brown focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brown mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-xl border border-cream-dark px-4 py-3 text-brown focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brown mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full rounded-xl border border-cream-dark px-4 py-3 text-brown focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                      placeholder="(760) 555-1234"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brown mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      className="w-full rounded-xl border border-cream-dark px-4 py-3 text-brown focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors resize-none"
                      placeholder="How can we help?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-white hover:bg-gold-dark transition-colors"
                  >
                    Submit
                    <Send className="ml-2 w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <SectionHeading
                tag="Contact Info"
                title="Reach Us Directly"
                center={false}
              />
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-bg">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-brown">Location</p>
                    <p className="text-gray-body">Victorville, CA</p>
                    <p className="text-sm text-gray-body">
                      Serving the entire High Desert region
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-bg">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-brown">Email</p>
                    <a
                      href="mailto:framethevision1@gmail.com"
                      className="text-gold hover:text-gold-dark transition-colors"
                    >
                      framethevision1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-bg">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-brown">Phone</p>
                    <a
                      href="tel:+17606462321"
                      className="text-gold hover:text-gold-dark transition-colors"
                    >
                      (760) 646-2321
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-bg">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-brown">Hours</p>
                    <p className="text-gray-body">
                      Monday – Saturday: 7:00 AM – 7:00 PM
                    </p>
                    <p className="text-gray-body">Sunday: By appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
