import { render } from '@testing-library/react';

import VideoDetails from '../pages/VideoDetails';

describe('VideoDetails', () => {
  test('renders the VideoDetails component', () => {
    render(<VideoDetails />);
  });
});
