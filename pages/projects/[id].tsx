import {
  ProjectData,
  getProjectData,
  getAllProjectsIds,
} from '../../lib/projects';

import ProjectHeader from '../../components/molecules/ProjectHeader/ProjectHeader';
import MdContent from '../../components/organisms/MdContent/MdContent';

export default function ProjectPage(props: ProjectData) {
  const { content } = props;

  return (
    <>
      <ProjectHeader {...props} />
      <MdContent content={content} />
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
