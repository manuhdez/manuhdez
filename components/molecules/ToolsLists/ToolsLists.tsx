import ToolsColumn from 'components/atoms/ToolsColumn/ToolsColumn';
import { List } from './ToolsLists.styles';

interface ToolsListsProps {
  tools: {
    [category: string]: string[];
  };
}
export default function ToolsLists({ tools }: ToolsListsProps) {
  const toolsCategory = Object.keys(tools);

  return (
    <List>
      {toolsCategory.map((title) => (
        <ToolsColumn key={title} title={title} tools={tools[title]} />
      ))}
    </List>
  );
}
