import Nav from "./components/Nav/Nav";

import Product from "./components/Product/Product";
import { ProductProvider } from "./context/ProductContext/ProductProvider";

const App = () => {
  return (
    <ProductProvider>
      <Nav />
      <Product />
    </ProductProvider>
  );
};
export default App;
