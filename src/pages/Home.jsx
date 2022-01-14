import { Wrapper } from '../components/styles/Wrapper.styled';
import { MainTitle } from '../components/styles/MainTitle.styled';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { lightStyles } from '../components/styles/ThemeStyles.styled';
import { darkStyles } from '../components/styles/ThemeStyles.styled';
import { CardGrid } from '../components/styles/CardGrid.styled';
import { PageContainer } from '../components/styles/PageContainer.styled';
import { NoVideosText } from '../components/styles/NoVideosText.styled';
import { youtubeApiUrl } from '../utils/constants';
import Alert from 'react-bootstrap/Alert';
import Card from '../components/Card';
import Spinner from '../components/Spinner';
import useFetch from '../hooks/useFetch';

const Home = () => {
  const { darkMode, search, query } = useContext(GlobalContext);
  const { loading, error, data } = useFetch(
    // eslint-disable-next-line no-undef
    `${youtubeApiUrl}search?part=snippet&maxResults=24&q=${query}&key=${process.env.REACT_APP_API_KEY}`,
    {},
    search
  );

  const backgroundColor = darkMode
    ? darkStyles.backgroundColor
    : lightStyles.backgroundColor;
  const textColor = darkMode ? darkStyles.color : lightStyles.color;
  if (error) {
    return <Alert variant="danger">An error occured.</Alert>;
  }
  const videos = data ? data.items : [];

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
                  textColor={textColor}
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

export default Home;
