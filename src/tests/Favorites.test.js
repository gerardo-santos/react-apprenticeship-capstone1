import { render, screen } from '@testing-library/react';
import { GlobalContext } from '../context/GlobalContext';
import { BrowserRouter } from 'react-router-dom';
import Favorites from '../pages/private/Favorites';

describe('Favorites', () => {
  test('renders the Favorites component', () => {
    const initialState = {
      query: 'sports',
      search: '',
      darkMode: false,
      isLoggedIn: true,
      favorites: [],
    };
    render(
      <GlobalContext.Provider value={initialState}>
        <BrowserRouter>
          <Favorites />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
    const title = screen.getByText('Favorites');
    expect(title).toBeInTheDocument();
  });
});
