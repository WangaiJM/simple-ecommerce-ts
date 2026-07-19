import Plus from "../../assets/images/icon-plus.svg";
import Minus from "../../assets/images/icon-minus.svg";
import Cart from "../../assets/images/icon-cart.svg";

import Lightbox from "../Lightbox/Lightbox";
import type { FC } from "react";
import "./product.scss";

const Product: FC = () => {
  return (
    <main className="product">
      <div className="product-head">
        <Lightbox />
      </div>
      <div className="product-body">
        <div className="product-body__info">
          <div className="product-body__info-title">
            <h3>Sneaker Company</h3>
            <h2>Fall Limited Edition Sneakers</h2>
          </div>
          <div className="product-body__info-content">
            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
          </div>
        </div>
        <div className="product-body__price">
          <div className="amount">
            <h2 className="current-price">$125</h2>
            <h3 className="previous-price">$250</h3>
            <h3 className="discount-rate">50%</h3>
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
          <button className="btn btn-primary">
            <img src={Cart} alt="" />
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
};
export default Product;
