import { StyledSuggestedVideosContainer } from '../components/styles/SuggestedVideosContainer.styled';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import SuggestedVideoCard from './SuggestedVideoCard';
import Alert from 'react-bootstrap/Alert';

const SuggestedVideosContainer = () => {
  const { id } = useParams();
  const { loading, error, data } = useFetch(
    // eslint-disable-next-line no-undef
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&relatedToVideoId=${id}&type=video&key=${process.env.REACT_APP_API_KEY}`,
    {},
    id
  );
  const suggestedVideos = data
    ? data.items.filter((video) => video.snippet)
    : [];
  if (error) {
    return <Alert />;
  }
  return (
    <StyledSuggestedVideosContainer>
      {!loading &&
        suggestedVideos.length > 0 &&
        suggestedVideos.map((video) => (
          <SuggestedVideoCard
            key={`${video.id.videoId}-${Math.random()}`}
            thumbnail={video.snippet.thumbnails.default.url}
            title={video.snippet.title}
            url={`/video-details/${video.id.videoId}`}
          />
        ))}
    </StyledSuggestedVideosContainer>
  );
};

export default SuggestedVideosContainer;
