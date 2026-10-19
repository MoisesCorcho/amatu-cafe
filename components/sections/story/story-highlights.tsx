import React from "react";
import { StoryHighlight } from "@/types";

interface StoryHighlightsProps {
  highlights: StoryHighlight[];
}

export function StoryHighlights({ highlights }: StoryHighlightsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-5 border-t border-stone-300">
      {highlights.map((item, idx) => (
        <div key={idx} className="space-y-1">
          <h3 className="text-amatu-gold font-serif text-xl sm:text-2xl font-bold">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
