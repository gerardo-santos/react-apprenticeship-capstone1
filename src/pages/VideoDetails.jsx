import { VideosWrapper } from '../components/styles/VideosWrapper.styled';
import { PageContainer } from '../components/styles/PageContainer.styled';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { lightStyles } from '../components/styles/ThemeStyles.styled';
import { darkStyles } from '../components/styles/ThemeStyles.styled';
import SuggestedVideosContainer from '../components/SuggestedVideosContainer';
import VideoContainer from '../components/VideoContainer';

const VideoDetails = () => {
  const { darkMode } = useContext(GlobalContext);
  const backgroundColor = darkMode
    ? darkStyles.backgroundColor
    : lightStyles.backgroundColor;
  return (
    <PageContainer backgroundColor={backgroundColor}>
      <VideosWrapper>
        <VideoContainer />
        <SuggestedVideosContainer />
      </VideosWrapper>
    </PageContainer>
  );
};

export default VideoDetails;
