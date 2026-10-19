import React from "react";
import { CatalogContent } from "@/types";

interface CatalogHeaderProps {
  content: CatalogContent;
}

export function CatalogHeader({ content }: CatalogHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
      <span className="inline-block text-xs uppercase font-bold tracking-widest text-amatu-gold">
        {content.eyebrow}
      </span>
      <h2
        id="catalog-heading"
        className="text-3xl sm:text-5xl font-serif font-bold text-white"
      >
        {content.title}
      </h2>
      <p className="text-stone-400 text-sm sm:text-base">
        {content.description}
      </p>
    </div>
  );
}
