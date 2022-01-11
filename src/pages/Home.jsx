import Alert from 'react-bootstrap/Alert';
import { Wrapper } from '../components/styles/Wrapper.styled';
import { MainTitle } from '../components/styles/MainTitle.styled';
import { CardGrid } from '../components/styles/CardGrid.styled';
import Card from '../components/Card';
import Spinner from '../components/Spinner';
import PropTypes from 'prop-types';

const Home = ({ loading, error, videoData }) => {
  let videos = [];
  if (error) {
    return <Alert variant="danger">An error occured.</Alert>;
  }
  if (!loading) {
    videos = videoData.items ? videoData.items : [];
  }
  return (
    <Wrapper>
      <MainTitle>Home Page</MainTitle>
      {loading ? (
        <Spinner />
      ) : (
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
