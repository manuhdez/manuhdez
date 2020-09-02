import Link from 'next/link';
import { ProjectData } from '../../../lib/projects';
import styles from './ProjectListItem.module.scss';

export default function ProjectListItem(props: ProjectData) {
  const { id, title, tags, size } = props;

  const imageSrc = `/assets/images/projects/${id}/cover/cover@1x.jpg`;
  const tagsList = tags.slice(0, 3);

  const coverImg = (
    <picture>
      <source
        media="(min-width: 2048px)"
        srcSet={`/assets/images/projects/${id}/cover/cover@1x.webp,
            /assets/images/projects/${id}/cover/cover@1x.jpeg`}
      />
      <source
        media="(min-width: 1024px)"
        srcSet={`/assets/images/projects/${id}/cover/cover@0.75x.webp,
            /assets/images/projects/${id}/cover/cover@0.75x.jpeg`}
      />
      <source
        srcSet={`/assets/images/projects/${id}/cover/cover@0.5x.webp,
            /assets/images/projects/${id}/cover/cover@0.5x.jpeg`}
      />
      <img
        className={styles.cover_img}
        loading="lazy"
        width="1024px"
        src={imageSrc}
        alt={title}
      />
    </picture>
  );

  return (
    <article className={`${styles.item} ${styles[size]}`}>
      <div className={styles.item_data}>
        <h3>{title}</h3>
        <p>{tagsList.join(' - ')}</p>
      </div>
      <Link href={`/projects/${id}`}>
        <a>
          {coverImg}
          <span style={{ display: 'none' }}>{title}</span>
        </a>
      </Link>
    </article>
  );
}
