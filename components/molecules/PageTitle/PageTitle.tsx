import React from 'react';
import { BodyLarge, H1 } from 'styles/Typography';
import { TitleContainer } from './PageTitle.styles';

interface PageTitleProps {
  title: string;
  subtitle: string;
}

export default function PageTitle(props: PageTitleProps) {
  const { title, subtitle } = props;

  return (
    <TitleContainer>
      <H1>{title}</H1>
      <BodyLarge>{subtitle}</BodyLarge>
    </TitleContainer>
  );
}
