import styles from './Navbar.module.scss';
import Logo from '../../atoms/Logo/Logo';

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
    {
        route: '/blog',
        title: 'Blog (coming soon)',
        disabled: true,
    },
];

export default function Navbar() {
    const renderNavBarLink = ({ route, title, disabled }) => (
        <li key={route} className={disabled ? styles.disabled : undefined}>
            <a href={route}>{title}</a>
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
