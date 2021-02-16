import styled from 'styled-components';
import { device } from 'styles/MediaQueries';

interface GridProps {
  recents: boolean;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 420px;
  gap: 2rem;
  grid-auto-flow: dense;

  ${({ recents }) =>
    !recents && 'padding: var(--padding-y-section) var(--padding-x-body);'}

  @media ${device('min').desktop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device('max').laptop} {
    grid-template-columns: 1fr;
  }
`;
