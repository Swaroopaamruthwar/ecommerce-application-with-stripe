
import { useCartContext } from "../context/cart_context";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import FormatPrice from "../Helpers/FormatPrice";
import axios from "axios"
import "./cart.css"
const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  if (cart.length === 0) {
    return (
      <div className="empty-div">
        <h3>No Cart in Item </h3>
      </div>
    );
  }
  const handleCheckout = () => {
    console.log(cart)
    axios.post(`http://localhost:5000/api/stripe/create-checkout-session`, {
      cart
    }).then(res => {
      if (res.data.url) {
        window.location.href = res.data.url
      }
    }).catch((err) => console.log(err.message))
  }

  return (
    <section>
      <div className="container">
        <div className="cart_heading grid grid-five-column">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr />
        <div className="cart-item">
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
        <hr />
        <div className="cart-two-button">
          <NavLink to="/products">
            <Button> continue Shopping </Button>
          </NavLink>
          <Button className="btn btn-clear" onClick={clearCart}>
            clear cart
          </Button>
        </div>

        {/* order total_amount */}
        <div className="order-total--amount">
          <div className="order-total--subdata">
            <div>
              <p>subtotal:</p>
              <p>
                <FormatPrice price={total_price} />
              </p>
            </div>
            <div>
              <p>shipping fee:</p>
              <p>
                <FormatPrice price={shipping_fee} />
              </p>
            </div>
            <hr />
            <div>
              <p>order total:</p>
              <p>
                <FormatPrice price={shipping_fee + total_price} />
              </p>
            </div>
            <div>
              <NavLink to="/checkout">
                <Button onClick={handleCheckout}>
                  checkout
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};




export default Cart;
