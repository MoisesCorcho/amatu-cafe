"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/types";
import { useCart } from "@/context/cart-context";
import { Eye, Plus } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { addToCart, formatCOP } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants.length > 0 ? product.variants[0] : product.defaultVariant
  );

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: selectedVariant,
      image: product.images[0],
      quantity: 1,
    });
  };

  const hasSecondaryImage = product.images.length > 1;
  const isCover = product.imageFit === "cover";

  return (
    <div className="bg-amatu-deep border border-white/10 rounded-3xl overflow-hidden hover:border-amatu-gold/50 transition-all duration-300 flex flex-col justify-between group shadow-xl">
      <div className="p-6 relative flex-1 flex flex-col justify-between">
        <div>
          {/* Product Image Area with Hover Switch */}
          <div
            className={`relative h-64 flex items-center justify-center ${
              isCover ? "" : "p-4"
            } bg-white/[0.02] rounded-2xl mb-4 cursor-pointer overflow-hidden group/img`}
            onClick={() => onQuickView(product)}
            title="Haz clic para ver detalles y fotos"
          >
            {/* Floating Badge */}
            <span
              className={`absolute top-3 right-3 z-20 pointer-events-none bg-stone-950/85 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border shadow-md ${product.badgeColor}`}
            >
              {product.badge}
            </span>

            {/* Primary Image */}
            <div className="relative w-full h-full">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className={`transition-all duration-500 ease-out group-hover:scale-105 ${
                  isCover ? "object-cover" : "object-contain"
                } ${hasSecondaryImage ? "group-hover:opacity-0" : ""}`}
              />
            </div>

            {/* Secondary Image on Hover */}
            {hasSecondaryImage && (
              <div
                className={`absolute inset-0 w-full h-full ${
                  isCover ? "" : "p-4"
                } opacity-0 transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-100`}
              >
                <Image
                  src={product.images[1]}
                  alt={`${product.name} vista secundaria`}
                  fill
                  className={isCover ? "object-cover" : "object-contain"}
                />
              </div>
            )}

            {/* Quick View Floating Pill */}
            <div className="absolute inset-x-0 bottom-3 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900/90 text-amatu-gold text-[11px] font-bold tracking-wider uppercase border border-amatu-gold/40 shadow-lg backdrop-blur-sm">
                <Eye className="w-3.5 h-3.5" />
                Vista Rápida
              </span>
            </div>
          </div>

          <div>
            <h3
              className="font-serif text-2xl font-bold text-white hover:text-amatu-gold cursor-pointer transition-colors"
              onClick={() => onQuickView(product)}
            >
              {product.name}
            </h3>
            <p className="text-xs text-amatu-gold mt-1 font-medium">
              {product.subtitle}
            </p>
            <p className="text-stone-400 text-xs mt-3 leading-relaxed line-clamp-3">
              {product.description}
            </p>
          </div>
        </div>

        {/* Variants Selector */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <label className="block text-xs text-stone-400 mb-1.5 font-medium">
            {product.variantsLabel || "Presentación:"}
          </label>
          {product.variants.length > 1 ? (
            <div className="grid grid-cols-2 gap-2">
              {product.variants.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setSelectedVariant(v)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                    selectedVariant === v
                      ? "border-amatu-gold bg-amatu-gold text-stone-950 font-bold"
                      : "border-white/10 text-stone-300 hover:border-amatu-gold"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          ) : (
            <div className="py-1.5 px-3 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-stone-300 text-center">
              {product.variants[0] || product.defaultVariant}
            </div>
          )}
        </div>
      </div>

      {/* Card Footer: Price & CTA */}
      <div className="p-6 bg-white/[0.02] border-t border-white/10 flex items-center justify-between">
        <div>
          <span className="block text-[10px] text-stone-500 uppercase tracking-wider">
            Precio
          </span>
          <span className="text-xl font-bold text-white font-serif">
            {formatCOP(product.price)}
          </span>
        </div>
        <button
          type="button"
          onClick={handleAddToCart}
          className="inline-flex items-center gap-2 bg-amatu-gold hover:bg-amatu-gold-light text-stone-950 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all active:scale-95 cursor-pointer shadow-md shadow-amatu-gold/10"
        >
          <Plus className="w-4 h-4" />
          <span>Agregar</span>
        </button>
      </div>
    </div>
  );
}
