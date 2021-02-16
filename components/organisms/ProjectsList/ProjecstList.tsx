import { ProjectData } from 'lib/projects';
import ProjectListItem from 'components/molecules/ProjectListItem/ProjectListItem';
import { Grid } from './ProjectsList.styles';

interface ProjectsListProps {
  recents?: boolean;
  projects: ProjectData[];
}

export default function ProjectsList(props: ProjectsListProps) {
  const { recents = false, projects } = props;

  const sortProjectByOrder = (a: ProjectData, b: ProjectData) => {
    return a.order - b.order;
  };

  const filterHighlightedProjects = (project: ProjectData) => {
    return project.highlight === true;
  };

  const orderedProjects = projects.sort(sortProjectByOrder);

  const filteredProjects = recents
    ? orderedProjects.filter(filterHighlightedProjects)
    : orderedProjects;

  return (
    <Grid recents={recents}>
      {filteredProjects.map((project) => (
        <ProjectListItem key={project.id} {...project} />
      ))}
    </Grid>
  );
}
