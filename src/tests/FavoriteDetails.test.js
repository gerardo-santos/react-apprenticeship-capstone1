import { render, screen } from '@testing-library/react';
import { GlobalContext } from '../context/GlobalContext';
import { BrowserRouter } from 'react-router-dom';
import FavoriteDetails from '../pages/private/FavoriteDetails';

describe('FavoriteDetails', () => {
  test('renders the FavoriteDetails component', () => {
    const favoritesArray = [
      {
        id: 'my-id1',
        url: '/favorite-details/1',
        snippet: {
          thumbnails: { default: { url: 'my-url' } },
          title: 'Soccer best goals 2020',
          description: 'Includes goals from your favorite players.',
        },
        favorites: true,
      },
      {
        id: 'my-id2',
        url: '/favorite-details/2',
        snippet: {
          thumbnails: { default: { url: 'my-url2' } },
          title: 'Learn to make pizza',
          description: 'Discover how to cook a simple pizza.',
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
          <FavoriteDetails />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
    const thumbnails = screen.getAllByRole('img');
    expect(thumbnails).toHaveLength(2);
    const titles = screen.getAllByRole('heading', { level: 6 });
    expect(titles).toHaveLength(2);
    expect(titles[0]).toHaveTextContent('Soccer best goals 2020');
    expect(titles[1]).toHaveTextContent('Learn to make pizza');
  });
});
