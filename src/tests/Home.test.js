import { render, screen } from '@testing-library/react';
import { GlobalContext } from '../context/GlobalContext';
import Home from '../pages/Home';

describe('Home', () => {
  test('renders the Home component', async () => {
    const initialState = {
      query: 'sports',
      search: '',
      darkMode: false,
      isLoggedIn: true,
      favorites: [],
    };

    render(
      <GlobalContext.Provider value={initialState}>
        <Home />
      </GlobalContext.Provider>
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });
});
