import { globalReducer } from '../context/GlobalReducer';

describe('Global Reducer', () => {
  test('returns the correct updated global state', () => {
    const initialState = {
      query: 'sports',
      search: '',
      darkMode: false,
      isLoggedIn: false,
      favorites: [],
    };

    const changedDarkMode = globalReducer(initialState, {
      type: 'TOGGLE_THEME',
    });
    expect(changedDarkMode.darkMode).toBe(true);

    const changedLoggedIn = globalReducer(initialState, {
      type: 'LOG_IN',
    });
    expect(changedLoggedIn.isLoggedIn).toBe(true);

    const addedFavorite = globalReducer(changedLoggedIn, {
      type: 'ADD_TO_FAVORITES',
      payload: { url: 'url', thumbnail: 'thumbnail', title: 'title' },
    });
    expect(addedFavorite.favorites.length).toBe(1);

    const deleteFavorite = globalReducer(addedFavorite, {
      type: 'REMOVE_FROM_FAVORITES',
      payload: [],
    });
    expect(deleteFavorite.favorites.length).toBe(0);

    const signingOut = globalReducer(changedLoggedIn, {
      type: 'SIGN_OUT',
    });
    expect(signingOut.isLoggedIn).toBe(false);

    const updatedQuery = globalReducer(initialState, {
      type: 'UPDATE_QUERY',
      payload: 'cooking',
    });
    expect(updatedQuery.query).toBe('cooking');

    const gettingSearch = globalReducer(initialState, {
      type: 'GET_SEARCH',
      payload: 'beach',
    });
    expect(gettingSearch.search).toBe('beach');
  });
});
