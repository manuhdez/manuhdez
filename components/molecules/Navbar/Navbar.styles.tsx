import styled from 'styled-components';
import { theme } from 'styles/MediaQueries';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem var(--padding-x-body);

  background: var(--pearl-white);

  @media ${theme.dark} {
    background: var(--rich-black);
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;
