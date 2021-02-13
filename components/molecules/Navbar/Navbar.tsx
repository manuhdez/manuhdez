import Link from 'next/link';
import styles from './Navbar.module.scss';
import Logo from 'components/atoms/Logo/Logo';

const navLinksData = [
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
  // {
  //   route: '/blog',
  //   title: 'Blog (Coming soon)',
  //   disabled: true,
  // },
];

export default function Navbar() {
  const renderNavBarLink = ({ route, title, disabled }) => (
    <li key={route} className={disabled ? styles.disabled : undefined}>
      <Link href={route}>
        <a>{title}</a>
      </Link>
    </li>
  );

  return (
    <header className={styles.header}>
      <Logo />
      <nav>
        <ul className={styles.nav_links}>
          {navLinksData.map(renderNavBarLink)}
        </ul>
      </nav>
    </header>
  );
}
