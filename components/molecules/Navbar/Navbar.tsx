import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import styles from './Navbar.module.scss';
import Logo from '../../atoms/Logo/Logo';

const navLinksData = [
  {
    route: '/projects',
    title: 'Projects',
    disabled: false,
  },
  {
    route: '/#about',
    title: 'About',
    disabled: false,
  },
  {
    route: '/blog',
    title: 'Blog (Coming soon)',
    disabled: true,
  },
];

export default function Navbar() {
  const getNavbarContent = () => {
    return (
      <nav>
        <ul className={styles.nav_links}>
          {navLinksData.map(({ route, title, disabled }) => {
            return (
              <li
                key={route}
                className={disabled ? styles.disabled : undefined}
              >
                <Link href={route}>
                  <a>{title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  };

  return (
    <header className={styles.header}>
      <Logo />
      {getNavbarContent()}
    </header>
  );
}
