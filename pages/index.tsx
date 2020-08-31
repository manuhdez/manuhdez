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
    <main>
      <Hero />
      <ProjectsList recents projects={projects} />
      <ToolsSection />
      <LinkedinBlock />
    </main>
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
