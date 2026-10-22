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
  sendOrderToWhatsApp: (name: string, city: string, address?: string) => void;
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

  const sendOrderToWhatsApp = (name: string, city: string, address?: string) => {
    if (cart.length === 0) return;

    const customerName = name.trim() || "No especificado";
    const customerCity = city.trim() || "No especificada";
    const customerAddress = address?.trim() || "";

    const lines: string[] = [
      "*NUEVO PEDIDO — AMATU CAFÉ*",
      "────────────────────────────",
      "*Detalle de la orden:*",
      "",
    ];

    cart.forEach((item) => {
      lines.push(`- *${item.quantity}x* ${item.name}`);
      lines.push(`  * Presentación: ${item.variant}`);
      lines.push(`  * Subtotal: ${formatCOP(item.price * item.quantity)}`);
      lines.push("");
    });

    lines.push("────────────────────────────");
    lines.push("*Resumen:*");
    lines.push(`- *Subtotal productos:* ${formatCOP(totalPrice)}`);
    lines.push(`- *Envío:* Por coordinar según transportadora (desde Huila)`);
    lines.push(`- *TOTAL PRODUCTOS:* *${formatCOP(totalPrice)}*`);
    lines.push("");
    lines.push("────────────────────────────");
    lines.push("*Datos de entrega:*");
    lines.push(`- *Cliente:* ${customerName}`);
    lines.push(`- *Destino:* ${customerCity}`);
    if (customerAddress) {
      lines.push(`- *Dirección:* ${customerAddress}`);
    } else {
      lines.push(`- *Dirección:* Por coordinar en el chat`);
    }
    lines.push("");
    lines.push("────────────────────────────");
    lines.push(
      "¡Hola! Por favor me confirman disponibilidad, valor del flete y cuentas para transferencia (Bancolombia / Nequi). ¡Muchas gracias!"
    );

    const message = lines.join("\n");
    const url = `https://api.whatsapp.com/send?phone=${CONTACT_INFO.whatsappNumber}&text=${encodeURIComponent(
      message
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
