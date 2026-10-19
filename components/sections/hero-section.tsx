import React from "react";
import { HERO_CONTENT } from "@/data/hero";
import { HeroNarrative } from "./hero/hero-narrative";
import { HeroVisualStage } from "./hero/hero-visual-stage";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-[100dvh] flex flex-col justify-center pt-28 pb-28 sm:pt-32 sm:pb-32 md:pt-36 md:pb-36 overflow-hidden bg-gradient-to-b from-amatu-charcoal via-amatu-deep to-amatu-charcoal"
    >
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amatu-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amatu-cherry/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full my-auto">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
          <HeroNarrative content={HERO_CONTENT} />
          <HeroVisualStage />
        </div>
      </div>

      {/* Curved SVG Divider to Story section */}
      <div
        className="absolute -bottom-px left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10 translate-y-[1px]"
        aria-hidden="true"
      >
        <svg
          className="block w-full h-16 sm:h-24 lg:h-32 text-amatu-linen scale-y-[1.02] origin-bottom"
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
          focusable="false"
        >
          <path
            d="M0,45 C320,115 640,125 960,65 C1200,15 1360,45 1440,65 L1440,125 L0,125 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
