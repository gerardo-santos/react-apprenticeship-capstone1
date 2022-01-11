import { render } from '@testing-library/react';

import SuggestedVideoCard from '../components/SuggestedVideoCard';

describe('SuggestedVideoCard', () => {
  test('renders the SuggestedVideoCard component', () => {
    render(<SuggestedVideoCard />);
  });
});
