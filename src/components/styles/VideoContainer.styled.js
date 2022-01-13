import styled from 'styled-components';

export const StyledVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
  padding-right: 10px;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 0 15px 0;
  }
`;
