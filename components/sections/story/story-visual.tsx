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
      {/* Main plantation photo with unified border and gold accent ring */}
      <div className="rounded-sm overflow-hidden shadow-2xl relative h-96 sm:h-[460px] border-2 border-amatu-gold  ">
        <Image
          src={mainImage.src}
          alt={mainImage.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Floating landscape card with dark luxury surface & solid gold border */}
      <figure className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-8 bg-amatu-deep p-2.5 sm:p-3 rounded-sm shadow-2xl max-w-[165px] sm:max-w-[220px] border border-amatu-gold m-0">
        <div className="relative w-full h-20 sm:h-28 rounded-sm overflow-hidden mb-2 bg-white/[0.04]">
          <Image
            src={floatingCard.src}
            alt={floatingCard.alt}
            fill
            sizes="(max-width: 640px) 160px, 220px"
            className="object-cover"
          />
        </div>
        <figcaption className="text-[11px] sm:text-xs font-medium text-stone-300 text-center leading-tight">
          {floatingCard.caption}
        </figcaption>
      </figure>
    </div>
  );
}
