import styled from 'styled-components';

export const StyledSuggestedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  overflow-y: scroll;
  width: 50%;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;
