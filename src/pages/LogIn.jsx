import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import { PageContainer } from '../components/styles/PageContainer.styled';
import { Wrapper } from '../components/styles/Wrapper.styled';
import { MainTitle } from '../components/styles/MainTitle.styled';
import { lightStyles } from '../components/styles/ThemeStyles.styled';
import { darkStyles } from '../components/styles/ThemeStyles.styled';
import { FormContainer } from '../components/styles/FormContainer.styled';
import { StyledFormLabel } from '../components/styles/StyledFormLabel.styled';
import loginApi from '../utils/login.api';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorAlert, setErrorAlert] = useState(false);
  const { darkMode, dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();
  const backgroundColor = darkMode
    ? darkStyles.backgroundColor
    : lightStyles.backgroundColor;
  const textColor = darkMode ? darkStyles.color : lightStyles.color;

  const handleSubmit = (e) => {
    e.preventDefault();
    loginApi(username, password)
      .then(() => {
        setErrorAlert(false);
        dispatch({ type: 'LOG_IN' });
        navigate('/');
      })
      .catch(() => {
        setErrorAlert(true);
      });
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
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                <StyledFormLabel textColor={textColor}>
                  Password
                </StyledFormLabel>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            {errorAlert && (
              <Alert variant="danger">Incorrect username or password.</Alert>
            )}
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
