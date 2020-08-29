import styles from './ProjectListItem.module.scss';
import Link from 'next/link';

export interface ProjectData {
  id: number;
  title: string;
  image: string;
  tags: string[];
  size: string;
  highlight: boolean;
}

export default function ProjectListItem(props: ProjectData) {
  const { id, title, image, tags, size } = props;

  return (
    <article className={`${styles.item} ${styles[size]}`}>
      <div className={styles.item_data}>
        <h3>{title}</h3>
        <p>{tags.join(' - ')}</p>
      </div>
      <Link href={`/projects/${id}`}>
        <a>
          <img loading="lazy" src={image} />
        </a>
      </Link>
    </article>
  );
}
