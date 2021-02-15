import styled, { css } from 'styled-components';
import { theme } from 'styles/MediaQueries';
import { withHover } from 'styles/Typography';

interface StyledNavLinkProps {
  disabled?: boolean;
}

const disabledProps = css`
  pointer-events: none;
  opacity: 0.3;
`;

export const StyledNavLink = styled.li<StyledNavLinkProps>`
  margin-left: 1.5rem;
  margin-bottom: 0;
  list-style: none;

  &:first-child {
    margin-left: 0;
  }

  ${({ disabled }) => disabled && disabledProps}

  a {
    display: block;
    width: 100%;
    height: 100%;

    font-size: 0.9rem;
    text-decoration: none;

    color: var(--rich-black);
    ${withHover({ color: 'success' })}

    @media ${theme.dark} {
      color: var(--pearl-white);
    }
  }
`;
