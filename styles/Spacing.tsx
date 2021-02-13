import { css } from 'styled-components';

export default css`
  --mq-phone: 480px;
  --mq-tablet: 768px;
  --mq-desktop: 1152px;
  --mq-desktop-hd: 1700px;

  /* phone */
  --padding-x-body: 1.5rem;
  --padding-y-section: 5rem;

  /* tablet */
  @media (min-width: var(--mq-tablet)) {
    --padding-x-body: 5.625rem;
  }

  /* desktop */
  @media (min-width: var(--mq-desktop)) {
    --padding-x-body: 11.25rem;
    --padding-y-section: 10rem;
  }
`;
