"use client";

import { Check, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface QuickViewActionsProps {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
  onAddToCart: () => void;
  isSuccess: boolean;
}

export function QuickViewActions({
  quantity,
  onDecrease,
  onIncrease,
  onAddToCart,
  isSuccess,
}: QuickViewActionsProps) {
  return (
    <div className="p-3 sm:p-4 md:p-5 lg:p-6 pt-3 border-t border-white/10 bg-amatu-deep/95 backdrop-blur-md flex-shrink-0">
      <div className="flex items-center gap-2.5 sm:gap-3">
        <div className="flex items-center border border-white/10 rounded-sm bg-white/5 p-0.5 sm:p-1">
          <button
            type="button"
            onClick={onDecrease}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-sm bg-white/5 border border-white/10 text-stone-200 hover:text-white hover:border-amatu-gold/50 flex items-center justify-center font-bold text-xs sm:text-sm transition-all cursor-pointer"
            aria-label="Restar una unidad"
          >
            -
          </button>
          <span className="w-8 sm:w-10 text-center text-xs sm:text-sm font-bold text-white">
            {quantity}
          </span>
          <button
            type="button"
            onClick={onIncrease}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-sm bg-white/5 border border-white/10 text-stone-200 hover:text-white hover:border-amatu-gold/50 flex items-center justify-center font-bold text-xs sm:text-sm transition-all cursor-pointer"
            aria-label="Sumar una unidad"
          >
            +
          </button>
        </div>

        <Button
          type="button"
          onClick={onAddToCart}
          disabled={isSuccess}
          variant="cherry"
          className={`flex-1 py-2.5 sm:py-3 px-4 sm:px-6 rounded-sm font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
            isSuccess
              ? "!bg-emerald-600 !text-white !shadow-none !opacity-100"
              : ""
          }`}
        >
          {isSuccess ? (
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
        </Button>
      </div>
    </div>
  );
}
