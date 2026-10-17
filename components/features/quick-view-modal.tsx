"use client";

import React, { useState } from "react";
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
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

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-amatu-deep border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-stone-900/80 border border-white/10 text-stone-300 hover:text-white hover:bg-stone-800 flex items-center justify-center transition-all cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Column 1: Image Gallery */}
        <div className="w-full md:w-1/2 p-6 md:p-8 bg-white/[0.02] border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between">
          <div className="relative h-64 sm:h-80 w-full flex items-center justify-center rounded-2xl overflow-hidden bg-stone-950/40 p-4">
            <span
              className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border z-10 ${product.badgeColor}`}
            >
              {product.badge}
            </span>
            {selectedImage && (
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage}
                  alt={product.name}
                  fill
                  className="object-contain product-shadow transition-transform duration-300"
                />
              </div>
            )}
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-2.5 mt-4 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImage(img)}
                  className={`w-14 h-14 rounded-xl border flex-shrink-0 relative overflow-hidden bg-stone-900 p-1 transition-all cursor-pointer ${
                    selectedImage === img
                      ? "border-amatu-gold ring-2 ring-amatu-gold/30"
                      : "border-white/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} miniatura ${idx + 1}`}
                    fill
                    className="object-contain"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Column 2: Product Details & Actions */}
        <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto space-y-6">
          <div>
            <h2
              id="qv-title"
              className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight"
            >
              {product.name}
            </h2>
            <p className="text-xs text-stone-400 mt-1">{product.subtitle}</p>
            <div className="mt-3">
              <span className="text-2xl font-bold text-amatu-gold font-serif">
                {formatCOP(product.price)}
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            {product.description}
          </p>

          {/* Specifications Grid */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2 text-xs">
            <h4 className="font-bold text-white tracking-wide uppercase text-[10px] text-amatu-gold">
              Ficha Técnica
            </h4>
            <div className="space-y-1.5 divide-y divide-white/5">
              {product.specs.map((spec, i) => (
                <div key={i} className="flex justify-between pt-1 gap-2">
                  <span className="text-stone-400">{spec.label}:</span>
                  <span className="text-stone-200 font-semibold text-right">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Variants Selector */}
          {product.variants.length > 0 && (
            <div className="space-y-2">
              <label className="text-xs font-semibold text-stone-300 block">
                {product.variantsLabel || "Selecciona una opción:"}
              </label>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setSelectedVariant(v)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
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

          {/* Quantity & Add to Cart */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-white/10 rounded-xl bg-white/5 p-1">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-white/20 font-bold text-sm cursor-pointer"
                  aria-label="Restar una unidad"
                >
                  -
                </button>
                <span className="w-10 text-center text-sm font-bold text-white">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-white/20 font-bold text-sm cursor-pointer"
                  aria-label="Sumar una unidad"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                disabled={addedNotice}
                className={`flex-1 py-3 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
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
  if (!product) return null;
  return <QuickViewModalDialog key={product.id} product={product} onClose={onClose} />;
}
