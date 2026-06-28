import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const serviceLinks = [
  { name: "Photography", href: "/services/photography" },
  { name: "Video Tours & Branding", href: "/services/video" },
  { name: "Land Photo & Video", href: "/services/drone" },
];

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Our Work", href: "/services/photography" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-cream text-brown border-t border-cream-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="Frame The Vision" width={64} height={64} className="w-16 h-16" />
              <span className="text-xl font-bold tracking-tight">
                FRAME THE <span className="text-gold">VISION</span>
              </span>
            </Link>
            <p className="text-sm text-gray-body leading-relaxed">
              Professional real estate media serving Victorville, CA and the
              High Desert. Elevate your listings with stunning visuals.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-body hover:text-brown transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-body hover:text-brown transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-body">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                Victorville, CA
              </li>
              <li>
                <a
                  href="mailto:framethevision1@gmail.com"
                  className="flex items-center gap-2 text-sm text-gray-body hover:text-brown transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                  framethevision1@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+17606462321"
                  className="flex items-center gap-2 text-sm text-gray-body hover:text-brown transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  (760) 646-2321
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="/book"
                className="inline-block rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-white hover:bg-gold-dark transition-colors"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream-dark flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-body">
            &copy; {new Date().getFullYear()} Frame The Vision. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/legal/privacy"
              className="text-sm text-gray-body hover:text-brown transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms"
              className="text-sm text-gray-body hover:text-brown transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
