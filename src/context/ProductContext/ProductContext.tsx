import { createContext } from "react";

export type Images = {
  id: number;
  main: string;
  thumbnail: string;
};

export type Products = {
  id: number;
  company: string;
  title: string;
  description: string;
  price: number;
  discount: number;
  images: Images[];
};

export type ProductContextType = {
  products: Products[];
  setProducts: React.Dispatch<React.SetStateAction<Products[]>>;
};

export const ProductContext = createContext<ProductContextType | null>(null);
