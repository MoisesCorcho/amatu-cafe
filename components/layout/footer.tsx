import React from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import { CONTACT_INFO } from "@/data/navigation";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10 text-stone-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-24">
            <Image
              src="/assets/Iteracion-2-logo.png"
              alt="Amatu Logo"
              fill
              className="object-contain"
            />
          </div>
          <span>
            © 2026 Amatu Café Especial • De la calidad a la excelencia.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={CONTACT_INFO.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amatu-gold flex items-center gap-1.5 transition-colors"
          >
            <InstagramIcon className="w-4 h-4 text-amatu-gold" />
            <span>{CONTACT_INFO.instagram.handle}</span>
          </a>
          <span className="text-stone-700">•</span>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amatu-gold flex items-center gap-1.5 transition-colors"
          >
            <Phone className="w-4 h-4 text-amatu-gold" />
            <span>{CONTACT_INFO.phone}</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
