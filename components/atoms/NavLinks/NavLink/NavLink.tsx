import React from 'react';
import Link from 'next/link';
import { StyledNavLink } from './NavLink.styles';

export interface NavLinkProps {
  route: string;
  title: string;
  disabled: boolean;
}

export default function NavLink({ route, title, disabled }: NavLinkProps) {
  return (
    <StyledNavLink disabled={disabled}>
      <Link href={route}>
        <a>{title}</a>
      </Link>
    </StyledNavLink>
  );
}
