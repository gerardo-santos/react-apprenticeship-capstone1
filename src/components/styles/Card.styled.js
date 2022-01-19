import styled from 'styled-components';

export const StyledCard = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
  font-family: 'Montserrat', sans-serif;
  width: 300px;
  height: 350px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  margin: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  border: 3px solid #198754;
  -webkit-box-shadow: 5px 5px 15px 5px #1e1f21;
  box-shadow: 5px 5px 15px 5px #1e1f21;
  cursor: pointer;
  &:hover {
    -webkit-box-shadow: 5px 5px 15px 5px #424240;
    box-shadow: 5px 5px 15px 5px #424240;
    background-color: #999;
    transition: 0.5s;
  }
  @media (max-width: 400px) {
    min-width: 266px;
  }
`;
