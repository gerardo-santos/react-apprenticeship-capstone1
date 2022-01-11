import styled from 'styled-components';

export const StyledSuggestedVideoCard = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
  font-family: 'Montserrat', sans-serif;
  color: #18191a;
  background-color: white;
  border-radius: 4px;
  display: flex;
  -webkit-box-shadow: 3px 3px 8px 3px #1e1f21;
  box-shadow: 3px 3px 8px 3px #1e1f21;
  cursor: pointer;
  &:hover {
    -webkit-box-shadow: 3px 3px 8px 3px #424240;
    box-shadow: 3px 3px 8px 3px #424240;
  }
  @media (max-width: 400px) {
    min-width: 266px;
  }
`;
