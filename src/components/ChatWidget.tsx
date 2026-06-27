"use client";

import { useState } from "react";
import { MessageCircle, X, Send, ArrowLeft } from "lucide-react";
import Image from "next/image";

interface QA {
  question: string;
  answer: string;
  followUp?: string[];
}

const topics: { label: string; questions: QA[] }[] = [
  {
    label: "Pricing & Packages",
    questions: [
      {
        question: "What are your photography packages?",
        answer:
          "We offer 4 packages:\n\n• Basic — $225 (interior & exterior photos)\n• Pro — $275 (photos + drone aerials)\n• Premium — $350 (photos + drone + 2D floor plan)\n• Land — $150 (10-15 photos with property lines)\n\nAll packages include professional editing and 24-48 hour turnaround.",
      },
      {
        question: "What add-ons do you offer?",
        answer:
          "We offer several add-ons:\n\n• Virtual Twilight — $15/image (1 FREE with every shoot)\n• Virtual Staging — $30/room (1 FREE with every shoot)\n• 2D Floor Plan — $75\n• 3D Virtual Tour — $125 ($85 when added to any package)",
      },
      {
        question: "What are your video prices?",
        answer:
          "Our video services:\n\n• Land 1 Min Outlined Video — $225 ($175 with Land package)\n• Standard MLS Property Video — $275\n• Key Delivery Video — $325\n• Agent Branded Video — $350",
      },
      {
        question: "Do you have bundle deals?",
        answer:
          "Yes! Every photo shoot already includes 1 FREE virtual twilight and 1 FREE virtual staging. You also get a property website, social media banners, a custom flyer, and a QR code — all included at no extra charge.",
      },
    ],
  },
  {
    label: "Booking & Scheduling",
    questions: [
      {
        question: "How do I book a shoot?",
        answer:
          'You can book directly through our website by clicking "Book Now." Select your services, enter the property details, choose a date and time, and complete your booking with a secure payment.',
      },
      {
        question: "How far in advance should I book?",
        answer:
          "We recommend booking at least 48 hours in advance, though same-day availability may be possible depending on our schedule. Contact us for rush requests.",
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "Cancellations made 24+ hours before the scheduled shoot receive a full refund. Cancellations within 24 hours may be subject to a cancellation fee. Rescheduling is always free.",
      },
    ],
  },
  {
    label: "Services & Delivery",
    questions: [
      {
        question: "What is your turnaround time?",
        answer:
          "Photos are delivered within 24-48 hours. Video walkthroughs take 3-5 business days. 3D virtual tours are ready within 24-48 hours. Rush delivery is available.",
      },
      {
        question: "How are photos delivered?",
        answer:
          "All media is delivered through your personal client portal where you can view, download, and share your photos and videos. You have full access for 1 year.",
      },
      {
        question: "Are you FAA certified for drone?",
        answer:
          "Yes! Our drone pilot is FAA Part 107 certified. We carry full liability insurance and follow all FAA regulations for safe, legal drone operations.",
      },
    ],
  },
  {
    label: "Service Area",
    questions: [
      {
        question: "What areas do you serve?",
        answer:
          "We serve the entire High Desert region including Victorville, Hesperia, Apple Valley, Adelanto, Oak Hills, Phelan, Lucerne Valley, Barstow, and Yucca Valley. All pricing is based on a 30-mile radius from 92395.",
      },
      {
        question: "Do you travel outside the High Desert?",
        answer:
          "Yes! We can accommodate shoots outside our core area for an additional travel fee. Contact us for a custom quote.",
      },
    ],
  },
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: "bot" | "user"; text: string }[]
  >([]);
  const [view, setView] = useState<"topics" | "questions" | "chat">("topics");
  const [activeTopic, setActiveTopic] = useState<number | null>(null);
  const [input, setInput] = useState("");

  function startChat() {
    setMessages([
      {
        role: "bot",
        text: "Hey there! 👋 I'm here to help answer any questions about Frame The Vision. What would you like to know?",
      },
    ]);
    setView("topics");
  }

  function handleOpen() {
    if (!open) {
      startChat();
    }
    setOpen(!open);
  }

  function selectTopic(index: number) {
    setActiveTopic(index);
    setView("questions");
  }

  function selectQuestion(qa: QA) {
    setMessages((prev) => [
      ...prev,
      { role: "user", text: qa.question },
      { role: "bot", text: qa.answer },
    ]);
    setView("chat");
  }

  function findAnswer(query: string): string {
    const q = query.toLowerCase();
    const allQAs = topics.flatMap((t) => t.questions);

    const keywords: { terms: string[]; index: number }[] = [
      { terms: ["price", "cost", "how much", "package", "basic", "pro ", "premium"], index: 0 },
      { terms: ["add-on", "addon", "twilight", "staging", "floor plan", "virtual tour", "3d"], index: 1 },
      { terms: ["video", "mls", "branded", "key delivery"], index: 2 },
      { terms: ["bundle", "deal", "discount", "free", "include"], index: 3 },
      { terms: ["book", "schedule", "appointment", "reserve"], index: 4 },
      { terms: ["advance", "ahead", "soon", "when should"], index: 5 },
      { terms: ["cancel", "refund", "reschedule"], index: 6 },
      { terms: ["turnaround", "deliver", "how long", "when will", "ready"], index: 7 },
      { terms: ["photo deliver", "gallery", "download", "portal", "access"], index: 8 },
      { terms: ["faa", "certified", "license", "drone", "aerial"], index: 9 },
      { terms: ["area", "serve", "location", "victorville", "hesperia", "apple valley", "high desert", "travel"], index: 10 },
      { terms: ["outside", "travel fee", "far"], index: 11 },
    ];

    const qaList = [
      ...topics[0].questions,
      ...topics[1].questions,
      ...topics[2].questions,
      ...topics[3].questions,
    ];

    for (const kw of keywords) {
      if (kw.terms.some((t) => q.includes(t)) && qaList[kw.index]) {
        return qaList[kw.index].answer;
      }
    }

    if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
      return "Hey! 👋 How can I help you today? Feel free to pick a topic above or ask me anything about our services, pricing, or booking.";
    }

    if (q.includes("thank")) {
      return "You're welcome! Let me know if you have any other questions. We're here to help! 😊";
    }

    if (q.includes("phone") || q.includes("call") || q.includes("number")) {
      return "You can reach us at (760) 646-2321. We're available Monday–Saturday, 7AM–7PM.";
    }

    if (q.includes("email") || q.includes("contact")) {
      return "You can email us at framethevision1@gmail.com or call (760) 646-2321. We typically respond within a few hours!";
    }

    if (q.includes("hour") || q.includes("open") || q.includes("available")) {
      return "We're available Monday–Saturday, 7:00 AM – 7:00 PM. Sundays by appointment. Give us a call at (760) 646-2321!";
    }

    return "Great question! I don't have a specific answer for that, but I'd love to help. You can reach us directly:\n\n📞 (760) 646-2321\n📧 framethevision1@gmail.com\n\nWe typically respond within a few hours!";
  }

  function handleSend() {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput("");
    const answer = findAnswer(userMsg);
    setMessages((prev) => [
      ...prev,
      { role: "user", text: userMsg },
      { role: "bot", text: answer },
    ]);
    setView("chat");
  }

  function goBack() {
    if (view === "questions") {
      setView("topics");
      setActiveTopic(null);
    } else if (view === "chat") {
      setView("topics");
    }
  }

  return (
    <>
      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-h-[500px] rounded-2xl bg-white shadow-2xl border border-cream-dark flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gold px-5 py-4 flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Frame The Vision"
              width={36}
              height={36}
              className="w-9 h-9 rounded-full"
            />
            <div className="flex-1">
              <p className="text-white font-semibold text-sm">
                Frame The Vision
              </p>
              <p className="text-white/70 text-xs">
                Typically replies instantly
              </p>
            </div>
            <button onClick={() => setOpen(false)}>
              <X className="w-5 h-5 text-white/80 hover:text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[280px]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm whitespace-pre-line ${
                    msg.role === "user"
                      ? "bg-gold text-white rounded-br-md"
                      : "bg-gray-100 text-brown rounded-bl-md"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Options Area */}
          <div className="border-t border-cream-dark p-4">
            {view === "topics" && (
              <div className="space-y-2">
                <p className="text-xs text-gray-body mb-2">Choose a topic:</p>
                {topics.map((topic, i) => (
                  <button
                    key={i}
                    onClick={() => selectTopic(i)}
                    className="w-full text-left px-4 py-2.5 rounded-xl border border-cream-dark text-sm text-brown hover:border-gold hover:text-gold transition-colors"
                  >
                    {topic.label}
                  </button>
                ))}
                <button
                  onClick={() => setView("chat")}
                  className="w-full text-left px-4 py-2.5 rounded-xl border border-gold/30 text-sm text-gold font-medium hover:border-gold transition-colors"
                >
                  Ask something else...
                </button>
              </div>
            )}

            {view === "questions" && activeTopic !== null && (
              <div className="space-y-2">
                <button
                  onClick={goBack}
                  className="flex items-center gap-1 text-xs text-gray-body hover:text-brown mb-2"
                >
                  <ArrowLeft className="w-3 h-3" /> Back to topics
                </button>
                {topics[activeTopic].questions.map((qa, i) => (
                  <button
                    key={i}
                    onClick={() => selectQuestion(qa)}
                    className="w-full text-left px-4 py-2.5 rounded-xl border border-cream-dark text-sm text-brown hover:border-gold hover:text-gold transition-colors"
                  >
                    {qa.question}
                  </button>
                ))}
              </div>
            )}

            {view === "chat" && (
              <div>
                <button
                  onClick={goBack}
                  className="flex items-center gap-1 text-xs text-gray-body hover:text-brown mb-3"
                >
                  <ArrowLeft className="w-3 h-3" /> More questions
                </button>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Type your question..."
                    className="flex-1 px-4 py-2.5 rounded-xl border border-cream-dark text-sm text-brown outline-none focus:border-gold"
                  />
                  <button
                    onClick={handleSend}
                    className="w-10 h-10 rounded-xl bg-gold flex items-center justify-center hover:bg-gold-dark transition-colors"
                  >
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={handleOpen}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gold shadow-lg hover:bg-gold-dark transition-colors flex items-center justify-center"
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>
    </>
  );
}
