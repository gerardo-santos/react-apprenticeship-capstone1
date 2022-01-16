import { createContext, useReducer } from 'react';
import { globalReducer } from './GlobalReducer';
import { LOCAL_STORAGE_KEY } from '../utils/constants';
import useLocalStorage from '../hooks/useLocalStorage';
import PropTypes from 'prop-types';
export const GlobalContext = createContext();

const initialDefaultState = {
  query: 'sports',
  search: '',
  darkMode: false,
  isLoggedIn: false,
  favorites: [],
};

export const GlobalProvider = ({ children }) => {
  const retrievedState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  const initialState = retrievedState ?? initialDefaultState;
  const [state, dispatch] = useReducer(globalReducer, initialState);
  useLocalStorage(LOCAL_STORAGE_KEY, state);
  return (
    <GlobalContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node,
};
