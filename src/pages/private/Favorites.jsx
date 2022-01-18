import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import { lightStyles } from '../../components/styles/ThemeStyles.styled';
import { darkStyles } from '../../components/styles/ThemeStyles.styled';
import { PageContainer } from '../../components/styles/PageContainer.styled';
import { Wrapper } from '../../components/styles/Wrapper.styled';
import { MainTitle } from '../../components/styles/MainTitle.styled';
import { CardGrid } from '../../components/styles/CardGrid.styled';
import Card from '../../components/Card';
import Alert from 'react-bootstrap/Alert';

const Favorites = () => {
  const { isLoggedIn, darkMode, favorites, dispatch } =
    useContext(GlobalContext);
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
  const textColor = darkMode ? darkStyles.color : lightStyles.color;
  return (
    <PageContainer backgroundColor={backgroundColor}>
      <Wrapper>
        <MainTitle textColor={textColor}>Favorites</MainTitle>
        <CardGrid>
          {favorites.length > 0 ? (
            favorites.map((favorite) => (
              <Card
                key={`${favorite.id}-${Math.random()}`}
                url={`/favorite-details/${favorite.id}`}
                thumbnail={favorite.snippet.thumbnails.medium.url}
                title={favorite.snippet.title}
                description={favorite.snippet.description}
                textColor={textColor}
                favorites={favorites}
                dispatch={dispatch}
                id={favorite.id}
              />
            ))
          ) : (
            <Alert>You have not added videos to your favorites list.</Alert>
          )}
        </CardGrid>
      </Wrapper>
    </PageContainer>
  );
};

export default Favorites;
