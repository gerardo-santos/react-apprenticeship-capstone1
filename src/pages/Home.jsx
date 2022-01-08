import { Wrapper } from '../components/styles/Wrapper.styled';
import { Title } from '../components/styles/Title.styled';
import { CardGrid } from '../components/styles/CardGrid.styled';
import Card from '../components/Card';
import { mockupVideosInfo } from '../mock-data/youtube-videos-mock';

const Home = () => {
  const videos = mockupVideosInfo.items;
  return (
    <Wrapper>
      <Title>Home Page</Title>
      <CardGrid>
        {videos.map((video) => (
          <Card
            key={video.id.videoId}
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
