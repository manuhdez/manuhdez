import styled from 'styled-components';
import { device, theme } from 'styles/MediaQueries';

export const Section = styled.section`
  display: flex;
  background: var(--pearl-white);

  @media ${theme.dark} {
    background: var(--pure-black);
  }
`;

export const Image = styled.img.attrs({ loading: 'lazy' })`
  width: 30%;
  max-height: 600px;
  object-fit: cover;
  transition: width 0.2s ease-out;

  @media ${device('max').laptop} {
    width: 20%;
  }

  @media ${device('max').tablet} {
    display: none;
  }
`;

export const ToolsContainer = styled.div`
  padding: 6rem var(--padding-x-body) 6rem 6rem;

  @media ${device('min').laptop} {
    width: 70%;
  }

  @media ${device('max').tablet} {
    padding: 6rem var(--padding-x-body);
  }
`;

export const Header = styled.header`
  margin-bottom: 4.5rem;
`;
