import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import SuggestedVideoCard from '../components/SuggestedVideoCard';
import { VideosWrapper } from '../components/styles/VideosWrapper.styled';
import { VideoContainer } from '../components/styles/VideoContainer.styled';
import { SuggestedVideosContainer } from '../components/styles/SuggestedVideosContainer.styled';
import Alert from 'react-bootstrap/Alert';
import Spinner from '../components/Spinner';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const VideoDetails = ({ loading, error, videoData }) => {
  const youtubeUrl = 'https://www.youtube.com/watch?v=';
  const { id } = useParams();
  if (error) {
    console.error(error);
    return <Alert variant="danger">An error occured.</Alert>;
  }
  const videos = videoData.items;
  const [selectedVideo] = videos.filter((video) => video.id.videoId === id);
  const videoTitle = selectedVideo.snippet.title;
  const videoDescription = selectedVideo.snippet.description;
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <VideosWrapper>
          <VideoContainer>
            <ReactPlayer url={`${youtubeUrl}${id}`} width="auto" />
            <h3>{videoTitle}</h3>
            <p>{videoDescription}</p>
          </VideoContainer>
          <SuggestedVideosContainer>
            {videos.map((video) => (
              <Link
                to={`/video-details/${video.id.videoId}`}
                key={`${video.id.videoId}-${Math.random()}`}
              >
                <SuggestedVideoCard
                  thumbnail={video.snippet.thumbnails.default.url}
                  title={video.snippet.title}
                />
              </Link>
            ))}
          </SuggestedVideosContainer>
        </VideosWrapper>
      )}
    </>
  );
};

VideoDetails.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  videoData: PropTypes.object,
};

export default VideoDetails;
