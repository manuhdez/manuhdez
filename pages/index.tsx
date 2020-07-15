import Head from 'next/head';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Manu Hdez</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Hello world</h1>
      </main>
    </div>
  );
}
