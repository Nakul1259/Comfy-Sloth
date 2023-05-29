import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { formatPrice } from "../utils/Helpers";

function CartItem({ id, image, price, name, amount }) {
  const {removeItem, toggleAmount} = useCartContext()
  //   if (!item || !item.images || !item.images.length) {
  //     return null;
  //   }

  //   const { price, name, id } = item;
  //   const { url: imageUrl } = image[0];


  const increase = () => {
    toggleAmount(id, 'inc')
  };

  const decrease = () => {
    toggleAmount(id, 'dec')
  };

  return (
    <div className="cart-component">
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      <span>{name}</span>
      <span className="price">{formatPrice(price)}</span>
      <div className="btn-container">
        <button className="minus">
          <FaMinus onClick={decrease} />
        </button>
        <h1 className="num">{amount}</h1>
        <button className="plus" onClick={increase}>
          <FaPlus />
        </button>
      </div>
      <span className="subtotal">{formatPrice(price * amount)}</span>
      <button className="remove-btn" onClick={() => removeItem(id)}>
        <FaTrash />
      </button>
    </div>
   

  );
}

export default CartItem;
