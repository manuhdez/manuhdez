import { createGlobalStyle } from 'styled-components';
import Colors from './Colors';
import Spacing from './Spacing';
import Effects from './Effects';
import Typography from './Typography';

export default createGlobalStyle`
  :root {
    ${Colors}
    ${Spacing}
    ${Effects}
    ${Typography}
  }

  html,
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'AirbnbCereal', sans-serif;
    color: var(--rich-black);

    & *::selection {
      background: var(--accent);
      color: var(--rich-black);
    }

    @media (prefers-color-scheme: dark) {
      color: var(--pearl-white);
      background-color: var(--rich-black);
    }
  }
`;
