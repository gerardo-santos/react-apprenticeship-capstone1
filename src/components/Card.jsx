import { Link } from 'react-router-dom';
import { StyledCard } from './styles/Card.styled';
import { CardThumbnail } from './styles/CardThumbnail.styled';
import { CardTitle } from './styles/CardTitle.styled';
import { CardTitleContainer } from './styles/CardTitleContainer.styled';
import { CardDescription } from './styles/CardDescription.styled';
import { CardDescriptionContainer } from './styles/CardDescriptionContainer.styled';

import PropTypes from 'prop-types';

const Card = ({ thumbnail, title, description, url, textColor }) => {
  return (
    <Link to={url}>
      <StyledCard>
        <CardThumbnail src={thumbnail} alt="video-thumbnail" />
        <CardTitleContainer>
          <CardTitle textColor={textColor}>{title}</CardTitle>
        </CardTitleContainer>
        <CardDescriptionContainer>
          <CardDescription textColor={textColor}>{description}</CardDescription>
        </CardDescriptionContainer>
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
};

export default Card;
