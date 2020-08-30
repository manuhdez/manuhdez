import styles from './LinkedinBlock.module.scss';

export default function LinkedinBlock() {
  return (
    <section className={styles.section} id="about">
      <h2>
        If you want to connect with me or to know more about my profesional
        experiences
      </h2>
      <a
        href="https://www.linkedin.com/in/manuhdez/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <p>Click here to check my Linkedin profile ➡️ </p>
      </a>
    </section>
  );
}
