import {
  ProjectData,
  getProjectData,
  getAllProjectsIds,
} from '../../lib/projects';

import ProjectHeader from '../../components/molecules/ProjectHeader/ProjectHeader';
import MdContent from '../../components/organisms/MdContent/MdContent';
import Head from 'next/head';

export default function ProjectPage(props: ProjectData) {
  const { content } = props;

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/styles/prism.css" />
      </Head>
      <ProjectHeader {...props} />
      <MdContent content={content} />
      <script src="/scripts/prism.js"></script>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllProjectsIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id);

  return {
    props: {
      ...projectData,
    },
  };
}
