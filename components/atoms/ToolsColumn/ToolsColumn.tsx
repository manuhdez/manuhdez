import { Body } from 'styles/Typography';
import { Column, CategoryTitle, Tool } from './ToolsColumn.styles';

interface ToolsListProps {
  title: string;
  tools: string[];
}

export default function ToolsColumn({ title, tools }: ToolsListProps) {
  return (
    <Column>
      <CategoryTitle as="li">{title}</CategoryTitle>
      {tools.map((tool) => (
        <Tool key={tool}>
          <Body>{tool}</Body>
        </Tool>
      ))}
    </Column>
  );
}
