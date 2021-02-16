import styled from 'styled-components';
import { device } from 'styles/MediaQueries';

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media ${device('max').tablet} {
    flex-direction: column;
  }
`;
