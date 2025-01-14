import { render, screen } from '@testing-library/react';
import { GlobalContext } from '../context/GlobalContext';
import { BrowserRouter } from 'react-router-dom';
import Favorites from '../pages/private/Favorites';

describe('Favorites', () => {
  test('renders the Favorites component', () => {
    const favoritesArray = [
      {
        id: 'my-id1',
        url: '/favorite-details/1',
        snippet: {
          thumbnails: { medium: { url: 'my-url' } },
          title: 'my title',
          description: 'my description',
        },
        favorites: true,
      },
      {
        id: 'my-id2',
        url: '/favorite-details/2',
        snippet: {
          thumbnails: { medium: { url: 'my-url2' } },
          title: 'my title 2',
          description: 'my description 2',
        },
        favorites: true,
      },
    ];
    const initialState = {
      query: 'sports',
      search: '',
      darkMode: false,
      isLoggedIn: true,
      favorites: favoritesArray,
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
    const thumbnails = screen.getAllByRole('img');
    expect(thumbnails).toHaveLength(2);
  });
});
