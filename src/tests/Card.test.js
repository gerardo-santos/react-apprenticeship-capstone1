import { render } from '@testing-library/react';

import Card from '../components/Card';

describe('Card', () => {
  test('renders the Card component', () => {
    render(<Card />);
  });
});
