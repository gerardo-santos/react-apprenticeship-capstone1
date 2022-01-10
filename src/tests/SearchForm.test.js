import { render, screen } from '@testing-library/react';

import SearchForm from '../components/SearchForm';

describe('SearchForm', () => {
  test('renders the SearchForm component', () => {
    render(<SearchForm />);
    expect(screen.getByText('Search')).toBeInTheDocument();
  });
});
