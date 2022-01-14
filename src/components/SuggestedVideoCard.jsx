import { StyledSuggestedVideoCard } from './styles/SuggestedVideoCard.styled';
import { SuggestedVideoTitle } from './styles/SuggestedVideoTitle.styled';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { lightStyles } from './styles/ThemeStyles.styled';
import { darkStyles } from './styles/ThemeStyles.styled';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SuggestedVideoCard = ({ thumbnail, title, url }) => {
  const { darkMode } = useContext(GlobalContext);

  const backgroundColor = darkMode
    ? darkStyles.backgroundColor
    : lightStyles.backgroundColor;
  const textColor = darkMode ? darkStyles.color : lightStyles.color;
  return (
    <Link to={url}>
      <StyledSuggestedVideoCard backgroundColor={backgroundColor}>
        <img src={thumbnail} alt="suggested-video-img" width="120" />
        <SuggestedVideoTitle textColor={textColor}>{title}</SuggestedVideoTitle>
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
