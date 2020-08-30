import Head from 'next/head';
import Hero from '../molecules/Hero/Hero';
import ProjectsList from '../organisms/ProjectsList/ProjecstList';
import ToolsSection from '../organisms/ToolsSection/ToolsSection';
import LinkedinBlock from '../organisms/LinkedinBlock/LinkedinBlock';

export default function HomeTemplate() {
  return (
    <>
      <Head>
        <title>Manu Hdez</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <ProjectsList recents />
        <ToolsSection />
        <LinkedinBlock />
      </main>
    </>
  );
}
