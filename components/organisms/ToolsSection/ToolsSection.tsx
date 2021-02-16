import ToolsLists from 'components/molecules/ToolsLists/ToolsLists';
import { H2 } from 'styles/Typography';
import { Image, Section, ToolsContainer, Header } from './ToolsSection.styles';

const tools = {
  Design: ['Figma', 'Sketch', 'Zeplin', 'Adobe Suite'],
  Frontend: [
    'HTML',
    'CSS',
    'Javascript',
    'Typescript',
    'React & Redux',
    'Styled components',
  ],
  Backend: ['Node', 'Express', 'Mongoose', 'PHP', 'MySQL', 'MongoDB'],
  'Dev tools': ['Git', 'Babel', 'Webpack', 'Docker', 'Kubernetes'],
};

export default function ToolsSection() {
  return (
    <Section>
      <Image src="/assets/images/tools/tools.png" />
      <ToolsContainer>
        <Header>
          <H2>The tools I use to build great digital products</H2>
        </Header>
        <ToolsLists tools={tools} />
      </ToolsContainer>
    </Section>
  );
}
