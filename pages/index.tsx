import Head from 'next/head';
import Hero from '../components/molecules/Hero/Hero';
import ProjectsList from '../components/organisms/ProjectsList/ProjecstList';
import ToolsSection from '../components/organisms/ToolsSection/ToolsSection';
import LinkedinBlock from '../components/organisms/LinkedinBlock/LinkedinBlock';
import { getProjectsData, ProjectData } from '../lib/projects';

interface HomePageProps {
  projects: ProjectData[];
}

export default function HomePage({ projects }: HomePageProps) {
  return (
    <>
      <Head>
        <title key="title">Manu Hdez</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <ProjectsList recents projects={projects} />
        <ToolsSection />
        <LinkedinBlock />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const projects = getProjectsData();

  return {
    props: {
      projects,
    },
  };
}
