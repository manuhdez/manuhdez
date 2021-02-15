import React from 'react';
import Logo from 'components/atoms/Logo/Logo';
import NavLinks from 'components/atoms/NavLinks/NavLinks';
import { Header, Nav } from './Navbar.styles';

export default function Navbar() {
  return (
    <Header>
      <Nav>
        <Logo />
        <NavLinks />
      </Nav>
    </Header>
  );
}
