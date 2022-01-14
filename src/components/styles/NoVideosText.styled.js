import styled from 'styled-components';

export const NoVideosText = styled.span`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  padding-top: 10px;
  color: ${({ textColor }) => textColor};
`;
