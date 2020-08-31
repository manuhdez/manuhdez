import styles from './ProjectHeader.module.scss';
import { ProjectData } from '../../../lib/projects';

export default function ProjectHeader(props: ProjectData) {
  const { title, tags } = props;

  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <p>{tags.join(' - ')}</p>
    </header>
  );
}
