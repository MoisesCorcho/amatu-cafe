import React from "react";
import { BrandAttribute } from "@/types";

interface HeroAttributesBarProps {
  attributes: BrandAttribute[];
}

export function HeroAttributesBar({ attributes }: HeroAttributesBarProps) {
  return (
    <div className="grid grid-cols-3 max-w-xl w-full mx-auto xl:mx-0 py-3 px-2 sm:p-4 bg-amatu-gold rounded-sm divide-x divide-black/15 shadow-lg shadow-amatu-gold/15 items-start sm:items-center">
      {attributes.map((attr, idx) => (
        <div
          key={idx}
          className="px-1.5 sm:px-3 text-center flex flex-col justify-start sm:justify-center"
        >
          <span className="block text-[10px] sm:text-xs uppercase tracking-wider text-black/80 font-bold">
            {attr.label}
          </span>
          <span className="font-serif text-sm sm:text-base md:text-lg text-black font-bold block mt-0.5 leading-snug">
            {attr.value}
          </span>
        </div>
      ))}
    </div>
  );
}
