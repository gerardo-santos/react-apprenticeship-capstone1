import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { StyledVideoContainer } from './styles/VideoContainer.styled';
import { lightStyles } from './styles/ThemeStyles.styled';
import { darkStyles } from './styles/ThemeStyles.styled';
import { StyledVideoTitle } from './styles/StyledVideoTitle.styled';
import { StyledVideoDescription } from './styles/StyledVideoDescription.styled';
import useFetch from '../hooks/useFetch';
import Alert from 'react-bootstrap/Alert';
import Spinner from './Spinner';
import ReactPlayer from 'react-player';

const VideoContainer = () => {
  const { darkMode } = useContext(GlobalContext);
  const textColor = darkMode ? darkStyles.color : lightStyles.color;
  const youtubeUrl = 'https://www.youtube.com/watch?v=';
  const { id } = useParams();
  const { loading, error, data } = useFetch(
    // eslint-disable-next-line no-undef
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${process.env.REACT_APP_API_KEY}`,
    {},
    id
  );
  if (error) {
    return <Alert />;
  }
  const videoTitle = data ? data.items[0].snippet.localized.title : '';
  const videoDescription = data
    ? data.items[0].snippet.localized.description
    : '';
  return (
    <StyledVideoContainer>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ReactPlayer url={`${youtubeUrl}${id}`} width="auto" />
          <StyledVideoTitle textColor={textColor}>
            {videoTitle}
          </StyledVideoTitle>
          <StyledVideoDescription textColor={textColor}>
            {videoDescription.slice(0, 300)}
          </StyledVideoDescription>
        </>
      )}
    </StyledVideoContainer>
  );
};

export default VideoContainer;
