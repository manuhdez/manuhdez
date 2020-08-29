import styles from './LinkedinBlock.module.scss';

export default function LinkedinBlock() {
  return (
    <section className={styles.section}>
      <h2>If you want to know more about my experience and education</h2>
      <a href="">
        <p>You can check my Linkedin profile here ➡️ </p>
      </a>
    </section>
  );
}