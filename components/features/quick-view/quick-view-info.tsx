"use client";

import { useState } from "react";
import { ProductSpec } from "@/types";

export interface QuickViewInfoProps {
  name: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  price: number;
  description: string;
  specs: ProductSpec[];
  formatPrice: (val: number) => string;
}

export function QuickViewInfo({
  name,
  subtitle,
  badge,
  badgeColor,
  price,
  description,
  specs,
  formatPrice,
}: QuickViewInfoProps) {
  const [activeTab, setActiveTab] = useState<"desc" | "specs">("desc");

  return (
    <div className="space-y-4">
      {/* Header: Badge, Title, Subtitle, Price with safe padding against Close button */}
      <div className="pr-10 sm:pr-12 md:pr-14 space-y-2">
        <div>
          <span
            className={`inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm border shadow-md ${badgeColor}`}
          >
            {badge}
          </span>
        </div>
        <h2
          id="qv-title"
          className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight"
        >
          {name}
        </h2>
        <p className="text-xs text-stone-400">{subtitle}</p>
        <div className="pt-1">
          <span className="text-xl sm:text-2xl font-bold text-amatu-gold font-serif">
            {formatPrice(price)}
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
        {specs.length > 0 && (
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
            {description}
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[190px] overflow-y-auto overscroll-contain custom-scrollbar pr-1 animate-in fade-in duration-150">
            {specs.map((spec, i) => (
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
    </div>
  );
}
