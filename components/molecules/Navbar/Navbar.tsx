import Link from 'next/link';
import styles from './Navbar.module.scss';
import Logo from '../../atoms/Logo/Logo';

const navLinksData = [
  {
    route: '/projects',
    title: 'Projects',
  },
  // {
  //   route: '/blog',
  //   title: 'Blog',
  // },
  {
    route: '/about',
    title: 'About',
  },
];

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Logo />
      <nav>
        <ul className={styles.nav_links}>
          {navLinksData.map(({ route, title }) => {
            return (
              <li key={route}>
                <Link href={route}>
                  <a>{title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
