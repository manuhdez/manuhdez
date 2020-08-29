import Head from 'next/head';
import Hero from '../molecules/Hero/Hero';
import ProjectsList from '../organisms/ProjectsList/ProjecstList';
import PageTitle from '../molecules/PageTitle/PageTitle';

export default function ProjectsTemplate() {
  const title = 'Projects';
  const subtitle =
    'This is a selection of some personal projects I have develop while learning new things.';

  return (
    <>
      <Head>
        <title>Manu Hdez - Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PageTitle title={title} subtitle={subtitle} />
        <ProjectsList />
      </main>
    </>
  );
}
