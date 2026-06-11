import styles from './BackToTop.module.scss';

export default function BackToTop() {
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <button onClick={handleClick} className={styles.back_top}>
      <span className={styles.text}>Back to top</span>
      <span className={styles.arrow}>⬆️</span>
    </button>
  );
}
