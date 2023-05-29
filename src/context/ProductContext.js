import React, { useContext, useEffect, useReducer } from "react";
import { products_url as url } from "../utils/constants";
import reducer from "../ProductReducer";

const ProductsContext = React.createContext();

const initialState = {
  product_loading: false,
  products_error: false,
  products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async (url) => {
    dispatch({ type: "GET_PRODUCTS_BEGIN" });
    try {
      const response = await fetch(url);
      const products = await response.json();
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: products });
    } catch (error) {
      dispatch({ type: "GET_PRODUCTS_ERROR" });
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: "GET_SINGLE_PRODUCT_BEGIN" });
    try {
      const response = await fetch(url);
      const single_product = await response.json();
      dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: single_product });
    } catch (error) {
      dispatch({ type: "GET_SINGLE_PRODUCTS_ERROR" });
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  // console.log(state);

  return (
    <ProductsContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
