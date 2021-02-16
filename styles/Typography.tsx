import styled, { AnyStyledComponent, css } from 'styled-components';

export default css`
  @font-face {
    font-family: AirbnbCereal;
    font-weight: 300;
    src: url('../public/assets/fonts/airbnbcereal/light-webfont.woff2')
      format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: AirbnbCereal;
    font-weight: 400;
    src: url('../public/assets/fonts/airbnbcereal/book-webfont.woff2')
      format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: AirbnbCereal;
    font-weight: 500;
    src: url('../public/assets/fonts/airbnbcereal/medium-webfont.woff2')
      format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: AirbnbCereal;
    font-weight: 600;
    src: url('../public/assets/fonts/airbnbcereal/bold-webfont.woff2')
      format('woff2');
    font-display: swap;
  }
`;

export const H1 = styled.h1`
  font-size: 3.125rem;
  font-weight: 600;
`;

export const H2 = styled.h2`
  font-size: 2.25rem;
  font-weight: 600;
`;

export const H3 = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
`;

export const BodyLarge = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;

export const Body = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
`;

export const BodySmall = styled.p`
  font-size: 0.7rem;
  font-weight: 300;
`;

interface UnderlineModifiers {
  color?: string;
  space?: number;
}

export const withHover = ({
  color = 'pearl-white',
  space = 0.3,
}: UnderlineModifiers) => css`
  &:hover {
    color: var(--${color});
  }

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: var(--${color});
    margin-top: ${space}rem;
    transition: width 300ms ease-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const withUnderline = ({ color, space }: UnderlineModifiers) => css`
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: var(--${color});
    margin-top: var(--${space});
    transition: width 300ms ease-out;
  }
`;
