import { StyledSuggestedVideoCard } from './styles/SuggestedVideoCard.styled';
import PropTypes from 'prop-types';

const SuggestedVideoCard = ({ thumbnail, title }) => {
  return (
    <StyledSuggestedVideoCard>
      <img src={thumbnail} alt="suggested-video-img" width="120" />
      <h6>{title}</h6>
    </StyledSuggestedVideoCard>
  );
};

SuggestedVideoCard.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
};

export default SuggestedVideoCard;
