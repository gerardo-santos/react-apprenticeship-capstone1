import { render, screen } from '@testing-library/react';
import { GlobalContext } from '../context/GlobalContext';
import { BrowserRouter } from 'react-router-dom';
import { youtubeApiUrl } from '../utils/constants';
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
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText('Home Page')).toBeInTheDocument();
    const query = 'pizza';
    const response = await fetch(
      // eslint-disable-next-line no-undef
      `${youtubeApiUrl}search?part=snippet&maxResults=24&q=${query}&key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    await expect(data).toHaveProperty('items');
  });
});
