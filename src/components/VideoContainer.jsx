import { useParams } from 'react-router-dom';
import { StyledVideoContainer } from './styles/VideoContainer.styled';
import useFetch from '../hooks/useFetch';
import Alert from 'react-bootstrap/Alert';
import Spinner from './Spinner';
import ReactPlayer from 'react-player';

const VideoContainer = () => {
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
          <h3>{videoTitle}</h3>
          <p>{videoDescription.slice(0, 300)}</p>
        </>
      )}
    </StyledVideoContainer>
  );
};

export default VideoContainer;
