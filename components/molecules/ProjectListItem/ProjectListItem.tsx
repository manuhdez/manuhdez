import Link from 'next/link';
import { ProjectData } from '../../../lib/projects';
import styles from './ProjectListItem.module.scss';

export default function ProjectListItem(props: ProjectData) {
  const { id, title, image, tags, size } = props;

  const imageSrc = `/assets/images/covers/${image}`;

  return (
    <article className={`${styles.item} ${styles[size]}`}>
      <div className={styles.item_data}>
        <h3>{title}</h3>
        <p>{tags.join(' - ')}</p>
      </div>
      <Link href={`/projects/${id}`}>
        <a>
          <img loading="lazy" src={imageSrc} alt={title} />
          <span style={{ display: 'none' }}>{title}</span>
        </a>
      </Link>
    </article>
  );
}
