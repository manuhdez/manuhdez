import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>A Fullstack web developer with a taste for design</h1>
      <p>
        We transform your business problems into beautiful creative solutions.
        Let us help you tell your story.
      </p>
    </section>
  );
}
