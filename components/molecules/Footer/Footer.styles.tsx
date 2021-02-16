import styled from 'styled-components';
import { device, theme } from 'styles/MediaQueries';
import { Body } from 'styles/Typography';

const StyledBody = styled(Body)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 300;
  font-style: initial;
  text-align: center;

  @media ${device('min').tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Address = ({ children }) => {
  return <StyledBody as="address">{children}</StyledBody>;
};

export const StyledFooter = styled.footer`
  padding: 2rem var(--padding-x-body);
  background: var(--pearl-white);

  @media ${theme.dark} {
    background: var(--rich-black);
  }
`;
