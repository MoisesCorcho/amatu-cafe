import React from "react";
import { Coffee, ArrowRight } from "lucide-react";
import { HeroContent } from "@/types";
import { HeroAttributesBar } from "./hero-attributes-bar";

interface HeroNarrativeProps {
  content: HeroContent;
}

export function HeroNarrative({ content }: HeroNarrativeProps) {
  return (
    <div className="xl:col-span-7 space-y-6 text-center xl:text-left">
      {/* Headline */}
      <h1
        id="hero-heading"
        className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight"
      >
        {content.headlinePrefix}
        <span className="text-amatu-gold font-serif">{content.headlineHighlight}</span>
        {content.headlineSuffix}
      </h1>

      {/* Description */}
      <p className="text-base sm:text-lg text-stone-300 max-w-xl mx-auto xl:mx-0 font-light leading-relaxed">
        {content.description}
      </p>

      {/* Quick Tasting & Origin Attributes */}
      <HeroAttributesBar attributes={content.attributes} />

      {/* CTAs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 max-w-xl w-full mx-auto xl:mx-0">
        <a
          href={content.primaryCta.href}
          className="w-full inline-flex items-center justify-center gap-3 bg-amatu-cherry hover:bg-amatu-cherry-light text-stone-100 hover:text-white font-semibold px-8 py-4 rounded-sm transition-colors shadow-lg shadow-amatu-cherry/25 hover:shadow-amatu-cherry/40 text-center"
        >
          <Coffee className="w-5 h-5" />
          <span>{content.primaryCta.label}</span>
        </a>
        <a
          href={content.secondaryCta.href}
          className="w-full inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white text-stone-300 hover:text-white font-semibold px-7 py-4 rounded-sm transition-colors text-center"
        >
          <span>{content.secondaryCta.label}</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
