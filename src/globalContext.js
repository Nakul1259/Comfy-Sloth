import React, { createContext, useReducer } from "react";

const initialState = {
  items: [],
  subtotal: 0,
  total: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
        subtotal: state.subtotal + action.payload.price,
        total: state.total + action.payload.price,
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        subtotal: state.subtotal - state.items[action.payload].price,
        total: state.total - state.items[action.payload].price,
      };
    case "UPDATE_QUANTITY":
      const item = state.items.find((item) => item.id === action.payload.id);
      const index = state.items.indexOf(item);
      const updatedItem = {
        ...item,
        quantity: action.payload.quantity,
      };
      const updatedItems = [
        ...state.items.slice(0, index),
        updatedItem,
        ...state.items.slice(index + 1),
      ];
      return {
        ...state,
        items: updatedItems,
        subtotal: state.subtotal + updatedItem.quantity * updatedItem.price,
        total: state.total + updatedItem.quantity * updatedItem.price,
      };
    default:
      return state;
  }
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  return (
    <GlobalContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </GlobalContext.Provider>
  );
};