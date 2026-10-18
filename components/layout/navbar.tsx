"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS, CONTACT_INFO } from "@/data/navigation";
import { useCart } from "@/context/cart-context";
import { ShoppingBag, Menu, X, MessageCircle } from "lucide-react";

export function Navbar() {
  const { openCart, totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // IntersectionObserver for active section detection without layout thrashing
    const sectionIds = NAV_ITEMS.map((item) => item.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-amatu-charcoal/90 backdrop-blur-md border-b border-white/10 transition-all duration-300 ${
        scrolled ? "py-3 shadow-lg bg-amatu-charcoal/95" : "py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#hero" className="flex items-center gap-3 group">
          <div className="relative h-11 w-28 sm:w-32">
            <Image
              src="/assets/Iteracion-2-logo.png"
              alt="Amatu Café Logo"
              fill
              sizes="(max-width: 640px) 112px, 128px"
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative py-1 transition-colors ${
                  isActive
                    ? "text-amatu-gold font-semibold"
                    : "text-stone-300 hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amatu-gold rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls (Direct WhatsApp CTA, Cart & Mobile Menu) */}
        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
              "Hola Amatu Café, quisiera más información sobre sus productos."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-amatu-gold hover:bg-amatu-gold-light text-stone-950 font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Pedir por WhatsApp</span>
          </a>

          <button
            onClick={openCart}
            className="relative p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-amatu-gold/50 text-stone-200 hover:text-white transition-all cursor-pointer"
            aria-label="Abrir carrito"
          >
            <ShoppingBag className="w-5 h-5 text-amatu-gold" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-amatu-gold text-stone-950 font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-in zoom-in-75">
                {totalItems}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full bg-white/5 border border-white/10 text-stone-200 hover:text-white transition-all cursor-pointer"
            aria-label={mobileMenuOpen ? "Cerrar menú principal" : "Abrir menú principal"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-amatu-deep border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200"
        >
          <nav className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-stone-200 hover:text-amatu-gold text-base font-medium border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                "Hola Amatu Café, quisiera más información sobre sus productos."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex sm:hidden items-center justify-center gap-2 bg-amatu-gold hover:bg-amatu-gold-light text-stone-950 font-semibold text-xs tracking-wider uppercase px-5 py-3 rounded-sm mt-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pedir por WhatsApp</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
