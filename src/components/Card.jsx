import styled from 'styled-components';
import { StyledCard } from './styles/Card.styled';
import PropTypes from 'prop-types';

const Thumbnail = styled.img`
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const CardTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: auto;
  color: #18191a;
`;

const CardTitleContainer = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding: 0px 15px;
`;

const CardDescription = styled.p`
  font-size: 16px;
  text-overflow: ellipsis;
  color: #18191a;
`;

const CardDescriptionContainer = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: 2%;
  padding: 0 15px;
`;

const Card = ({ thumbnail, title, description }) => {
  return (
    <StyledCard>
      <Thumbnail
        src={thumbnail ? thumbnail : Card.defaultProps.description}
        alt="video-thumbnail"
      />
      <CardTitleContainer>
        <CardTitle>{title ? title : Card.defaultProps.title}</CardTitle>
      </CardTitleContainer>
      <CardDescriptionContainer>
        <CardDescription>
          {description ? description : Card.defaultProps.description}
        </CardDescription>
      </CardDescriptionContainer>
    </StyledCard>
  );
};

Card.defaultProps = {
  thumbnail:
    'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s240-c-k-c0xffffffff-no-rj-mo',
  title: 'This video has no title',
  description: 'This video has no description',
};

Card.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
