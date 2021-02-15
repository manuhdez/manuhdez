import styled from 'styled-components';
import { H1, BodyLarge } from 'styles/Typography';
import { device } from 'styles/MediaQueries';

export const TitleContainer = styled.div`
  padding: 8rem var(--padding-x-body) 0;

  ${H1} {
    margin-bottom: 1rem;
  }

  @media ${device.mobileL} {
    width: 50%;

    ${H1} {
      max-width: 520px;
    }
  }
`;
