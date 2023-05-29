import { useState } from "react";

export const useCart = () => {
    const [cart, setCart] = useState([]);
  
    function handleAddToCart(item) {
      setCart([...cart, item]);
    }
  
    function handleRemoveFromCart(item) {
      setCart(cart.filter((i) => i.id !== item.id));
    }
  
    function handleUpdateCart(item, count) {
      setCart(
        cart.map((i) => {
          if (i.id === item.id) {
            return { ...i, count };
          }
          return i;
        })
      );
    }
  
    return {
      cart,
      handleAddToCart,
      handleRemoveFromCart,
      handleUpdateCart
    };
};