import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import { FaShoppingCart, FaUserAlt, FaBars } from "react-icons/fa";
import "./Navbar.css";
import { useCartContext } from "../context/CartContext";

function Navbar() {
  const { total_items, openSidebar } = useCartContext();

  return (
    <nav className="navbar">
      <div className="nav-header">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <button  className="bar" onClick={openSidebar}>
        <FaBars />
      </button>

      <div className="nav-links">
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/products">Products</Link>
          </li>

          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <ul>
          <li>
            <Link to="/cart">
              <span className="cart-amt">Cart</span>
              <FaShoppingCart />
              <span className="cart-amt-num">{total_items}</span>
            </Link>
          </li>

          <li>
            <Link to="/logout">
              <span>Logout</span>

              <FaUserAlt />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
