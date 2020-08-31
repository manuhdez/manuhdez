import styles from './LinkedinBlock.module.scss';

export default function LinkedinBlock() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.texts}>
        <h2>Let's get in touch!</h2>
        <h3>
          Feel free to say “Hi” on any of my socials
          <br />
          or at{' '}
          <a
            className={styles.email_link}
            href="mailto:hi@manuhdez.com?subject=Hi Manu!"
          >
            hi@manuhdez.com
          </a>
        </h3>
      </div>
      <div className={styles.social_links}>
        <div>
          <a
            href="https://www.linkedin.com/in/manuhdez/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/manuhdez"
            target="_blank"
            rel="noreferrer noopener"
          >
            Github
          </a>
        </div>
        <div>
          <a
            href="https://codepen.io/ManuHdez"
            target="_blank"
            rel="noreferrer noopener"
          >
            Codepen
          </a>
          <a
            href="https://dribbble.com/manuhdez"
            target="_blank"
            rel="noreferrer noopener"
          >
            Dribbble
          </a>
        </div>
        <div>
          <a
            href="https://twitter.com/manuhdez_com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/manu_hdez/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
