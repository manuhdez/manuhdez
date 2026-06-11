import BackToTop from '../../atoms/BackToTop/BackToTop';
import styles from './Footer.module.scss';

export default function Footer() {
  const currentYear = new Date(Date.now()).getFullYear();

  return (
    <footer className={styles.footer}>
      <address>
        {`© ${currentYear} - Designed and built by manuhdez`}
        <BackToTop />
      </address>
    </footer>
  );
}
