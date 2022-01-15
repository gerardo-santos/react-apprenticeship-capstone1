import { Link } from 'react-router-dom';
import { StyledCard } from './styles/Card.styled';
import { CardThumbnail } from './styles/CardThumbnail.styled';
import { CardTitle } from './styles/CardTitle.styled';
import { CardTitleContainer } from './styles/CardTitleContainer.styled';
import { CardDescription } from './styles/CardDescription.styled';
import { CardDescriptionContainer } from './styles/CardDescriptionContainer.styled';
import Button from 'react-bootstrap/Button';

import PropTypes from 'prop-types';

const Card = ({
  thumbnail,
  title,
  description,
  url,
  textColor,
  favorites,
  id,
  dispatch,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    const newFavorites = favorites.filter((favorite) => favorite.id !== id);
    dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: newFavorites });
  };
  return (
    <Link to={url} style={{ textDecoration: 'none' }}>
      <StyledCard>
        <CardThumbnail src={thumbnail} alt="video-thumbnail" />
        <CardTitleContainer>
          <CardTitle textColor={textColor}>{title}</CardTitle>
        </CardTitleContainer>
        <CardDescriptionContainer>
          <CardDescription textColor={textColor}>{description}</CardDescription>
        </CardDescriptionContainer>
        {favorites && (
          <Button variant="danger" onClick={handleClick}>
            Remove
          </Button>
        )}
      </StyledCard>
    </Link>
  );
};

Card.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  textColor: PropTypes.string,
  favorites: PropTypes.array,
  id: PropTypes.string,
  dispatch: PropTypes.func,
};

export default Card;
