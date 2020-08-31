import styles from './ToolsSection.module.scss';

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
  const getColumns = () => {
    return Object.keys(tools).map((column) => getRows(column));
  };

  const getRows = (columnKey: string) => {
    const listItems = tools[columnKey].map((item: string) => (
      <li key={item}>{item}</li>
    ));

    return (
      <ul key={columnKey}>
        <li className={styles.column_title}>{columnKey}</li>
        {listItems}
      </ul>
    );
  };

  return (
    <section className={styles.section}>
      <img src="/assets/images/tools/tools.png" />
      <div className={styles.tools_container}>
        <header>
          <h2>The tools I use to build great digital products</h2>
        </header>
        <div className={styles.tools_table}>{getColumns()}</div>
      </div>
    </section>
  );
}
