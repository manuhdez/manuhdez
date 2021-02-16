import { ReactChild } from 'react';
import { BodyLarge, H2 } from 'styles/Typography';
import { Container } from './SectionTitle.styles';

interface SectionTitleProps {
  title: string;
  children?: ReactChild;
}

export default function SectionTitle(props: SectionTitleProps) {
  const { title, children } = props;

  return (
    <Container>
      <H2>{title}</H2>
      {children && <BodyLarge>{children}</BodyLarge>}
    </Container>
  );
}
