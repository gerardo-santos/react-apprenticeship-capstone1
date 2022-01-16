import { StyledSuggestedVideosContainer } from '../components/styles/SuggestedVideosContainer.styled';
import SuggestedVideoCard from './SuggestedVideoCard';
import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';

const SuggestedVideosContainer = ({
  loading,
  error,
  suggestedVideos,
  favoritesPage,
}) => {
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
            url={
              favoritesPage
                ? `/favorite-details/${video.id}`
                : `/video-details/${video.id.videoId}`
            }
          />
        ))}
    </StyledSuggestedVideosContainer>
  );
};

SuggestedVideosContainer.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  suggestedVideos: PropTypes.array,
  favoritesPage: PropTypes.bool,
};

export default SuggestedVideosContainer;
