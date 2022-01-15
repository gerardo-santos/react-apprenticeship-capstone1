import { VideosWrapper } from '../../components/styles/VideosWrapper.styled';
import { PageContainer } from '../../components/styles/PageContainer.styled';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { lightStyles } from '../../components/styles/ThemeStyles.styled';
import { darkStyles } from '../../components/styles/ThemeStyles.styled';

const FavoriteDetails = () => {
  const { darkMode } = useContext(GlobalContext);
  const backgroundColor = darkMode
    ? darkStyles.backgroundColor
    : lightStyles.backgroundColor;
  return (
    <PageContainer backgroundColor={backgroundColor}>
      <VideosWrapper></VideosWrapper>
    </PageContainer>
  );
};

export default FavoriteDetails;
