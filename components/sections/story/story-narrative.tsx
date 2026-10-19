import React from "react";
import { StoryContent } from "@/types";
import { StoryHighlights } from "./story-highlights";

interface StoryNarrativeProps {
  content: StoryContent;
}

export function StoryNarrative({ content }: StoryNarrativeProps) {
  return (
    <div className="space-y-6">
      <h2
        id="story-heading"
        className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight"
      >
        {content.title}
      </h2>

      {/* Poetic quote */}
      <figure className="m-0">
        <blockquote className="p-4 border-l-4 border-amatu-gold bg-stone-100/80 rounded-r-sm italic text-stone-700 font-serif text-base sm:text-lg leading-relaxed shadow-sm">
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
