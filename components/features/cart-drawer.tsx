"use client";

import React, { useState } from "react";
import { useCart } from "@/context/cart-context";
import { X, Trash2, Coffee, MessageCircle } from "lucide-react";
import Image from "next/image";

export function CartDrawer() {
  const {
    cart,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    totalPrice,
    totalItems,
    formatCOP,
    sendOrderToWhatsApp,
  } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [customerCity, setCustomerCity] = useState("");

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    sendOrderToWhatsApp(customerName, customerCity);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-md bg-amatu-deep border-l border-white/10 z-50 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Carrito de Compras"
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-amatu-gold/10 border border-amatu-gold/30 flex items-center justify-center text-amatu-gold">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-white">Tu Carrito</h3>
              <p className="text-xs text-stone-400">
                {totalItems} {totalItems === 1 ? "artículo" : "artículos"} seleccionados
              </p>
            </div>
          </div>
          <button
            onClick={closeCart}
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-stone-400 hover:text-white hover:bg-white/10 flex items-center justify-center transition-all cursor-pointer"
            aria-label="Cerrar Carrito"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 text-stone-500">
              <Coffee className="w-12 h-12 mx-auto stroke-1 mb-3 text-stone-600" />
              <p className="text-sm font-medium text-stone-300">Tu carrito está vacío.</p>
              <p className="text-xs text-stone-500 mt-1">
                Elige tu café o accesorio favorito del catálogo.
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={`${item.id}-${item.variant}`}
                className="p-3.5 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between gap-3"
              >
                {item.image && (
                  <div className="w-12 h-12 relative flex-shrink-0 bg-stone-900 rounded-lg overflow-hidden border border-white/5">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-white truncate">
                    {item.name}
                  </h4>
                  <span className="text-xs text-amatu-gold">
                    {item.variant} • {formatCOP(item.price)}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <button
                    onClick={() => updateQuantity(item.id, item.variant, -1)}
                    className="w-7 h-7 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all font-bold text-xs cursor-pointer"
                    aria-label="Disminuir cantidad"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold text-white w-6 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.variant, 1)}
                    className="w-7 h-7 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all font-bold text-xs cursor-pointer"
                    aria-label="Aumentar cantidad"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="text-stone-500 hover:text-red-400 p-1.5 transition-colors ml-1 cursor-pointer"
                    title="Eliminar ítem"
                    aria-label="Eliminar del carrito"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout Form */}
        {cart.length > 0 && (
          <form onSubmit={handleCheckout} className="p-6 border-t border-white/10 bg-amatu-charcoal/60 space-y-4">
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Tu Nombre completo"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amatu-gold transition-colors"
                required
              />
              <input
                type="text"
                placeholder="Ciudad / Municipio de envío"
                value={customerCity}
                onChange={(e) => setCustomerCity(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amatu-gold transition-colors"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm pt-2">
              <span className="text-stone-400">Total Estimado:</span>
              <span className="text-lg font-bold text-amatu-gold font-serif">
                {formatCOP(totalPrice)}
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-[#25D366] hover:bg-[#20ba59] text-stone-950 font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all active:scale-[0.98] cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Completar Pedido por WhatsApp</span>
            </button>
            <p className="text-[11px] text-center text-stone-500">
              Pago contra entrega o transferencia directa con el productor.
            </p>
          </form>
        )}
      </div>
    </>
  );
}
