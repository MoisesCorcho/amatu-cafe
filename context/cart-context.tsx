"use client";

import React, { createContext, useContext, useState, useMemo } from "react";
import { CartItem } from "@/types";
import { CONTACT_INFO } from "@/data/navigation";

interface CartContextType {
  cart: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (item: {
    id: string;
    name: string;
    price: number;
    variant: string;
    image?: string;
    quantity?: number;
  }) => void;
  updateQuantity: (id: string, variant: string, delta: number) => void;
  removeItem: (id: string, variant: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  formatCOP: (value: number) => string;
  sendOrderToWhatsApp: (name: string, city: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addToCart = ({
    id,
    name,
    price,
    variant,
    image,
    quantity = 1,
  }: {
    id: string;
    name: string;
    price: number;
    variant: string;
    image?: string;
    quantity?: number;
  }) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === id && item.variant === variant
      );
      if (existing) {
        return prev.map((item) =>
          item.id === id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { id, name, price, variant, image, quantity }];
    });
    setIsOpen(true);
  };

  const updateQuantity = (id: string, variant: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id && item.variant === variant) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const removeItem = (id: string, variant: string) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === id && item.variant === variant))
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  const totalPrice = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  const formatCOP = (value: number) => {
    return "$" + value.toLocaleString("es-CO") + " COP";
  };

  const sendOrderToWhatsApp = (name: string, city: string) => {
    if (cart.length === 0) return;

    const customerName = name.trim() || "No especificado";
    const customerCity = city.trim() || "No especificada";

    let text = `¡Hola Amatu Café! ☕\nQuiero realizar el siguiente pedido:\n\n`;
    cart.forEach((item) => {
      text += `• ${item.quantity}x ${item.name} (${item.variant}) - ${formatCOP(
        item.price * item.quantity
      )}\n`;
    });

    text += `\n📦 *Total estimado:* ${formatCOP(totalPrice)}\n`;
    text += `👤 *Cliente:* ${customerName}\n`;
    text += `📍 *Dirección / Ciudad:* ${customerCity}\n\n`;
    text += `¿Me confirman disponibilidad y medios de pago? ¡Muchas gracias!`;

    const url = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isOpen,
        openCart,
        closeCart,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        totalItems,
        totalPrice,
        formatCOP,
        sendOrderToWhatsApp,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
