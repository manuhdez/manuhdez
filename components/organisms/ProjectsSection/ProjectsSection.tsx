import Link from 'next/link';
import SectionTitle from 'components/molecules/SectionTitle/SectionTitle';
import ProjectsList from 'components/organisms/ProjectsList/ProjecstList';
import { Section } from 'styles/Layout';
import { ProjectData } from 'lib/projects';

interface ProjectsSectionProps {
  projects: ProjectData[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Section>
      <SectionTitle title="Recent projects">
        <Link href={'/projects'}>
          <a>View all projects</a>
        </Link>
      </SectionTitle>
      <ProjectsList recents projects={projects} />
    </Section>
  );
}
