import { createGlobalStyle } from 'styled-components';
import Typography from './Typography';

export default createGlobalStyle`
  ${Typography}

  :root {
    /* Colors */
    --primary: #073b4c;
    --accent: #ffd166;
    --success: #06d6a0;
    --info: #15ade0;
    --error: #ef476f;
    --rich-black: #1c1d25;
    --pure-black: #111113;
    --pearl-white: #fafafa;
    --pure-white: #ffffff;
    --section-light-bg: #edeeef;

    --code-bg: #1e1e1e;

    /* Media queries */
    --mq-phone: 480px;
    --phone: 480px;
    --mq-tablet: 768px;
    --tablet: 768px;
    --mq-desktop: 1152px;
    --desktop: 1152px;
    --mq-desktop-hd: 1700px;
    --desktop-hd: 1700px;

    /* Spacing */
    --padding-x-body: 1.5rem;
    --padding-y-section: 5rem;

    /* Effects */
    --card-shadow-light: 0 2px 6px 0 #bdbdbd;
    --card-shadow-dark: 0 2px 4px 0 rgba(#131313, 0.6);
    --btn-light-shadow: 0 2px 4px 0 rgba(#575656, 0.2);
    --btn-light-border: 1px solid rgba(#bdbdbd, 0.3);
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

    /* tablet */
    @media (min-width: 768px) {
      /* Spacing */
      --padding-x-body: 5.625rem;
    }

    /* desktop */
    @media (min-width: 1152px) {
      /* Spacing */
      --padding-x-body: 11.25rem;
      --padding-y-section: 10rem;
    }

    @media (prefers-color-scheme: dark) {
      color: var(--pearl-white);
      background: var(--rich-black);
    }
  }
`;
