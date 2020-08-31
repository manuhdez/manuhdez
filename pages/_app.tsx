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
        <title key="title">Manu Hdez - Fullstack developer</title>
        <meta name="description" content="Manu Hdez - Fullstack developer" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
