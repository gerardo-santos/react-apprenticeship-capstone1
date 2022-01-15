import { useParams } from 'react-router-dom';
import { VideosWrapper } from '../../components/styles/VideosWrapper.styled';
import { PageContainer } from '../../components/styles/PageContainer.styled';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { lightStyles } from '../../components/styles/ThemeStyles.styled';
import { darkStyles } from '../../components/styles/ThemeStyles.styled';
import VideoContainer from '../../components/VideoContainer';

const FavoriteDetails = () => {
  const { darkMode, favorites } = useContext(GlobalContext);
  const { id } = useParams();
  const [video] = favorites.filter((favorite) => id === favorite.id);
  const backgroundColor = darkMode
    ? darkStyles.backgroundColor
    : lightStyles.backgroundColor;
  return (
    <PageContainer backgroundColor={backgroundColor}>
      <VideosWrapper>
        <VideoContainer video={video} id={id} loading={false} error={null} />
      </VideosWrapper>
    </PageContainer>
  );
};

export default FavoriteDetails;
