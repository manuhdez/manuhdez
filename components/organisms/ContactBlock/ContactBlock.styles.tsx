import styled from 'styled-components';
import { Section } from 'styles/Layout';
import { theme } from 'styles/MediaQueries';
import { H2, H3, withUnderline } from 'styles/Typography';

export const ContactSection = styled(Section)`
  text-align: center;
`;

export const Title = styled(H2)`
  margin-bottom: 1rem;
`;

export const Subtitle = styled(H3)`
  a {
    display: inline-block;
    border: 3px solid var(--pear-white);
    text-decoration: none;
    color: var(--rich-black);

    ${withUnderline({ color: 'rich-black' })}

    &:hover {
      color: var(--success);
    }

    @media ${theme.dark} {
      color: var(--pearl-white);

      ${withUnderline({ color: 'pearl-white' })}

      &:hover {
        color: var(--accent);
      }
    }
  }
`;
