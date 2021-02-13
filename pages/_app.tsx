import Head from 'next/head';
import { AppProps } from 'next/app';
import Navbar from 'components/molecules/Navbar/Navbar';
import Footer from 'components/molecules/Footer/Footer';
import GlobalStyle from 'styles/GlobalStyle';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <html lang="en" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />

        <title key="title">Manu Hdez - Fullstack developer</title>
        <meta
          key="og:title"
          property="og:title"
          content="Manu Hdez - Fullstack developer"
        />

        <meta
          key="description"
          name="description"
          content="I’m  passionate about software development and product design.
          I’m a fast-pace learner that loves facing new challenges.
          I’ve been working for two years as a full-stack developer mainly focused on creating UI solutions.
          Always looking for new challenges and opportunities to keep growing in the tech industry as a software developer."
        />
        <meta
          key="og:description"
          property="og:description"
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
