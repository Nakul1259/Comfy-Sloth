import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import "./Subtotal.css";
import { formatPrice } from "../utils/Helpers";

function Subtotal() {
    const {total_amount, shipping_fee} = useCartContext()
  return (
    <>
    <div className="subtotal-component">
        <div className="subtotal-items">

      <div className="subtotal">
        <h4>Subtotal: </h4>
        <h4>{formatPrice(total_amount)}</h4>
      </div>
      <div className="shipping">
        <span>Shipping Fee:</span>
        <span>{formatPrice(shipping_fee)}</span>
      </div>
      <hr />
      <div className="order">
        <h2>Order Total</h2>
        <h2>{formatPrice(total_amount + shipping_fee)}</h2>
      </div>
      </div>
      <Link to='/checkout' className="btn order-btn">proceed to checkout</Link>
    </div>
    </>

  );
}

export default Subtotal;
