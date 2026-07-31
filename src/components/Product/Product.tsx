import Plus from "../../assets/images/icon-plus.svg";
import Minus from "../../assets/images/icon-minus.svg";
import Cart from "../../assets/images/icon-cart.svg";

import Lightbox from "../Lightbox/Lightbox";
import "./product.scss";

import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext/ProductContext";
import { CartContext } from "../../context/CartContext/CartContext";

const Product = () => {
  const context = useContext(ProductContext);
  const cartContext = useContext(CartContext);

  if (!context || !cartContext) return null;

  const { products } = context;
  const { addCart } = cartContext;
  const [quantity, setQuantity] = useState<number>(0);

  const product = products[0];

  if (!product) return null;

  const currentPrice = (product.discount / 100) * product.price;

  const handleAddToCart = () => {
    if (quantity <= 0) return;

    addCart({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity,
      image: product.images[0]?.main ?? "",
    });

    setQuantity(0);
  };

  return (
    <main className="product">
      <div className="product-head">
        <Lightbox />
      </div>
      <div>
        <div className="product-body">
          <div className="product-body__info">
            <div className="product-body__info-title">
              <h3>{product.company}</h3>
              <h2>{product.title}</h2>
            </div>
            <div className="product-body__info-content">
              <p>{product.description}</p>
            </div>
          </div>
          <div className="product-body__price">
            <div className="amount">
              <h2 className="current-price">{`${currentPrice}`}</h2>
              <h3 className="previous-price">{`${product.price}`}</h3>
              <h3 className="discount-rate">{`${product.discount}%`}</h3>
            </div>
          </div>
          <div className="product-body__action">
            <div className="btn">
              <button
                type="button"
                className="btn-q"
                onClick={() => setQuantity((prev) => Math.max(0, prev - 1))}
              >
                <img src={Minus} alt="Decrease quantity" />
              </button>
              <p>{quantity}</p>
              <button
                type="button"
                className="btn-q"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                <img src={Plus} alt="Increase quantity" />
              </button>
            </div>
            <button
              className="btn btn-primary"
              aria-label="Add to Cart"
              onClick={handleAddToCart}
              type="button"
            >
              <img src={Cart} alt="" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Product;
