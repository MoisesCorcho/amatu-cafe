"use client";

export interface QuickViewVariantsProps {
  variants: string[];
  label?: string;
  selectedVariant: string;
  onSelectVariant: (variant: string) => void;
}

export function QuickViewVariants({
  variants,
  label = "Selecciona una opción:",
  selectedVariant,
  onSelectVariant,
}: QuickViewVariantsProps) {
  if (!variants || variants.length === 0) return null;

  return (
    <div className="space-y-1.5 pt-1">
      <label className="text-xs font-semibold text-stone-300 block">
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {variants.map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => onSelectVariant(v)}
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
  );
}
