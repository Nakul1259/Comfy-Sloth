import { useCallback, useEffect, useState } from "react";



const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  
  const fetchData = async () => {
    setLoading(true)
      try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);
  // setLoading(false)
  // console.log(data);
  return { data, loading };
};

export default useFetch;