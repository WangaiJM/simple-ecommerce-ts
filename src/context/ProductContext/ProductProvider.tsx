import { useEffect, useState, type PropsWithChildren } from "react";
import { ProductContext, type Products } from "./ProductContext";

export function ProductProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
