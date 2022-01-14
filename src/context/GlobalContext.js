import { createContext, useState } from 'react';
import { youtubeApiUrl } from '../utils/constants';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [query, setQuery] = useState('sports');
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const { loading, error, data } = useFetch(
    // eslint-disable-next-line no-undef
    `${youtubeApiUrl}search?part=snippet&maxResults=24&q=${query}&key=${process.env.REACT_APP_API_KEY}`,
    {},
    search
  );

  const updateQuery = (newQuery) => {
    setQuery(newQuery);
  };

  const getSearch = (newSearch) => {
    setSearch(newSearch);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <GlobalContext.Provider
      value={{
        query,
        loading,
        error,
        data,
        updateQuery,
        getSearch,
        darkMode,
        toggleTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node,
};
