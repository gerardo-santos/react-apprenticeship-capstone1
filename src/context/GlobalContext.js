import { createContext, useReducer } from 'react';
import { youtubeApiUrl } from '../utils/constants';
import { globalReducer } from './GlobalReducer';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
export const GlobalContext = createContext();

const initialState = { query: 'sports', search: '', darkMode: false };

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  const { loading, error, data } = useFetch(
    // eslint-disable-next-line no-undef
    `${youtubeApiUrl}search?part=snippet&maxResults=24&q=${state.query}&key=${process.env.REACT_APP_API_KEY}`,
    {},
    state.search
  );

  const updateQuery = (newQuery) => {
    dispatch({ type: 'UPDATE_QUERY', payload: newQuery });
  };

  const getSearch = (newSearch) => {
    dispatch({ type: 'GET_SEARCH', payload: newSearch });
  };

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <GlobalContext.Provider
      value={{
        query: state.query,
        updateQuery,
        loading,
        error,
        data,
        darkMode: state.darkMode,
        toggleTheme,
        getSearch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node,
};
