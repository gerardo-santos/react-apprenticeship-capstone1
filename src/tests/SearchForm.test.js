import { render } from '@testing-library/react';
import { GlobalContext } from '../context/GlobalContext';
import { globalReducer } from '../context/GlobalReducer';
import { BrowserRouter } from 'react-router-dom';
import SearchForm from '../components/SearchForm';

describe('SearchForm', () => {
  test('renders the SearchForm component', () => {
    const initialState = {
      query: 'sports',
      search: '',
      darkMode: false,
      isLoggedIn: true,
      favorites: [],
      dispatch: globalReducer,
    };
    const { getByPlaceholderText, getByRole } = render(
      <GlobalContext.Provider value={initialState}>
        <BrowserRouter>
          <SearchForm />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
    const searchInput = getByPlaceholderText('Search');
    expect(searchInput).toBeInTheDocument();
    const searchBtn = getByRole('button');
    expect(searchBtn).toBeInTheDocument();
  });
});
