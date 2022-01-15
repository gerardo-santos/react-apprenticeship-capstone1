import { useParams } from 'react-router-dom';
import { VideosWrapper } from '../components/styles/VideosWrapper.styled';
import { PageContainer } from '../components/styles/PageContainer.styled';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { lightStyles } from '../components/styles/ThemeStyles.styled';
import { darkStyles } from '../components/styles/ThemeStyles.styled';
import { youtubeApiUrl } from '../utils/constants';
import SuggestedVideosContainer from '../components/SuggestedVideosContainer';
import VideoContainer from '../components/VideoContainer';
import useFetch from '../hooks/useFetch';

const VideoDetails = () => {
  const { id } = useParams();
  const { darkMode } = useContext(GlobalContext);
  const backgroundColor = darkMode
    ? darkStyles.backgroundColor
    : lightStyles.backgroundColor;

  const { loading, error, data } = useFetch(
    // eslint-disable-next-line no-undef
    `${youtubeApiUrl}videos?part=snippet&id=${id}&key=${process.env.REACT_APP_API_KEY}`,
    {},
    id
  );

  const video = data ? data.items[0] : {};

  return (
    <PageContainer backgroundColor={backgroundColor}>
      <VideosWrapper>
        <VideoContainer loading={loading} error={error} video={video} id={id} />
        <SuggestedVideosContainer />
      </VideosWrapper>
    </PageContainer>
  );
};

export default VideoDetails;
