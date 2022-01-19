import { useEffect } from 'react';

const useLocalStorage = (key, state, clearLocalStorage) => {
  useEffect(() => {
    if (clearLocalStorage) {
      localStorage.setItem(key, JSON.stringify(null));
    } else {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [state]);
};

export default useLocalStorage;
