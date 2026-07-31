import Nav from "./components/Nav/Nav";

import Product from "./components/Product/Product";
import { ProductProvider } from "./context/ProductContext/ProductProvider";
import { CartProvider } from "./context/CartContext/CartProvider";

const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <Nav />
        <Product />
      </CartProvider>
    </ProductProvider>
  );
};
export default App;
