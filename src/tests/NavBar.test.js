import { render, screen } from '@testing-library/react';

import NavBar from '../components/NavBar';

describe('NavBar', () => {
  test('renders the NavBar component', () => {
    render(<NavBar />);
    expect(screen.getByText('Log In')).toBeInTheDocument();
    expect(screen.getByText('Dark Mode')).toBeInTheDocument();
  });
});
