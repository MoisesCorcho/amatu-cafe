"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PRODUCTS } from "@/data/products";
import { Product } from "@/types";
import { ProductCard } from "@/components/features/product-card";
import { QuickViewModal } from "@/components/features/quick-view-modal";

export function CatalogSection() {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  return (
    <section
      id="catalogo"
      className="py-16 md:py-24 bg-amatu-charcoal relative z-10 -mt-[2px] overflow-hidden"
    >
      {/* Decorative Background Elements (Artisanal Coffee Beans) */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <div className="absolute -top-12 -right-16 sm:-right-10 w-72 sm:w-88 md:w-[420px] h-auto opacity-[0.14] rotate-12">
          <Image
            src="/assets/coffeeBeanNuevo.svg"
            alt=""
            width={420}
            height={420}
            className="w-full h-auto"
          />
        </div>
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 -left-20 sm:-left-12 w-80 sm:w-96 md:w-[460px] h-auto opacity-[0.12] -rotate-45">
          <Image
            src="/assets/coffeeBeanNuevo.svg"
            alt=""
            width={460}
            height={460}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-xs uppercase font-bold tracking-widest text-amatu-gold">
            Nuestra Selección Directa
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Lleva la experiencia de Amatu a tu mesa
          </h2>
          <p className="text-stone-400 text-sm sm:text-base">
            Elige tus productos, agrégalos al carrito y completa tu pedido con
            envío a cualquier ciudad de Colombia directamente por WhatsApp.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </section>
  );
}
