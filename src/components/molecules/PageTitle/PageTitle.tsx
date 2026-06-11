import styles from './PageTitle.module.scss';

interface PageTitleProps {
  title: string;
  subtitle: string;
}

export default function PageTitle(props: PageTitleProps) {
  const { title, subtitle } = props;

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
