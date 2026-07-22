import Plus from "../../assets/images/icon-plus.svg";
import Minus from "../../assets/images/icon-minus.svg";
import Cart from "../../assets/images/icon-cart.svg";

import Lightbox from "../Lightbox/Lightbox";
import "./product.scss";

import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext/ProductContext";

const Product = () => {
  const context = useContext(ProductContext);

  if (!context) return null;

  const { products } = context;

  return (
    <main className="product">
      <div className="product-head">
        <Lightbox />
      </div>
      <div>
        {products.map((product, index) => {
          let currentPrice: number = (product.discount / 100) * product.price;
          return (
            <div key={index} className="product-body">
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
                <button className="btn">
                  <a href="#!">
                    <img src={Minus} alt="" />
                  </a>
                  <p>0</p>
                  <a href="#!">
                    <img src={Plus} alt="" />
                  </a>
                </button>
                <button className="btn btn-primary" aria-label="Add to Cart">
                  <img src={Cart} alt="" />
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default Product;
