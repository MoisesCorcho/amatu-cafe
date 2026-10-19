import React from "react";
import { STORY_CONTENT } from "@/data/story";
import { StoryVisual } from "./story/story-visual";
import { StoryNarrative } from "./story/story-narrative";

export function StorySection() {
  return (
    <section
      id="historia"
      aria-labelledby="story-heading"
      className="bg-amatu-linen text-stone-800 pt-16 sm:pt-20 md:pt-28 pb-24 md:pb-32 relative z-10 -mt-[2px] scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Visual Composition Left */}
          <div className="lg:col-span-6">
            <StoryVisual
              mainImage={STORY_CONTENT.mainImage}
              floatingCard={STORY_CONTENT.floatingCard}
            />
          </div>

          {/* Editorial Narrative Right */}
          <div className="lg:col-span-6">
            <StoryNarrative content={STORY_CONTENT} />
          </div>
        </div>
      </div>

      {/* Curved SVG Divider to Catalog section */}
      <div
        className="absolute -bottom-px left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10 translate-y-[1px]"
        aria-hidden="true"
      >
        <svg
          className="block w-full h-16 sm:h-24 lg:h-32 text-amatu-charcoal scale-y-[1.02] origin-bottom"
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
          focusable="false"
        >
          <path
            d="M0,45 C280,115 620,120 920,55 C1180,5 1340,40 1440,65 L1440,125 L0,125 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
