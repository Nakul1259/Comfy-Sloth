import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../FilterReducer";
import { useProductsContext } from "./ProductContext";

const initialState = {
  filtered_products: [],
  all_products: [],
  sort: "price-lowest",
  filters: {
    category: "all",
    company: "all",
    color: "all", 
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [products, state.filters]);

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === "color") {
      value = e.target.dataset.color;
    }
    if (name === "price") {
      value = Number(value);
    }

    if (name === "shipping") {
      value = e.target.checked;
    }

    dispatch({ type: 'UPDATE_FILTERS', payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({type: 'CLEAR_FILTERS'})
  }

  return (
    <FilterContext.Provider value={{
      ...state,
      updateFilters,
      clearFilters,

    }}>{children}</FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
