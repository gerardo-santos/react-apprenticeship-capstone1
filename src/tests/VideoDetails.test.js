import { render, screen } from '@testing-library/react';
import { GlobalContext } from '../context/GlobalContext';
import { BrowserRouter } from 'react-router-dom';
import VideoDetails from '../pages/VideoDetails';

describe('VideoDetails', () => {
  test('renders the VideoDetails component', () => {
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
          <VideoDetails />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
    const spinner = screen.getByRole('img');
    expect(spinner).toBeInTheDocument();
  });
});
