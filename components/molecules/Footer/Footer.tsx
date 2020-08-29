import styles from './Footer.module.scss';

export default function Footer() {
  const currentYear = new Date(Date.now()).getFullYear();

  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.contact_block}>
          <h2>Have a project?</h2>
          <h3>
            Feel free to say “Hi”, just write me a tweet, or send me an email.
          </h3>
        </div>
        <div className={styles.social_links}>
          <div>
            <a
              href="https://twitter.com/manuhdez_com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Twitter
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
              href="https://www.linkedin.com/in/manuhdez/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Linkedin
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
              href="https://www.instagram.com/manu_hdez/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Instagram
            </a>
            <a
              href="https://codepen.io/ManuHdez"
              target="_blank"
              rel="noreferrer noopener"
            >
              Codepen
            </a>
          </div>
        </div>
      </div>
      <p>{`© ${currentYear} - Designed and built by manuhdez with react and Next.js`}</p>
    </footer>
  );
}
