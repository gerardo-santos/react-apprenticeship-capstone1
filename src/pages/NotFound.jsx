import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import { PageContainer } from '../components/styles/PageContainer.styled';
import { Wrapper } from '../components/styles/Wrapper.styled';
import { MainTitle } from '../components/styles/MainTitle.styled';
import { lightStyles } from '../components/styles/ThemeStyles.styled';
import { darkStyles } from '../components/styles/ThemeStyles.styled';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const NotFound = () => {
  const { darkMode } = useContext(GlobalContext);
  const backgroundColor = darkMode
    ? darkStyles.backgroundColor
    : lightStyles.backgroundColor;
  const textColor = darkMode ? darkStyles.color : lightStyles.color;

  return (
    <PageContainer backgroundColor={backgroundColor}>
      <Wrapper>
        <MainTitle textColor={textColor}>404 Page Not Found</MainTitle>
        <Alert variant="warning">Oops, sorry we cannot find that page!</Alert>
        <Link to="/">
          <Button>Go to Home Page</Button>
        </Link>
      </Wrapper>
    </PageContainer>
  );
};

export default NotFound;
