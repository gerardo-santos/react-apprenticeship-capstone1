import { createContext, useReducer } from 'react';
import { globalReducer } from './GlobalReducer';
import PropTypes from 'prop-types';
export const GlobalContext = createContext();

const initialState = {
  query: 'sports',
  search: '',
  darkMode: false,
  isLoggedIn: false,
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);
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
