import { Head, Html, Main, NextScript } from "next/document";

export default function Document(): JSX.Element {
  return (
    <>
      <Head>
        <html lang="en" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />

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
      <Main />
      <NextScript />
      <Html />
    </>
  );
}
