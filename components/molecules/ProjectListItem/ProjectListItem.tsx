import Link from 'next/link';
import { Body, H3 } from 'styles/Typography';
import { ProjectData } from '../../../lib/projects';
import { Item, Data, Cover } from './ProjectListItem.styles';

export default function ProjectListItem(props: ProjectData) {
  const { id, title, tags, size } = props;

  const imageSrc = `/assets/images/projects/${id}/cover/cover@1x.jpg`;
  const tagsList = tags.slice(0, 3);

  return (
    <Item size={size}>
      <Data>
        <H3>{title}</H3>
        <Body>{tagsList.join(' - ')}</Body>
      </Data>
      <Link href={`/projects/${id}`}>
        <a>
          <Cover>
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
            <img loading="lazy" width="1024px" src={imageSrc} alt={title} />
          </Cover>
        </a>
      </Link>
    </Item>
  );
}
