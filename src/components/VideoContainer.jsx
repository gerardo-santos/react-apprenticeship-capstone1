import { youtubeVideoUrl } from '../utils/constants';
import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { StyledVideoContainer } from './styles/VideoContainer.styled';
import { lightStyles } from './styles/ThemeStyles.styled';
import { darkStyles } from './styles/ThemeStyles.styled';
import { StyledVideoTitle } from './styles/StyledVideoTitle.styled';
import { StyledVideoDescription } from './styles/StyledVideoDescription.styled';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Spinner from './Spinner';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

const VideoContainer = ({ loading, error, video, id, favoritesPage }) => {
  const { darkMode, isLoggedIn, favorites, dispatch } =
    useContext(GlobalContext);

  const textColor = darkMode ? darkStyles.color : lightStyles.color;

  if (error) {
    return <Alert />;
  }

  const [isVideoInFavorites, setIsVideoInFavorites] = useState(null);

  useEffect(() => {
    setIsVideoInFavorites(favorites.some((favorite) => favorite.id === id));
  }, [id]);

  const handleClick = () => {
    if (isVideoInFavorites) {
      setIsVideoInFavorites(false);
      const newFavorites = favorites.filter((favorite) => favorite.id !== id);
      dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: newFavorites });
    } else {
      setIsVideoInFavorites(true);
      dispatch({ type: 'ADD_TO_FAVORITES', payload: video });
    }
  };

  return (
    <StyledVideoContainer>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ReactPlayer url={`${youtubeVideoUrl}${id}`} width="auto" />
          <StyledVideoTitle textColor={textColor}>
            {video ? video.snippet.localized.title : ''}
          </StyledVideoTitle>
          {isLoggedIn && !favoritesPage && (
            <Button variant="danger" onClick={handleClick}>
              {isVideoInFavorites ? 'Remove From' : 'Add to'} Favorites
            </Button>
          )}
          <StyledVideoDescription textColor={textColor}>
            {video ? video.snippet.localized.description.slice(0, 300) : ''}
          </StyledVideoDescription>
        </>
      )}
    </StyledVideoContainer>
  );
};

VideoContainer.propTypes = {
  error: PropTypes.object,
  loading: PropTypes.bool,
  video: PropTypes.object,
  id: PropTypes.string,
  favoritesPage: PropTypes.bool,
};

export default VideoContainer;
