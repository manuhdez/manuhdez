import styled, { StyledComponent } from 'styled-components';
import { device } from 'styles/MediaQueries';
import { Body, H1 } from 'styles/Typography';

const TextStyle = (component: StyledComponent<any, any>) => styled(component)`
  width: 80%;
  max-width: 830px;
  margin: 0 auto;
  margin-bottom: 0.5rem;

  @media ${device.tablet} {
    margin: initial;
    margin-bottom: 1rem;
  }
`;

export const Title = TextStyle(H1);

export const Subtitle = TextStyle(Body);

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: calc(100vh - 5rem);

  padding: 0 var(--padding-x-body);
`;
