import { createContext } from "react";

export type Cart = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
};

export type CartContextType = {
  cart: Cart[];
  addCart: (item: Cart) => void;
  deleteCart: (id: number) => void;
  clearCart: () => void;
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
};

export const CartContext = createContext<CartContextType | null>(null);
