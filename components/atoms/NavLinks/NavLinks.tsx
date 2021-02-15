import React from 'react';
import NavLink from './NavLink/NavLink';
import { NavLinksList } from './NavLinks.styles';

export default function NavLinks() {
  const links = [
    {
      route: '/projects',
      title: 'Projects',
      disabled: false,
    },
    {
      route: '/#contact',
      title: 'Contact',
      disabled: false,
    },
    {
      route: '/blog',
      title: 'Blog (Coming soon)',
      disabled: true,
    },
  ];

  return (
    <nav>
      <NavLinksList>
        {links.map((link) => (
          <NavLink key={link.title} {...link} />
        ))}
      </NavLinksList>
    </nav>
  );
}
