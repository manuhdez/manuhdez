import Head from 'next/head';
import { AppProps } from 'next/app';

// components
import Navbar from '../components/molecules/Navbar/Navbar';
import Footer from '../components/molecules/Footer/Footer';
// styles
import '../styles/global.scss';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <html lang="en" />
        <link rel="icon" href="/favicon.ico" />
        <title key="title">Manu Hdez - Fullstack developer</title>
        <meta
          name="description"
          content="I’m  passionate about software development and product design.
          I’m a fast-pace learner that loves facing new challenges.
          I’ve been working for two years as a full-stack developer mainly focused on creating UI solutions.
          Always looking for new challenges and opportunities to keep growing in the tech industry as a software developer."
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
