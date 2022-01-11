import { useState, useEffect } from 'react';

const useFetch = (url, options, dependency) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchVideos = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setVideoData(data);
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
  return { loading, error, videoData };
};

export default useFetch;
