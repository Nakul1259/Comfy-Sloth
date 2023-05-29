import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context";
import { ProductsProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import { FilterProvider } from "./context/FilterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <ProductsProvider>
      <FilterProvider>
          <CartProvider>
            <AppProvider>
              <App />
            </AppProvider>
          </CartProvider>
      </FilterProvider>
        </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
