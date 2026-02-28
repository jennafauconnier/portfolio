import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Project, ProjectMetadata } from '@/types/project';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

/**
 * Récupère tous les projets depuis le dossier content/projects
 */
export function getAllProjects(): Project[] {
  // Créer le dossier s'il n'existe pas
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjects = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      // Créer le slug à partir du nom du fichier
      const slug = fileName.replace(/\.md$/, '');

      // Lire le contenu du fichier
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Parser le frontmatter et le contenu
      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        ...(data as ProjectMetadata),
      };
    });

  // Trier par date (plus récent en premier)
  return allProjects.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

/**
 * Récupère un projet par son slug
 */
export function getProjectBySlug(slug: string): Project | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...(data as ProjectMetadata),
    };
  } catch (error) {
    return null;
  }
}

/**
 * Récupère tous les slugs de projets (pour générer les routes statiques)
 */
export function getAllProjectSlugs(): string[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

/**
 * Récupère uniquement les projets featured
 */
export function getFeaturedProjects(): Project[] {
  const allProjects = getAllProjects();
  return allProjects.filter((project) => project.featured === true);
}



