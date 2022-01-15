export const globalReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_QUERY':
      return { ...state, query: action.payload };
    case 'GET_SEARCH':
      return { ...state, search: action.payload };
    case 'TOGGLE_THEME':
      return { ...state, darkMode: !state.darkMode };
    case 'LOG_IN':
      return { ...state, isLoggedIn: true };
    case 'SIGN_OUT':
      return { ...state, isLoggedIn: false };
    case 'ADD_TO_FAVORITES':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'REMOVE_FROM_FAVORITES':
      return { ...state, favorites: [...action.payload] };
    default:
      return state;
  }
};
