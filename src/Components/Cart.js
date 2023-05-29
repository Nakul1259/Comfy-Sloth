import React, { createContext, useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import "./Cart.css";
import CartItem from "./CartItem";
import Location from "./Location";
import Subtotal from "./Subtotal";
// import { useCart } from "./UseCart";

function Cart() {
  const { cart, clearCart } = useCartContext();

  console.log(cart);

  if (cart < 1) {
    return <div className="cart-empty page-100 center">
      <h1 >Your cart is empty</h1>;
      <Link to='/products' className="btn cart-btn-btn">Fill it</Link>
    </div> 
  }

  return (
    <>
      <Location title="Cart" />
      <div className="cart">
        <div className="cart-title">
          <span>Item</span>
          <span>Name</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Subtotal</span>
          <span></span>
        </div>
        <hr />
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
        <hr style={{ marginTop: "5rem" }} />
        <div className="cart-btn">
          <Link to="/products" className="btn btn-cart">
            Continue shopping
          </Link>
          <button className="btn clear-btn-cart" onClick={clearCart}>
            clear shopping cart
          </button>
        </div>
        <Subtotal />
      </div>
    </>
  );
}

export default Cart;
