import { Wrapper } from '../components/styles/Wrapper.styled';
import { MainTitle } from '../components/styles/MainTitle.styled';
import { CardGrid } from '../components/styles/CardGrid.styled';
import Alert from 'react-bootstrap/Alert';
import Card from '../components/Card';
import Spinner from '../components/Spinner';
import PropTypes from 'prop-types';

const Home = ({ loading, error, videoData }) => {
  if (error) {
    return <Alert variant="danger">An error occured.</Alert>;
  }
  const videos = videoData ? videoData.items : [];

  return (
    <Wrapper>
      <MainTitle>Home Page</MainTitle>
      {loading ? (
        <Spinner />
      ) : (
        <CardGrid>
          {videos && videos.length > 0
            ? videos.map((video) => (
                <Card
                  key={`${video.id.videoId}-${Math.random()}`}
                  url={`/video-details/${video.id.videoId}`}
                  thumbnail={video.snippet.thumbnails.medium.url}
                  title={video.snippet.title}
                  description={video.snippet.description}
                />
              ))
            : 'There are no videos to show.'}
        </CardGrid>
      )}
    </Wrapper>
  );
};

Home.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  videoData: PropTypes.object,
};

export default Home;
