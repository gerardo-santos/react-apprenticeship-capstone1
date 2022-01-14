import styled from 'styled-components';

export const CardDescription = styled.p`
  font-size: 16px;
  text-overflow: ellipsis;
  color: ${({ textColor }) => textColor};
`;
