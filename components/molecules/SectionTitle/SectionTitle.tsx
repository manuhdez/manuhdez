import { ReactChild } from 'react';
import { BodyLarge, H2 } from 'styles/Typography';
import styles from './SectionTitle.module.scss';

interface SectionTitleProps {
  title: string;
  children?: ReactChild;
}

export default function SectionTitle(props: SectionTitleProps) {
  const { title, children } = props;

  return (
    <div className={styles.container}>
      <H2>{title}</H2>
      {children && <BodyLarge>{children}</BodyLarge>}
    </div>
  );
}
