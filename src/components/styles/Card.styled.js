import styled from 'styled-components';

export const StyledCard = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
  font-family: 'Montserrat', sans-serif;
  color: #18191a;
  width: 300px;
  height: 350px;
  background-color: white;
  margin: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 5px 5px 15px 5px #1e1f21;
  box-shadow: 5px 5px 15px 5px #1e1f21;
  cursor: pointer;
  &:hover {
    -webkit-box-shadow: 5px 5px 15px 5px #424240;
    box-shadow: 5px 5px 15px 5px #424240;
  }
  @media (max-width: 400px) {
    min-width: 266px;
  }
`;
