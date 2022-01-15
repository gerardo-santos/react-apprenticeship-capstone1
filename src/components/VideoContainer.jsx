import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { StyledVideoContainer } from './styles/VideoContainer.styled';
import { lightStyles } from './styles/ThemeStyles.styled';
import { darkStyles } from './styles/ThemeStyles.styled';
import { StyledVideoTitle } from './styles/StyledVideoTitle.styled';
import { StyledVideoDescription } from './styles/StyledVideoDescription.styled';
import { youtubeVideoUrl } from '../utils/constants';
import { youtubeApiUrl } from '../utils/constants';
import useFetch from '../hooks/useFetch';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Spinner from './Spinner';
import ReactPlayer from 'react-player';

const VideoContainer = () => {
  const { darkMode, isLoggedIn, favorites, dispatch } =
    useContext(GlobalContext);

  const textColor = darkMode ? darkStyles.color : lightStyles.color;
  const { id } = useParams();

  const { loading, error, data } = useFetch(
    // eslint-disable-next-line no-undef
    `${youtubeApiUrl}videos?part=snippet&id=${id}&key=${process.env.REACT_APP_API_KEY}`,
    {},
    id
  );

  if (error) {
    return <Alert />;
  }

  const video = data ? data.items[0] : {};
  const videoTitle = data ? video.snippet.localized.title : '';
  const videoDescription = data ? video.snippet.localized.description : '';

  const [isVideoInFavorites, setIsVideoInFavorites] = useState(() => {
    return favorites.some((favorite) => favorite.id === id);
  });

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
            {videoTitle}
          </StyledVideoTitle>
          {isLoggedIn && (
            <Button variant="danger" onClick={handleClick}>
              {isVideoInFavorites ? 'Remove From' : 'Add to'} Favorites
            </Button>
          )}
          <StyledVideoDescription textColor={textColor}>
            {videoDescription.slice(0, 300)}
          </StyledVideoDescription>
        </>
      )}
    </StyledVideoContainer>
  );
};

export default VideoContainer;
