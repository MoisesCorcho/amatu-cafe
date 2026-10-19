import React from "react";
import { StoryContent } from "@/types";
import { StoryHighlights } from "./story-highlights";

interface StoryNarrativeProps {
  content: StoryContent;
}

export function StoryNarrative({ content }: StoryNarrativeProps) {
  return (
    <div className="flex flex-col gap-6">
      <h2
        id="story-heading"
        className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight"
      >
        {content.title}
      </h2>

      {/* Poetic quote */}
      <figure>
        <blockquote className="p-4 sm:p-5 border-l-4 border-amatu-gold bg-amatu-deep rounded-r-sm italic text-amatu-linen font-serif text-base sm:text-lg leading-relaxed shadow-md">
          &ldquo;{content.quote}&rdquo;
        </blockquote>
        <figcaption className="sr-only">
          Filosofía de origen y floración de los cafetales de Amatu Café
        </figcaption>
      </figure>

      <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
        {content.descriptionPrefix}
        <strong className="text-stone-900 font-semibold">{content.altitudeHighlight}</strong>
        {content.descriptionSuffix}
      </p>

      <StoryHighlights highlights={content.highlights} />
    </div>
  );
}
