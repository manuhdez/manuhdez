import styled from 'styled-components';
import { device } from 'styles/MediaQueries';
import { H3 } from 'styles/Typography';

export const CategoryTitle = styled(H3)`
  margin-bottom: 0.8rem;
  list-style: none;
`;

export const Tool = styled.li`
  position: relative;
  margin-top: 0.6rem;
  list-style: none;
`;

export const Column = styled.ul`
  display: flex;
  flex-direction: column;

  @media ${device('max').tablet} {
    flex-direction: row;
    flex-wrap: wrap;

    ${CategoryTitle} {
      width: 100%;
      margin-bottom: 0.6rem;
    }

    ${Tool} {
      margin-top: 0;
      margin-right: 0.25rem;
      margin-bottom: 2rem;

      & p::after {
        content: ',';
      }

      &:last-child p::after {
        content: '.';
      }
    }
  }
`;
