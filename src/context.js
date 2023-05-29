import React, { useContext, useEffect, useReducer, useState } from "react";
import useFetch from "./Components/fetchItem";
import { cartReducer } from "./reducer";
const url = "https://course-api.com/react-store-products?s=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(1);

  const increaseValue = () => {
    setCount(count + 1);
  };

  const decreaseValue = () => {
    count > 1 && setCount(count - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSearch(search);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  
  
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });
  const { loading, setLoading, error, data } = useFetch(url);
  
  useEffect(() => {
    if (!loading && data) {
      dispatch({ type: "set_products", payload: data });
    }
  }, [data, loading]);

  // console.log(data);
  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        error,
        data,
        handleSubmit,
        handleSearch,
        search,
        increaseValue,
        decreaseValue,
        count,
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
