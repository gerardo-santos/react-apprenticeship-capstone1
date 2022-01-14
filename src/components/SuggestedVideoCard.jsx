import { StyledSuggestedVideoCard } from './styles/SuggestedVideoCard.styled';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SuggestedVideoCard = ({ thumbnail, title, url }) => {
  return (
    <Link to={url}>
      <StyledSuggestedVideoCard>
        <img src={thumbnail} alt="suggested-video-img" width="120" />
        <h6>{title}</h6>
      </StyledSuggestedVideoCard>
    </Link>
  );
};

SuggestedVideoCard.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};

export default SuggestedVideoCard;
