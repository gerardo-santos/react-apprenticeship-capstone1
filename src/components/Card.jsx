import { StyledCard } from './styles/Card.styled';
import { CardThumbnail } from './styles/CardThumbnail.styled';
import { CardTitle } from './styles/CardTitle.styled';
import { CardTitleContainer } from './styles/CardTitleContainer.styled';
import { CardDescription } from './styles/CardDescription.styled';
import { CardDescriptionContainer } from './styles/CardDescriptionContainer.styled';
import PropTypes from 'prop-types';

const Card = ({ thumbnail, title, description }) => {
  return (
    <StyledCard>
      <CardThumbnail src={thumbnail} alt="video-thumbnail" />
      <CardTitleContainer>
        <CardTitle>{title}</CardTitle>
      </CardTitleContainer>
      <CardDescriptionContainer>
        <CardDescription>{description}</CardDescription>
      </CardDescriptionContainer>
    </StyledCard>
  );
};

Card.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
