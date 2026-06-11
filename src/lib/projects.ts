import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface ProjectData {
  id: string;
  title: string;
  tags: string[];
  size: string;
  highlight: boolean;
  order: number;
  content?: string;
  category: string;
  url?: string;
  code_url: string;
  short_description: string;
}

const projectsDir = path.join(process.cwd(), "content/projects");

export function getProjectsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(projectsDir);

  const allProjectsData: ProjectData[] = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(projectsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    const {
      title,
      size,
      highlight,
      order,
      tags,
      category,
      code_url,
      short_description,
    } = matterResult.data;

    const projectData: ProjectData = {
      id,
      title,
      size,
      highlight,
      order,
      tags,
      category,
      code_url,
      short_description,
    };

    if (matterResult.data.url) {
      projectData.url = matterResult.data.url;
    }

    return projectData;
  });

  return allProjectsData;
}

type ProjectsIdsList = { params: { id: string } }[];

export function getAllProjectsIds(): ProjectsIdsList {
  const fileNames = fs.readdirSync(projectsDir);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getProjectData(id: string): Promise<ProjectData> {
  const fullPath = path.join(projectsDir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  const {
    title,
    size,
    highlight,
    order,
    tags,
    category,
    code_url,
    short_description,
  } = matterResult.data;

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const content = processedContent.toString();

  const projectData: ProjectData = {
    id,
    title,
    size,
    highlight,
    order,
    tags,
    category,
    code_url,
    short_description,
    content,
  };

  if (matterResult.data.url) {
    projectData.url = matterResult.data.url;
  }

  return projectData;
}
