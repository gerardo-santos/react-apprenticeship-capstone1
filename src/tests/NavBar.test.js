import { render } from '@testing-library/react';
import { GlobalContext } from '../context/GlobalContext';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

describe('NavBar', () => {
  const initialState = {
    query: 'sports',
    search: '',
    darkMode: false,
    isLoggedIn: false,
    favorites: [],
  };
  test('renders the NavBar component', () => {
    const { getByText } = render(
      <GlobalContext.Provider value={initialState}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </GlobalContext.Provider>
    );

    const homeBtn = getByText('Home');
    expect(homeBtn).toBeInTheDocument();
    const logInBtn = getByText('Log in');
    expect(logInBtn).toBeInTheDocument();
  });
});
