# Portfolio Personnel

Portfolio moderne créé avec Next.js, TypeScript et Material UI. Ce portfolio permet d'ajouter facilement de nouveaux projets via des fichiers Markdown.

## 🚀 Démarrage rapide

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build de production

```bash
npm run build
npm start
```

## 📁 Structure du projet

```
portfolio/
├── app/                    # Pages Next.js (App Router)
│   ├── layout.tsx         # Layout principal avec navigation
│   ├── page.tsx           # Page d'accueil
│   └── projects/[slug]/   # Pages dynamiques des projets
├── components/            # Composants React réutilisables
│   ├── About.tsx         # Section à propos
│   ├── Skills.tsx        # Section compétences
│   ├── Projects.tsx      # Grille de projets
│   ├── ProjectCard.tsx   # Carte projet
│   └── Contact.tsx       # Section contact
├── content/
│   └── projects/         # 📝 Vos fichiers Markdown ici !
├── lib/
│   ├── projects.ts       # Utilitaires pour lire les projets
│   └── theme.ts          # Thème Material UI
├── types/
│   └── project.ts        # Types TypeScript
└── public/
    └── images/           # Images du portfolio
```

## ✨ Ajouter un nouveau projet

C'est très simple ! Il suffit de créer un fichier Markdown dans `content/projects/` :

### 1. Créer le fichier

Créez un fichier `content/projects/mon-projet.md`

### 2. Ajouter les métadonnées et le contenu

```markdown
---
title: "Titre de mon projet"
description: "Description courte"
date: "2024-02-10"
tags: ["React", "TypeScript", "Next.js"]
image: "/images/mon-projet.jpg"
github: "https://github.com/username/projet"
demo: "https://demo.com"
featured: true
---

## Description

Votre contenu en Markdown ici...

### Fonctionnalités

- Feature 1
- Feature 2

### Technologies

- React
- Next.js
```

### 3. Ajouter l'image (optionnel)

Placez votre image dans `public/images/mon-projet.jpg`

C'est tout ! Le projet apparaîtra automatiquement sur votre portfolio. 🎉

## 🎨 Personnalisation

### Modifier les informations personnelles

1. **Section À propos** : Éditez `components/About.tsx`
2. **Compétences** : Modifiez le tableau `skillCategories` dans `components/Skills.tsx`
3. **Contact** : Mettez à jour les liens dans `components/Contact.tsx`
4. **Thème** : Personnalisez les couleurs dans `lib/theme.ts`

### Ajouter votre photo de profil

Remplacez `public/images/profile.jpg` par votre photo (200x200px recommandé).

## 🎨 Métadonnées des projets

| Champ | Type | Requis | Description |
|-------|------|--------|-------------|
| `title` | string | ✅ | Titre du projet |
| `description` | string | ✅ | Description courte |
| `date` | string | ✅ | Date au format "YYYY-MM-DD" |
| `tags` | array | ✅ | Technologies utilisées |
| `image` | string | ✅ | Chemin vers l'image |
| `github` | string | ❌ | Lien GitHub |
| `demo` | string | ❌ | Lien démo |
| `featured` | boolean | ❌ | Projet mis en avant |

## 🛠 Technologies utilisées

- **[Next.js 14+](https://nextjs.org/)** - Framework React avec App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Typage statique
- **[Material UI](https://mui.com/)** - Bibliothèque de composants UI
- **[Emotion](https://emotion.sh/)** - CSS-in-JS (requis par Material UI)
- **[gray-matter](https://github.com/jonschlinkert/gray-matter)** - Parser de frontmatter Markdown
- **[react-markdown](https://github.com/remarkjs/react-markdown)** - Rendu Markdown en React

## 📦 Scripts disponibles

```bash
npm run dev      # Lancer en mode développement
npm run build    # Créer un build de production
npm start        # Lancer le build de production
npm run lint     # Vérifier le code avec ESLint
```

## 🚀 Déploiement

### Vercel (recommandé)

Le moyen le plus simple de déployer votre portfolio :

1. Poussez votre code sur GitHub
2. Connectez-vous sur [Vercel](https://vercel.com)
3. Importez votre repository
4. Déployez !

### Autres plateformes

Vous pouvez également déployer sur :
- **Netlify**
- **AWS Amplify**
- **Railway**
- **Render**

## 📝 Licence

Ce projet est libre d'utilisation pour votre portfolio personnel.

## 🤝 Contribution

N'hésitez pas à fork ce projet et à l'adapter à vos besoins !
