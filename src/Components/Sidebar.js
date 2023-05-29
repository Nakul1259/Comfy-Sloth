import React from "react";
import { FaShoppingCart, FaUserAlt, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import logo from "../images/logo.svg";
import "./Sidebar.css";

function Sidebar() {
  const { total_items, closeSidebar, isSidebarOpen } = useCartContext();
  // {`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
  return (
    <div className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="header">
        <img src={logo} alt="" />
        <button className="times" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <div className="sidebar-links">
        <ul onClick={closeSidebar}>
          <li>
            <Link to="/" >Home</Link>
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
      <div className="sidebar-right">
        <ul onClick={closeSidebar}>
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
    </div>
  );
}

export default Sidebar;
