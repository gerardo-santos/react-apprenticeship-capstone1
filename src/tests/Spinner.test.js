import { render } from '@testing-library/react';

import Spinner from '../components/Spinner';

describe('Spinner', () => {
  test('renders the Spinner component', () => {
    render(<Spinner />);
  });
});
