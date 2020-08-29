import Head from 'next/head';
import Hero from '../molecules/Hero/Hero';

export default function HomeTemplate() {
  return (
    <>
      <Head>
        <title>Manu Hdez</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
      </main>
    </>
  );
}
