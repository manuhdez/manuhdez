import ProjectListItem from '../../molecules/ProjectListItem/ProjectListItem';
import SectionTitle from '../../molecules/SectionTitle/SectionTitle';
import data from './ProjectsList.data';
import styles from './ProjectsList.module.scss';

interface ProjectsListProps {
  recents?: boolean;
}

export default function ProjectsList(props: ProjectsListProps) {
  const { recents } = props;

  const title = 'Recent projects';
  const subtitle = 'View all projects';
  const link = {
    url: '/projects',
    external: false,
  };

  const sectionTitle = recents && (
    <SectionTitle title={title} subtitle={subtitle} link={link} />
  );

  const projects = recents ? data.filter((project) => project.highlight) : data;

  return (
    <section className={styles.section}>
      {sectionTitle}
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectListItem key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
