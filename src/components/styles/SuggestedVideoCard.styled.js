import styled from 'styled-components';

export const StyledSuggestedVideoCard = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 4px;
  display: flex;
  border: 2px solid green;
  -webkit-box-shadow: 3px 3px 8px 3px #1e1f21;
  box-shadow: 3px 3px 8px 3px #1e1f21;
  cursor: pointer;
  &:hover {
    -webkit-box-shadow: 3px 3px 8px 3px #424240;
    box-shadow: 3px 3px 8px 3px #424240;
    background-color: #999;
    transition: 0.5s;
  }
  @media (max-width: 400px) {
    min-width: 266px;
  }
`;
