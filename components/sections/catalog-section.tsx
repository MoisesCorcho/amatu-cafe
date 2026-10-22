import React from "react";
import { PRODUCTS } from "@/data/products";
import { CATALOG_CONTENT } from "@/data/catalog";
import { CatalogBackground } from "./catalog/catalog-background";
import { CatalogHeader } from "./catalog/catalog-header";
import { CatalogGrid } from "./catalog/catalog-grid";

export function CatalogSection() {
  return (
    <section
      id="catalogo"
      aria-labelledby="catalog-heading"
      className="pt-20 sm:pt-24 md:pt-28 pb-16 md:pb-24 bg-amatu-charcoal relative z-10 -mt-[2px] overflow-hidden scroll-mt-0"
    >
      <CatalogBackground />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <CatalogHeader content={CATALOG_CONTENT} />
        <CatalogGrid products={PRODUCTS} />
      </div>
    </section>
  );
}
