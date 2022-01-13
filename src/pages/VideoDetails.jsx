import { VideosWrapper } from '../components/styles/VideosWrapper.styled';
import SuggestedVideosContainer from '../components/SuggestedVideosContainer';
import VideoContainer from '../components/VideoContainer';

const VideoDetails = () => {
  return (
    <>
      <VideosWrapper>
        <VideoContainer />
        <SuggestedVideosContainer />
      </VideosWrapper>
    </>
  );
};

export default VideoDetails;
