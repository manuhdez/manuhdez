import { AppProps } from 'next/app';

// components
import Navbar from '../components/molecules/Navbar/Navbar';
// styles
import '../styles/global.scss';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
