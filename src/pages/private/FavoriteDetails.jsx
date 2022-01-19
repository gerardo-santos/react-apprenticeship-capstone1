import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { VideosWrapper } from '../../components/styles/VideosWrapper.styled';
import { PageContainer } from '../../components/styles/PageContainer.styled';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { lightStyles } from '../../components/styles/ThemeStyles.styled';
import { darkStyles } from '../../components/styles/ThemeStyles.styled';
import VideoContainer from '../../components/VideoContainer';
import SuggestedVideosContainer from '../../components/SuggestedVideosContainer';

const FavoriteDetails = () => {
  const { darkMode, favorites, isLoggedIn } = useContext(GlobalContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/log-in');
      return;
    }
  }, []);

  const backgroundColor = darkMode
    ? darkStyles.backgroundColor
    : lightStyles.backgroundColor;
  const { id } = useParams();
  const [video] = favorites.filter((favorite) => id === favorite.id);

  return (
    <PageContainer backgroundColor={backgroundColor}>
      <VideosWrapper>
        <VideoContainer
          video={video}
          id={id}
          loading={false}
          error={null}
          favoritesPage={true}
        />
        <SuggestedVideosContainer
          suggestedVideos={favorites}
          loading={false}
          error={null}
          favoritesPage={true}
        />
      </VideosWrapper>
    </PageContainer>
  );
};

export default FavoriteDetails;
