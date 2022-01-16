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

  const videoResponse = useFetch(
    // eslint-disable-next-line no-undef
    `${youtubeApiUrl}videos?part=snippet&id=${id}&key=${process.env.REACT_APP_API_KEY}`,
    {},
    id
  );
  const video = videoResponse.data ? videoResponse.data.items[0] : {};

  const suggestedVideosResponse = useFetch(
    // eslint-disable-next-line no-undef
    `${youtubeApiUrl}search?part=snippet&maxResults=20&relatedToVideoId=${id}&type=video&key=${process.env.REACT_APP_API_KEY}`,
    {},
    id
  );

  const suggestedVideos = suggestedVideosResponse.data
    ? suggestedVideosResponse.data.items.filter((video) => video.snippet)
    : [];

  return (
    <PageContainer backgroundColor={backgroundColor}>
      <VideosWrapper>
        <VideoContainer
          loading={videoResponse.loading}
          error={videoResponse.error}
          video={video}
          id={id}
        />
        <SuggestedVideosContainer
          loading={suggestedVideosResponse.loading}
          error={suggestedVideosResponse.error}
          suggestedVideos={suggestedVideos}
        />
      </VideosWrapper>
    </PageContainer>
  );
};

export default VideoDetails;
