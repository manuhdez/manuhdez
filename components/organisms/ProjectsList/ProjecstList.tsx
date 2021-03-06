import ProjectListItem from '../../molecules/ProjectListItem/ProjectListItem';
import SectionTitle from '../../molecules/SectionTitle/SectionTitle';
import { ProjectData } from '../../../lib/projects';
import styles from './ProjectsList.module.scss';

interface ProjectsListProps {
  recents?: boolean;
  projects: ProjectData[];
}

export default function ProjectsList(props: ProjectsListProps) {
  const { recents, projects } = props;

  const title = 'Recent projects';
  const subtitle = 'View all projects';
  const link = {
    url: '/projects',
    external: false,
  };

  const sectionTitle = recents && (
    <SectionTitle title={title} subtitle={subtitle} link={link} />
  );

  const sortByProjectOrder = (a: ProjectData, b: ProjectData) => {
    return a.order - b.order;
  };

  const filterHighlightedProjects = (project: ProjectData) => {
    return project.highlight === true;
  };

  const filteredProjects =
    recents && projects
      ? projects.sort(sortByProjectOrder).filter(filterHighlightedProjects)
      : projects;

  return (
    <section className={styles.section}>
      {sectionTitle}
      <div className={styles.grid}>
        {filteredProjects.map((project) => {
          return <ProjectListItem key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
}
