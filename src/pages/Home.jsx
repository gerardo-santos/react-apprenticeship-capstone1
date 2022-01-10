import { Wrapper } from '../components/styles/Wrapper.styled';
import { MainTitle } from '../components/styles/MainTitle.styled';
import { CardGrid } from '../components/styles/CardGrid.styled';
import Card from '../components/Card';
import { mockupVideosInfo } from '../mock-data/youtube-videos-mock';

const Home = () => {
  const videos = mockupVideosInfo.items;
  return (
    <Wrapper>
      <MainTitle>Home Page</MainTitle>
      <CardGrid>
        {videos.map((video) => (
          <Card
            key={video.etag}
            thumbnail={video.snippet.thumbnails.medium.url}
            title={video.snippet.title}
            description={video.snippet.description}
          />
        ))}
      </CardGrid>
    </Wrapper>
  );
};

export default Home;
