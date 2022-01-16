import { useEffect } from 'react';

const useLocalStorage = (key, state) => {
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
};

export default useLocalStorage;
