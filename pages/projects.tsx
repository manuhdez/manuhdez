import Head from 'next/head';
import PageTitle from '../components/molecules/PageTitle/PageTitle';
import ProjectsList from '../components/organisms/ProjectsList/ProjecstList';
import { getProjectsData, ProjectData } from '../lib/projects';

interface ProjectsPageProps {
  projects: ProjectData[];
}

export default function ProjectsPage(props: ProjectsPageProps) {
  const { projects } = props;

  const title = 'Projects';
  const subtitle =
    'This is a selection of some personal projects I have develop while learning new things.';

  return (
    <>
      <Head>
        <title key="title">Manu Hdez - Projects</title>
      </Head>

      <main>
        <PageTitle title={title} subtitle={subtitle} />
        <ProjectsList projects={projects} />
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
