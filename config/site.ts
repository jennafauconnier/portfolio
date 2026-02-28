/**
 * Configuration du site
 * Modifiez ce fichier pour personnaliser votre portfolio
 */

export const siteConfig = {
  // Informations générales
  name: 'Mon Portfolio',
  description: 'Portfolio personnel créé avec Next.js et Material UI',
  url: 'https://votre-portfolio.com',

  // Informations personnelles
  author: {
    name: 'Votre Nom',
    email: 'votre.email@example.com',
    bio: 'Développeur Full Stack passionné par la création d\'expériences web exceptionnelles',
  },

  // Réseaux sociaux
  social: {
    github: 'https://github.com/votreprofil',
    linkedin: 'https://linkedin.com/in/votreprofil',
    twitter: 'https://twitter.com/votreprofil',
    email: 'mailto:votre.email@example.com',
  },

  // Navigation
  nav: [
    { label: 'À propos', href: '#about' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Projets', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
};

