import styles from './MdContent.module.scss';

interface Props {
  content: string;
}

export default function MdContent(props: Props) {
  const { content } = props;

  return (
    <section
      className={styles.section}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
