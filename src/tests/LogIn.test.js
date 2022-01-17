import { render, screen, fireEvent } from '@testing-library/react';
import { GlobalContext } from '../context/GlobalContext';
import { BrowserRouter } from 'react-router-dom';
import LogIn from '../pages/LogIn';

describe('LogIn', () => {
  test('renders the LogIn component', () => {
    const initialState = {
      query: 'sports',
      search: '',
      darkMode: false,
      isLoggedIn: false,
      favorites: [],
    };
    const { getByRole, getByPlaceholderText } = render(
      <GlobalContext.Provider value={initialState}>
        <BrowserRouter>
          <LogIn />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    const usernameInput = getByRole('textbox');
    expect(usernameInput).toBeInTheDocument();
    fireEvent.change(usernameInput, { target: { value: 'wizeline' } });
    expect(usernameInput.value).toBe('wizeline');
    const passwordInput = getByPlaceholderText('Password');
    expect(passwordInput).toBeInTheDocument();
    fireEvent.change(passwordInput, { target: { value: 'Rocks!' } });
    expect(passwordInput.value).toBe('Rocks!');
  });
});
