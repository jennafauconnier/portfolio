export interface ProjectMetadata {
  title: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
  images?: string[];
  github?: string;
  demo?: string;
  embed?: string; // page du site à intégrer à la place du carrousel
  caseStudy?: string; // lien vers une étude de cas dédiée
  featured?: boolean;
}

export interface Project extends ProjectMetadata {
  slug: string;
  content: string;
}



