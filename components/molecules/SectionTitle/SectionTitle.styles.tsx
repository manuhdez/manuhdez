import styled from 'styled-components';
import { theme } from 'styles/MediaQueries';
import { H2, withHover } from 'styles/Typography';

export const Container = styled.header`
  margin-bottom: 4rem;

  ${H2} {
    margin-bottom: 0.5rem;
  }

  a {
    display: inline-block;
    width: auto;
    margin: 0;

    text-decoration: none;
    color: var(--rich-black);

    ${withHover({ color: 'success' })}

    @media ${theme.dark} {
      color: var(--pearl-white);
    }
  }
`;
