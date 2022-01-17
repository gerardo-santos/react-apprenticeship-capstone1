import { render, screen } from '@testing-library/react';
import { GlobalContext } from '../context/GlobalContext';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';

describe('NotFound', () => {
  test('renders the NotFound component', () => {
    const initialState = {
      query: 'sports',
      search: '',
      darkMode: false,
      isLoggedIn: false,
      favorites: [],
    };
    render(
      <GlobalContext.Provider value={initialState}>
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
    const title = screen.getByText('404 Page Not Found');
    expect(title).toBeInTheDocument();
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Go to Home Page');
  });
});
