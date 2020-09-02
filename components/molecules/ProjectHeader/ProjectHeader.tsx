import styles from './ProjectHeader.module.scss';
import { ProjectData } from '../../../lib/projects';

export default function ProjectHeader(props: ProjectData) {
  const { title, tags, category, url, code_url, short_description } = props;

  return (
    <>
      <header className={styles.header}>
        <p hidden className={styles.category}>
          {category}
        </p>
        <h1>{title}</h1>
        <p className={styles.short_description}>{short_description}</p>
        <div className={styles.actions}>
          <a
            className="btn btn-light"
            href={url}
            target="_blank"
            rel="noreferrer noopener"
          >
            open project
          </a>
          <a
            className="btn btn-dark"
            href={code_url}
            target="_blank"
            rel="noreferrer noopener"
          >
            view source code
          </a>
        </div>
      </header>
      <div className={styles.tags_container}>
        <h3>Skills</h3>
        <ul className={styles.tags_list}>
          {tags.map((tag) => (
            <li key="tag" className="btn btn-light">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
