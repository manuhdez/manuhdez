import Link from 'next/link';
import styles from './SectionTitle.module.scss';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  link?: {
    url: string;
    external: boolean;
  };
}

export default function SectionTitle(props: SectionTitleProps) {
  const { title, subtitle, link } = props;

  const getSubtitle = () => {
    if (!link) {
      return <p>{subtitle}</p>;
    }

    if (link && !link.external) {
      return (
        <Link href={link.url}>
            <p>{subtitle}</p>
        </Link>
      );
    }

    if (link && link.external) {
      return (
        <a href={link.url} target="blank" rel="noreferer noopener">
          <p>{subtitle}</p>
        </a>
      );
    }
  };

  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      {getSubtitle()}
    </div>
  );
}
