export interface ProjectMetadata {
  title: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
  images?: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface Project extends ProjectMetadata {
  slug: string;
  content: string;
}



