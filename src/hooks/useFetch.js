import { useState, useEffect } from 'react';

const useFetch = (url, options, dependency, func) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchVideos = async () => {
      try {
        const response = await fetch(url, options);
        const responseJson = await response.json();
        if (func) {
          const filteredResponse = func(responseJson);
          setData(filteredResponse);
        } else {
          setData(responseJson);
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchVideos();
    return () => {
      abortController.abort();
    };
  }, [dependency]);
  return { loading, error, data };
};

export default useFetch;
