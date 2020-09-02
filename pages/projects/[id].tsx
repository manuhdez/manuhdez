import {
  ProjectData,
  getProjectData,
  getAllProjectsIds,
} from '../../lib/projects';

import ProjectHeader from '../../components/molecules/ProjectHeader/ProjectHeader';
import MdContent from '../../components/organisms/MdContent/MdContent';
import Head from 'next/head';

export default function ProjectPage(props: ProjectData) {
  const { id, content, title, short_description } = props;

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/styles/prism.css" />
        <meta key="og:title" property="og:title" content={title} />
        <meta
          key="og:url"
          property="og:url"
          content={`https://manuhdez.com/projects/${id}`}
        />
        <meta
          key="og:image"
          property="og:image"
          content={`/assets/images/projects/${id}/cover.png`}
        />
        <meta
          key="description"
          name="description"
          content={short_description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={short_description}
        />
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
