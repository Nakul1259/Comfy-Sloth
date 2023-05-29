import React, { useContext, useEffect, useState } from "react";
import useFetch from "./Components/fetchItem";
import { useParams } from "react-router-dom";
const url = "https://course-api.com/react-store-products?s=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const id  = useParams()
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



  const { loading,setLoading, error, data } = useFetch(`${url}${id}`);
  console.log(data);

  return (
    <AppContext.Provider
      value={{
        data
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useSingleContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
