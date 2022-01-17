import { mockupVideosInfo } from '../mock-data/youtube-videos-mock';

describe('Mock Up Data', () => {
  test('has the correct mockup data', () => {
    expect(mockupVideosInfo).toHaveProperty('items');
  });
});
