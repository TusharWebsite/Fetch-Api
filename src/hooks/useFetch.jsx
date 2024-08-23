import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [errorData, setErrorData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        const data = res?.data;

        setApiData(data);
        setIsLoading(false);
      } catch (error) {
        setErrorData(error);
        setIsLoading(false);
      }
    };
    
    fetchData(); // Call fetchData inside useEffect
  }, [url]);

  return { isLoading, apiData, errorData };
};

export default useFetch;
