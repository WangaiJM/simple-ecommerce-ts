import { useState, type PropsWithChildren } from "react";
import { type Cart, CartContext } from "./CartContext";

export function CartProvider({ children }: PropsWithChildren) {
  const [cart, setCart] = useState<Cart[]>([]);
  // add to cart
  const addCart = (item: Cart) => {
    setCart((prev) => {
      const existing = prev.find((e) => e.id === item.id);

      if (existing) {
        return prev.map((e) =>
          e.id === item.id ? { ...e, quantity: e.quantity + item.quantity } : e,
        );
      }

      return [...prev, item];
    });
  };
  //   delete Item
  const deleteCart = (id: number) => {
    setCart((prev) => prev.filter((e) => e.id !== id));
  };
  //   ClearCart
  const clearCart = () => setCart([]);
  return (
    <CartContext.Provider
      value={{ cart, setCart, addCart, deleteCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
