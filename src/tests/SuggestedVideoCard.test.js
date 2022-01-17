import { render } from '@testing-library/react';
import { GlobalContext } from '../context/GlobalContext';
import { BrowserRouter } from 'react-router-dom';
import SuggestedVideoCard from '../components/SuggestedVideoCard';

describe('SuggestedVideoCard', () => {
  test('renders the SuggestedVideoCard component', () => {
    const initialState = {
      query: 'sports',
      search: '',
      darkMode: false,
      isLoggedIn: true,
      favorites: [],
    };
    const thumbnail = 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg';
    const url = '/video-details/7PtYNO6g7eI';
    const title = 'My video';
    render(
      <GlobalContext.Provider value={initialState}>
        <BrowserRouter>
          <SuggestedVideoCard thumbnail={thumbnail} url={url} title={title} />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
  });
});
