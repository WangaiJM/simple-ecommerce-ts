import "./cart.scss";
import removeIcon from "../../assets/images/icon-delete.svg";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";

const Cart = () => {
  const cc = useContext(CartContext);

  if (!cc) return null;

  const { cart, deleteCart, clearCart } = cc;
  const isEmpty = cart.length === 0;

  return (
    <section className="cart">
      <div className="cart-head">
        <h2>Cart</h2>
      </div>
      <div className="cart-body">
        {isEmpty ? (
          <p>Your Cart is empty</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <div className="cart-full">
                  <div className="cart-full__header">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="cart-full__body">
                    <h2 className="title">{item.title}</h2>
                    <p>
                      <span className="price">${item.price}</span>
                      <span className="quantity">x {item.quantity}</span>
                      <span className="total">
                        ${item.price * item.quantity}
                      </span>
                    </p>
                  </div>
                  <div className="cart-full__footer">
                    <button
                      type="button"
                      onClick={() => deleteCart(item.id)}
                      aria-label={`Remove ${item.title}`}
                    >
                      <img src={removeIcon} alt="" />
                    </button>
                  </div>
                </div>
              </li>
            ))}

            <button
              className="btn btn-primary"
              onClick={clearCart}
              type="button"
            >
              Checkout
            </button>
          </ul>
        )}
      </div>
    </section>
  );
};
export default Cart;
