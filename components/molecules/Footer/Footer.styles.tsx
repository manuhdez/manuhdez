import styled from 'styled-components';
import { device, theme } from 'styles/MediaQueries';
import { Body, withHover } from 'styles/Typography';

const StyledBody = styled(Body)`
  font-weight: 300;
  font-style: initial;
  text-align: center;

  @media ${device('max').laptop} {
    margin-top: 2rem;
  }
`;

export const Address = ({ children }) => {
  return <StyledBody as="address">{children}</StyledBody>;
};

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  padding: 2rem var(--padding-x-body);
  background: var(--pearl-white);

  @media ${device('min').laptop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media ${theme.dark} {
    background: var(--rich-black);
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: var(--mq-tablet-xl)) {
    width: 80%;
    margin-left: 0;
    margin-top: 4rem;
  }

  @media (max-width: var(--mq-phone)) {
    width: 100%;
    margin-left: 0;
  }

  a {
    display: block;
    margin-right: 1rem;
    color: var(--rich-black);
    text-decoration: none;
    ${withHover({ color: 'accent' })}

    @media ${theme.dark} {
      color: var(--pearl-white);
      ${withHover({ color: 'accent' })}
    }
  }
`;
