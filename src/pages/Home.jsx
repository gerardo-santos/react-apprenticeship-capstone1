import { Wrapper } from '../components/styles/Wrapper.styled';
import { MainTitle } from '../components/styles/MainTitle.styled';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { lightStyles } from '../components/styles/ThemeStyles.styled';
import { darkStyles } from '../components/styles/ThemeStyles.styled';
import { CardGrid } from '../components/styles/CardGrid.styled';
import { PageContainer } from '../components/styles/PageContainer.styled';
import { NoVideosText } from '../components/styles/NoVideosText.styled';
import Alert from 'react-bootstrap/Alert';
import Card from '../components/Card';
import Spinner from '../components/Spinner';
import PropTypes from 'prop-types';

const Home = ({ loading, error, videoData }) => {
  const { darkMode } = useContext(GlobalContext);
  const backgroundColor = darkMode
    ? darkStyles.backgroundColor
    : lightStyles.backgroundColor;
  const textColor = darkMode ? darkStyles.color : lightStyles.color;
  if (error) {
    return <Alert variant="danger">An error occured.</Alert>;
  }
  const videos = videoData ? videoData.items : [];

  return (
    <PageContainer backgroundColor={backgroundColor}>
      <Wrapper>
        <MainTitle textColor={textColor}>Home Page</MainTitle>
        {loading ? (
          <Spinner />
        ) : (
          <CardGrid>
            {videos && videos.length > 0 ? (
              videos.map((video) => (
                <Card
                  key={`${video.id.videoId}-${Math.random()}`}
                  url={`/video-details/${video.id.videoId}`}
                  thumbnail={video.snippet.thumbnails.medium.url}
                  title={video.snippet.title}
                  description={video.snippet.description}
                />
              ))
            ) : (
              <NoVideosText textColor={textColor}>
                There are no videos to show.
              </NoVideosText>
            )}
          </CardGrid>
        )}
      </Wrapper>
    </PageContainer>
  );
};

Home.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  videoData: PropTypes.object,
};

export default Home;
