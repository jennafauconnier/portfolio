---
title: "Spine - Refonte de la notation et de la découverte de livres"
description: "Refonte UX de deux parcours de Goodreads : noter un livre et le retrouver. Cinq écrans React Native, deux thèmes, et une équipe d'agents pour la conception"
date: "2026-11-25"
tags: ["React Native", "Expo", "TypeScript", "UX", "Design system", "Agents LLM"]
image: "/images/spine/case-1-mes-livres.png"
images:
  - /images/spine/case-1-mes-livres.png
  - /images/spine/case-2-chercher.png
  - /images/spine/case-3-fiche.png
  - /images/spine/case-4-notation.png
  - /images/spine/case-5-journal.png
github: "https://github.com/jennafauconnier/spine"
caseStudy: "/etudes-de-cas/spine"
featured: true
---

## Description

Goodreads remplit sa fonction — catalogue, étagères, avis — mais deux gestes quotidiens y coûtent plus cher que le service qu'ils rendent : **noter un livre** demande trois écrans et un formulaire, et **retrouver un livre** se fait dans une liste de texte où le livre et ses éditions se mélangent. Spine reprend ces deux parcours de zéro, en gardant de Letterboxd la mécanique — demi-étoiles, journal daté — et rien de son habillage.

Le projet va du cadrage produit au code : brief, user stories, plan technique, trois directions artistiques successivement rejetées, puis une direction retenue et cinq écrans fonctionnels sur iOS.

## Le problème

- **Noter coûte trois écrans** : fiche → « Write a review » → formulaire web → cinq étoiles entières. On ne note pas en passant, donc on ne note pas.
- **Impossible de mettre 4,5** : l'échelle est entière, alors qu'un lecteur distingue rarement 3 et 4 d'un cran franc.
- **La recherche est une liste de texte** : le livre et ses éditions se confondent, la couverture — ce qu'on reconnaît d'un livre — est une vignette de 40 px.
- **Aucune trace datée** : une note écrase la précédente. Impossible de dire « lu en novembre », ni de relire un livre en gardant les deux notes.

## Les cinq écrans

- **Mes livres** — l'accueil s'ouvre sur une carte « En cours », seul aplat de couleur de l'app, avec la progression et un bouton « Reprendre ». L'action la plus fréquente est la première chose visible, à portée de pouce.
- **Chercher** — une ligne par résultat : couverture, titre, auteur · année, et un seul bouton « Ajouter ». On sait en un regard si le livre est déjà dans sa bibliothèque.
- **Fiche** — quatre lignes d'information, une note communautaire, un extrait, un résumé, et un bouton pleine largeur en bas. On décide en une hauteur d'écran, sans scroller.
- **Notation** — une feuille modale par-dessus la fiche : cinq étoiles de 32 pt, la moitié gauche donnant la demi-note, le chiffre en 38 pt. Deux gestes, le livre reste visible, et « 4,5 / 5 » lève toute ambiguïté.
- **Journal** — chaque note crée une entrée datée, avec avis et statut. Relire crée une deuxième entrée au lieu d'écraser la première.

## Design system

- **Un seul accent** : cobalt `#1B4DFF`, 5,91:1 sur blanc — une seule couleur actionnable, donc aucune ambiguïté
- **Typographie** : Space Grotesk 700 pour les titres (22 pt), Inter 400–600 pour l'interface
- **Formes** : boutons capsule de 52 pt, rayons de 12 pt, aucune ombre — la hiérarchie se fait par la couleur et l'espace
- **Thème sombre** : mêmes jetons inversés, encre 16,8:1, accent 7,0:1
- **Accessibilité** : cibles ≥ 44 pt, libellés VoiceOver, étoiles exposées en `adjustable`

Tous les contrastes sont calculés par script (`lab/contrast.py`), jamais à l'œil : les modèles de langage se trompent systématiquement sur ce calcul — ils annonçaient 4,8:1 pour un couple qui mesure 3,45:1.

## Stack technique

- **Frontend** : React Native 0.88, Expo SDK 58, expo-router, TypeScript strict
- **Design system** : jetons en TypeScript, thèmes clair et sombre, quatre composants réutilisables (`Button`, `Stars`, `Cover`, `ThemeToggle`)
- **Navigation** : trois onglets, deux modales, routes typées par expo-router
- **État** : contexte React en mémoire (la persistance arrive au sprint 2)

## Le process, et son coût

Le projet a été mené avec une équipe d'agents — PM → PO → Tech Lead ‖ trois designers → critique — chacun avec un modèle choisi selon le coût de son erreur : petit modèle pour cadrer, modèle « goût » pour le design, modèle différent du producteur pour la critique, afin d'éviter l'auto-complaisance.

- **Cadrage** — brief, 6 stories, plan technique Expo, 3 directions artistiques, critique : 0,0892 $ (7 appels)
- **Consolidation** — fusion de la direction retenue et des corrections : 0,0243 $ (1 appel)
- **Code** — 15 fichiers, 1 386 lignes, 5 écrans, 2 thèmes : 0 $ d'API
- **Total** — 8 appels, **0,1135 $**

Trois choses que ce projet m'a apprises :

- **Le coût est dans les décisions, pas dans les tokens** : onze centimes de conception, zéro de code, mais trois allers-retours de design parce que le brief initial ne disait pas ce qu'il interdisait.
- **Un modèle ne mesure pas** : le calcul de contraste est passé dans un script, et le goût est redevenu une décision humaine.
- **La critique vaut mieux que la génération** : le même pipeline qui produit trois directions moyennes produit une critique utile — « cet écran coûte un geste de trop », « ce token manque ».

## Ce qui reste à faire

- Brancher Open Library et Google Books, avec dédoublonnage livre / édition
- Persister les notes (SQLite) et la file d'attente hors ligne
- Scan ISBN via `expo-camera`
- Tests automatisés

## Apprentissages

- Écrire un brief qui dit ce qu'il **interdit** : « moderne, inspiré de Letterboxd » a produit deux directions qui ressemblaient encore à Goodreads
- Faire calculer les contrastes par un script plutôt que par un modèle, et garder le jugement visuel pour l'humain
- Découper une notation en deux gestes en s'appuyant sur un chiffre visible : la précision s'apprend toute seule quand le résultat est affiché en gros
