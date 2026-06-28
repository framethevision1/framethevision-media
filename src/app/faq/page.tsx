"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const faqs = [
  {
    category: "Booking & Scheduling",
    questions: [
      {
        q: "How do I book a shoot?",
        a: "You can book directly through our website by clicking 'Book Now.' Select your services, enter the property details, choose an available date and time, and complete your booking with a secure payment.",
      },
      {
        q: "How far in advance should I book?",
        a: "We recommend booking at least 48 hours in advance, though same-day availability may be possible depending on our schedule. Contact us for rush requests.",
      },
      {
        q: "What is your cancellation policy?",
        a: "Cancellations made 24+ hours before the scheduled shoot receive a full refund. Cancellations within 24 hours may be subject to a cancellation fee. Rescheduling is always free.",
      },
      {
        q: "Do you travel outside the High Desert area?",
        a: "Yes! We primarily serve Victorville, Hesperia, Apple Valley, and the surrounding High Desert, but we can accommodate shoots outside our core area for an additional travel fee.",
      },
    ],
  },
  {
    category: "Services & Deliverables",
    questions: [
      {
        q: "What is your turnaround time?",
        a: "Photos are delivered within 24-48 hours. Video walkthroughs typically take 3-5 business days. 3D virtual tours are usually ready within 24-48 hours. Rush delivery is available.",
      },
      {
        q: "How are photos delivered?",
        a: "All media is delivered through your personal client portal where you can view, download, and share. Photos come in both MLS-ready and print-ready formats. You also get a branded property website with lead capture, social media banners, a custom flyer, and a QR code — all included at no extra cost.",
      },
      {
        q: "Do you provide both photos and video?",
        a: "Yes! We offer photography, video walkthroughs, drone aerial, and 3D virtual tours. You can book individual services or bundle them for a better value.",
      },
      {
        q: "Are you FAA certified for drone photography?",
        a: "Yes, our drone pilot is FAA Part 107 certified. We carry full liability insurance and follow all FAA regulations for safe, legal drone operations.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    questions: [
      {
        q: "How much does real estate photography cost?",
        a: "Our pricing varies by property size and services selected. Visit our Pricing page for detailed package information, or contact us for a custom quote.",
      },
      {
        q: "Do you offer package deals?",
        a: "Yes! We offer bundled packages that combine photography with drone, video, and/or 3D tours at a discounted rate. Check our Pricing page for current bundles.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards through our secure online booking system. Payment is collected at the time of booking.",
      },
    ],
  },
  {
    category: "Day of the Shoot",
    questions: [
      {
        q: "How should the property be prepared?",
        a: "We recommend decluttering surfaces, turning on all lights, opening blinds/curtains, removing personal items from bathrooms, and ensuring the exterior is tidy. We'll handle the rest!",
      },
      {
        q: "How long does a typical shoot take?",
        a: "A standard photo shoot takes 1-2 hours depending on property size. Video adds about 30-60 minutes. 3D virtual tours take 30 minutes to 1 hour. Drone adds about 15-20 minutes.",
      },
      {
        q: "Does someone need to be at the property?",
        a: "Not necessarily. As long as we have access to the property (lockbox, code, etc.), we can complete the shoot independently. Many agents provide access info and we handle the rest.",
      },
    ],
  },
];

function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-cream-dark">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="font-medium text-brown pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gold flex-shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="pb-5 text-gray-body leading-relaxed">{answer}</div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <section className="bg-cream pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-6">
              FAQ
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brown">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg text-gray-body leading-relaxed">
              Everything you need to know about our real estate media services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {faqs.map((cat) => (
            <div key={cat.category} className="mb-12 last:mb-0">
              <SectionHeading tag={cat.category} title="" center={false} />
              <div className="mt-4">
                {cat.questions.map((faq) => (
                  <AccordionItem
                    key={faq.q}
                    question={faq.q}
                    answer={faq.a}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
