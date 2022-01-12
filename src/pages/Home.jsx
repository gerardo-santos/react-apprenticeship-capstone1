import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { Wrapper } from '../components/styles/Wrapper.styled';
import { MainTitle } from '../components/styles/MainTitle.styled';
import { CardGrid } from '../components/styles/CardGrid.styled';
import Card from '../components/Card';
import Spinner from '../components/Spinner';
import PropTypes from 'prop-types';

const Home = ({ loading, error, videoData }) => {
  if (error) {
    console.error(error);
    return <Alert variant="danger">An error occured.</Alert>;
  }

  return (
    <Wrapper>
      <MainTitle>Home Page</MainTitle>
      {loading ? (
        <Spinner />
      ) : (
        <CardGrid>
          {videoData
            ? videoData.items.map((video) => (
                <Link
                  to={`/video-details/${video.id.videoId}`}
                  key={`${video.id.videoId}-${Math.random()}`}
                >
                  <Card
                    thumbnail={video.snippet.thumbnails.medium.url}
                    title={video.snippet.title}
                    description={video.snippet.description}
                  />
                </Link>
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
