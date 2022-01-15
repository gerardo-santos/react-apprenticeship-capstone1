import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { PageContainer } from '../components/styles/PageContainer.styled';
import { Wrapper } from '../components/styles/Wrapper.styled';
import { MainTitle } from '../components/styles/MainTitle.styled';
import { lightStyles } from '../components/styles/ThemeStyles.styled';
import { darkStyles } from '../components/styles/ThemeStyles.styled';
import { FormContainer } from '../components/styles/FormContainer.styled';
import { StyledFormLabel } from '../components/styles/StyledFormLabel.styled';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LogIn = () => {
  const { darkMode } = useContext(GlobalContext);
  const backgroundColor = darkMode
    ? darkStyles.backgroundColor
    : lightStyles.backgroundColor;
  const textColor = darkMode ? darkStyles.color : lightStyles.color;

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <PageContainer backgroundColor={backgroundColor}>
      <Wrapper>
        <FormContainer>
          <MainTitle textColor={textColor}>Log in</MainTitle>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>
                <StyledFormLabel textColor={textColor}>
                  Username
                </StyledFormLabel>
              </Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                <StyledFormLabel textColor={textColor}>
                  Password
                </StyledFormLabel>
              </Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Log in
            </Button>
          </Form>
        </FormContainer>
      </Wrapper>
    </PageContainer>
  );
};

export default LogIn;
