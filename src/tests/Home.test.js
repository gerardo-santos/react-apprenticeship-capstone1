import { render, screen } from '@testing-library/react';

import Home from '../pages/Home';

describe('Home', () => {
  test('renders the Home component', () => {
    render(<Home />);
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });
});
