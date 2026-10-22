"use client";

import React, { useRef } from "react";
import Image from "next/image";

export interface QuickViewGalleryProps {
  name: string;
  images: string[];
  selectedImage: string;
  onSelectImage: (img: string) => void;
}

const SWIPE_THRESHOLD = 45;

export function QuickViewGallery({
  name,
  images,
  selectedImage,
  onSelectImage,
}: QuickViewGalleryProps) {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const currentIndex = Math.max(0, images.indexOf(selectedImage));

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const deltaX = touchStartX.current - touchEndX.current;

    if (deltaX > SWIPE_THRESHOLD && currentIndex < images.length - 1) {
      onSelectImage(images[currentIndex + 1]);
    } else if (deltaX < -SWIPE_THRESHOLD && currentIndex > 0) {
      onSelectImage(images[currentIndex - 1]);
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="w-full md:w-1/2 p-4 sm:p-5 md:p-6 lg:p-7 bg-white/[0.02] border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-center items-center gap-3 sm:gap-4 flex-shrink-0 md:min-h-0">
      {/* Main Image Box */}
      <div
        className="relative h-44 sm:h-52 md:h-64 lg:h-72 w-full flex items-center justify-center rounded-sm overflow-hidden bg-stone-950/40 p-3 sm:p-4 touch-pan-y select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {selectedImage && (
          <div className="relative w-full h-full pointer-events-none">
            <Image
              src={selectedImage}
              alt={name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
              className="object-contain product-shadow transition-transform duration-300"
              priority
            />
          </div>
        )}

        {/* Floating image counter on mobile */}
        {images.length > 1 && (
          <div
            className="absolute bottom-2.5 right-2.5 md:hidden z-10 px-2 py-0.5 rounded-sm bg-stone-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono font-medium text-stone-300 tracking-wider pointer-events-none select-none"
            aria-hidden="true"
          >
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="hidden md:flex gap-2 sm:gap-2.5 overflow-x-auto pb-1 max-w-full justify-center">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onSelectImage(img)}
              className={`w-11 h-11 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-sm border flex-shrink-0 relative overflow-hidden bg-stone-900 p-1 transition-all cursor-pointer ${
                selectedImage === img
                  ? "border-amatu-gold ring-2 ring-amatu-gold/30"
                  : "border-white/10 opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`${name} miniatura ${idx + 1}`}
                fill
                sizes="52px"
                className="object-contain"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
