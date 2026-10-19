import React from "react";
import Image from "next/image";

interface StoryVisualProps {
  mainImage: {
    src: string;
    alt: string;
  };
  floatingCard: {
    src: string;
    alt: string;
    caption: string;
  };
}

export function StoryVisual({ mainImage, floatingCard }: StoryVisualProps) {
  return (
    <div className="relative">
      {/* Main plantation photo */}
      <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative h-96 sm:h-[460px]">
        <Image
          src={mainImage.src}
          alt={mainImage.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Floating ripe cherries card - responsive for mobile & desktop */}
      <figure className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-8 bg-white p-2 sm:p-3 rounded-xl shadow-xl max-w-[160px] sm:max-w-[220px] border border-stone-200 m-0">
        <div className="relative w-full h-20 sm:h-28 rounded-lg overflow-hidden mb-1.5 sm:mb-2">
          <Image
            src={floatingCard.src}
            alt={floatingCard.alt}
            fill
            sizes="(max-width: 640px) 160px, 220px"
            className="object-cover"
          />
        </div>
        <figcaption className="text-[11px] sm:text-xs font-semibold text-stone-800 text-center leading-tight">
          {floatingCard.caption}
        </figcaption>
      </figure>
    </div>
  );
}
