import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

export type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  tag?: string;
  team: Team[];
  link?: string;
};

export type Post = {
  metadata: Metadata;
  slug: string;
  content: string;
};

import { cache } from "react";
import { notFound } from "next/navigation";

interface CachedFile {
  mtimeMs: number;
  result: {
    metadata: Metadata;
    content: string;
  };
}

const fileCache = new Map<string, CachedFile>();

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    notFound();
  }

  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const stat = fs.statSync(filePath);
  const cached = fileCache.get(filePath);

  if (cached && cached.mtimeMs === stat.mtimeMs) {
    return cached.result;
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  const metadata: Metadata = {
    title: data.title || "",
    publishedAt: data.publishedAt || "",
    summary: data.summary || "",
    image: data.image || "",
    images: data.images || [],
    tag:
      typeof data.tag === "string"
        ? data.tag
        : Array.isArray(data.tag)
          ? data.tag.join(", ")
          : "",
    team: data.team || [],
    link: data.link || "",
  };

  const result = { metadata, content };
  fileCache.set(filePath, { mtimeMs: stat.mtimeMs, result });
  return result;
}

const BLOG_DIR = path.join(process.cwd(), "src", "app", "blog", "posts");
const WORK_DIR = path.join(process.cwd(), "src", "app", "work", "projects");

const resolveContentDir = (customPath: string[] | string): string => {
  const target = Array.isArray(customPath) ? customPath.join("/") : String(customPath);
  if (target.includes("work") || target.includes("projects")) {
    return WORK_DIR;
  }
  return BLOG_DIR;
};

const getMDXDataCached = cache((dir: string): Post[] => {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
});

export const getPosts = (customPath: string[] | string = ["", "", "", ""]): Post[] => {
  const postsDir = resolveContentDir(customPath);
  return [...getMDXDataCached(postsDir)];
};
