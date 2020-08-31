import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

export interface ProjectData {
  id: string;
  title: string;
  image: string;
  tags: string[];
  size: string;
  highlight: boolean;
  content?: string;
}

const projectsDir = path.join(process.cwd(), 'content/projects');

export function getProjectsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(projectsDir);

  const allProjectsData: ProjectData[] = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(projectsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    const { title, image, size, highlight, tags } = matterResult.data;

    return {
      id,
      title,
      image,
      size,
      highlight,
      tags,
    };
  });

  return allProjectsData;
}

type ProjectsIdsList = { params: { id: string } }[];

export function getAllProjectsIds(): ProjectsIdsList {
  const fileNames = fs.readdirSync(projectsDir);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getProjectData(id: string): Promise<ProjectData> {
  const fullPath = path.join(projectsDir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  const { title, image, size, highlight, tags } = matterResult.data;

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const content = processedContent.toString();

  return {
    id,
    title,
    image,
    size,
    highlight,
    tags,
    content,
  };
}