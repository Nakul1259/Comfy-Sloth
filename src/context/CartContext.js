import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../CartReducer";

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  // console.log(cart);
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({type:'SIDEBAR_OPEN'})
  } 

  const closeSidebar = () => {
    dispatch({type: 'SIDEBAR_CLOSE'})
  }


  //add to cart
  const addToCart = (id, product, amount) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, product, amount } });
  };

  //remove item
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_CART_ITEM", payload: id });
  };

  //toggle amount

  const toggleAmount = (id, value) => {
    dispatch({ type: "TOGGLE_CART_ITEM_AMOUNT", payload: { id, value } });
  };
  //clear cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    dispatch({ type: "COUNT_CART_TOTALS" });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart, openSidebar, closeSidebar }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};


