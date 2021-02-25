import { getProjectsData, ProjectData } from 'lib/projects';
import Hero from 'components/molecules/Hero/Hero';
import ToolsSection from 'components/organisms/ToolsSection/ToolsSection';
import ContactBlock from 'components/organisms/ContactBlock/ContactBlock';
import ProjectsSection from 'components/organisms/ProjectsSection/ProjectsSection';

interface HomePageProps {
  projects: ProjectData[];
}

export default function HomePage({ projects }: HomePageProps) {
  return (
    <main>
      <Hero />
      <ProjectsSection projects={projects} />
      <ToolsSection />
      <ContactBlock />
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
