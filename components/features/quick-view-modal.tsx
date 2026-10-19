"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Product } from "@/types";
import { useCart } from "@/context/cart-context";
import { X, Check, ShoppingBag } from "lucide-react";
import Image from "next/image";

interface QuickViewModalProps {
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
  const [addedNotice, setAddedNotice] = useState(false);
  const [activeTab, setActiveTab] = useState<"desc" | "specs">("desc");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
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
    setAddedNotice(true);
    setTimeout(() => {
      setAddedNotice(false);
      onClose();
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6"
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

      {/* Modal / Bottom Sheet Card */}
      <div className="relative w-full max-w-4xl max-h-[88dvh] sm:max-h-[82dvh] md:max-h-[560px] lg:max-h-[580px] bg-amatu-deep border border-white/10 rounded-t-[24px] sm:rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-0 z-10 animate-in fade-in duration-200 slide-in-from-bottom-8 sm:slide-in-from-bottom-0 sm:zoom-in-95">
        {/* Mobile drag handle affordance */}
        <div
          className="w-full flex justify-center pt-2.5 pb-1 md:hidden select-none cursor-pointer"
          onClick={onClose}
          aria-hidden="true"
        >
          <div className="w-12 h-1 rounded-full bg-white/20 hover:bg-white/40 transition-colors" />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-sm bg-stone-900/80 border border-white/10 text-stone-300 hover:text-white hover:bg-stone-800 flex items-center justify-center transition-all cursor-pointer shadow-md"
          aria-label="Cerrar modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Column 1: Image Gallery */}
        <div className="w-full md:w-1/2 p-4 sm:p-5 md:p-6 lg:p-7 bg-white/[0.02] border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-center items-center gap-3 sm:gap-4 flex-shrink-0 md:min-h-0">
          <div className="relative h-44 sm:h-52 md:h-64 lg:h-72 w-full flex items-center justify-center rounded-xl overflow-hidden bg-stone-950/40 p-3 sm:p-4">
            {selectedImage && (
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
                  className="object-contain product-shadow transition-transform duration-300"
                  priority
                />
              </div>
            )}
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-2 sm:gap-2.5 overflow-x-auto pb-1 max-w-full justify-center">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImage(img)}
                  className={`w-11 h-11 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-lg border flex-shrink-0 relative overflow-hidden bg-stone-900 p-1 transition-all cursor-pointer ${
                    selectedImage === img
                      ? "border-amatu-gold ring-2 ring-amatu-gold/30"
                      : "border-white/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} miniatura ${idx + 1}`}
                    fill
                    sizes="52px"
                    className="object-contain"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Column 2: Details with Segmented Tabs & Sticky Bottom Action */}
        <div className="w-full md:w-1/2 flex flex-col flex-1 min-h-0 bg-amatu-deep">
          {/* Scrollable details container */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 md:p-6 lg:p-7 space-y-4 overscroll-contain custom-scrollbar">
            {/* Header: Badge, Title, Subtitle, Price with safe padding against Close button */}
            <div className="pr-10 sm:pr-12 md:pr-14 space-y-2">
              <div>
                <span
                  className={`inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm border shadow-md ${product.badgeColor}`}
                >
                  {product.badge}
                </span>
              </div>
              <h2
                id="qv-title"
                className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight"
              >
                {product.name}
              </h2>
              <p className="text-xs text-stone-400">{product.subtitle}</p>
              <div className="pt-1">
                <span className="text-xl sm:text-2xl font-bold text-amatu-gold font-serif">
                  {formatCOP(product.price)}
                </span>
              </div>
            </div>

            {/* Segmented Control / Tabs */}
            <div className="flex items-center gap-2 border-b border-white/10 pb-1 text-xs">
              <button
                type="button"
                onClick={() => setActiveTab("desc")}
                className={`pb-2 px-3 font-semibold transition-all cursor-pointer border-b-2 -mb-[5px] ${
                  activeTab === "desc"
                    ? "border-amatu-gold text-amatu-gold font-bold"
                    : "border-transparent text-stone-400 hover:text-white"
                }`}
              >
                Descripción
              </button>
              {product.specs.length > 0 && (
                <button
                  type="button"
                  onClick={() => setActiveTab("specs")}
                  className={`pb-2 px-3 font-semibold transition-all cursor-pointer border-b-2 -mb-[5px] ${
                    activeTab === "specs"
                      ? "border-amatu-gold text-amatu-gold font-bold"
                    : "border-transparent text-stone-400 hover:text-white"
                  }`}
                >
                  Ficha Técnica
                </button>
              )}
            </div>

            {/* Tab Content */}
            <div className="min-h-[80px]">
              {activeTab === "desc" ? (
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed animate-in fade-in duration-150">
                  {product.description}
                </p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[190px] overflow-y-auto overscroll-contain custom-scrollbar pr-1 animate-in fade-in duration-150">
                  {product.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="bg-white/[0.04] border border-white/10 rounded-sm p-2 sm:p-2.5 flex flex-col justify-between"
                    >
                      <span className="text-[10px] uppercase font-bold tracking-wider text-amatu-gold/90">
                        {spec.label}
                      </span>
                      <span className="text-xs text-stone-200 font-medium mt-0.5 leading-snug">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Variants Selector */}
            {product.variants.length > 0 && (
              <div className="space-y-1.5 pt-1">
                <label className="text-xs font-semibold text-stone-300 block">
                  {product.variantsLabel || "Selecciona una opción:"}
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setSelectedVariant(v)}
                      className={`px-3 py-1.5 rounded-sm text-xs font-semibold border transition-all cursor-pointer ${
                        selectedVariant === v
                          ? "bg-amatu-gold text-stone-950 border-amatu-gold font-bold shadow-md shadow-amatu-gold/20"
                          : "border-white/10 text-stone-300 hover:border-amatu-gold"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky / Anchored Actions Footer */}
          <div className="p-3 sm:p-4 md:p-5 lg:p-6 pt-3 border-t border-white/10 bg-amatu-deep/95 backdrop-blur-md flex-shrink-0">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="flex items-center border border-white/10 rounded-sm bg-white/5 p-0.5 sm:p-1">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-sm bg-white/10 text-white flex items-center justify-center hover:bg-white/20 font-bold text-xs sm:text-sm cursor-pointer"
                  aria-label="Restar una unidad"
                >
                  -
                </button>
                <span className="w-8 sm:w-10 text-center text-xs sm:text-sm font-bold text-white">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-sm bg-white/10 text-white flex items-center justify-center hover:bg-white/20 font-bold text-xs sm:text-sm cursor-pointer"
                  aria-label="Sumar una unidad"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                disabled={addedNotice}
                className={`flex-1 py-2.5 sm:py-3 px-4 sm:px-6 rounded-sm font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  addedNotice
                    ? "bg-emerald-600 text-white"
                    : "bg-amatu-gold text-stone-950 hover:bg-amatu-gold-light active:scale-95 shadow-lg shadow-amatu-gold/20"
                }`}
              >
                {addedNotice ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>¡Agregado al Carrito!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Agregar al Carrito</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!product || !mounted || typeof document === "undefined") return null;

  return createPortal(
    <QuickViewModalDialog key={product.id} product={product} onClose={onClose} />,
    document.body
  );
}
