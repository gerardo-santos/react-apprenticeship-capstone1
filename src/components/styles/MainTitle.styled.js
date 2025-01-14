import styled from 'styled-components';

export const MainTitle = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  padding-top: 10px;
  color: ${({ textColor }) => textColor};
`;
