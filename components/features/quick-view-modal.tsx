"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { useCart } from "@/context/cart-context";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import {
  QuickViewGallery,
  QuickViewInfo,
  QuickViewVariants,
  QuickViewActions,
} from "@/components/features/quick-view";

export interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

function QuickViewModalDialog({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const { addToCart, formatCOP } = useCart();
  const [selectedImage, setSelectedImage] = useState<string>(
    product.images[0] || ""
  );
  const [selectedVariant, setSelectedVariant] = useState<string>(
    product.variants.length > 0
      ? product.variants[0]
      : product.defaultVariant || ""
  );
  const [quantity, setQuantity] = useState<number>(1);

  useScrollLock(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: selectedVariant,
      image: selectedImage || product.images[0],
      quantity,
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="qv-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal / Dialog Card */}
      <div className="relative w-full max-w-4xl max-h-[90dvh] sm:max-h-[85dvh] md:max-h-[560px] lg:max-h-[580px] bg-amatu-deep border border-white/10 rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-0 z-10 animate-in fade-in duration-200 zoom-in-95">
        {/* Close Button */}
        <Button
          type="button"
          onClick={onClose}
          variant="icon"
          aria-label="Cerrar modal"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-10 sm:h-10 !p-0 shadow-md"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>

        {/* Column 1: Image Gallery */}
        <QuickViewGallery
          name={product.name}
          images={product.images}
          selectedImage={selectedImage}
          onSelectImage={setSelectedImage}
        />

        {/* Column 2: Details with Segmented Tabs & Sticky Bottom Action */}
        <div className="w-full md:w-1/2 flex flex-col flex-1 min-h-0 bg-amatu-deep">
          {/* Scrollable details container */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 md:p-6 lg:p-7 space-y-4 overscroll-contain custom-scrollbar">
            <QuickViewInfo
              name={product.name}
              subtitle={product.subtitle}
              badge={product.badge}
              badgeColor={product.badgeColor}
              price={product.price}
              description={product.description}
              specs={product.specs}
              formatPrice={formatCOP}
            />

            <QuickViewVariants
              variants={product.variants}
              label={product.variantsLabel}
              selectedVariant={selectedVariant}
              onSelectVariant={setSelectedVariant}
            />
          </div>

          {/* Sticky / Anchored Actions Footer */}
          <QuickViewActions
            quantity={quantity}
            onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
            onIncrease={() => setQuantity((q) => q + 1)}
            onAddToCart={handleAddToCart}
            isSuccess={false}
          />
        </div>
      </div>
    </div>
  );
}

const emptySubscribe = () => () => {};

export function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!product || !isMounted || typeof document === "undefined") return null;

  return createPortal(
    <QuickViewModalDialog key={product.id} product={product} onClose={onClose} />,
    document.body
  );
}
