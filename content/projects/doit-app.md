---
title: "DoIt - Application de gestion de tâches"
description: "Application mobile fullstack de gestion de tâches avec système de rappels automatiques et validation par photo"
date: "2024-02-28"
tags: ["React Native", "Expo", "NestJS", "TypeScript", "Firebase"]
image: "/images/doit/5-home-tasks.png"
images:
  - /images/doit/1-register.png
  - /images/doit/2-login.png
  - /images/doit/3-login.png
  - /images/doit/4-notifications-task.png
  - /images/doit/5-home-tasks.png
  - /images/doit/6-create-task.png
  - /images/doit/7-detail-task.png
  - /images/doit/8-validate-task.png
  - /images/doit/9-pic-choose.png
  - /images/doit/10-resize-pic.png
  - /images/doit/11-validate-pic-task.png
  - /images/doit/12-validate-task.png
github: "https://github.com/jennafauconnier/doit"
featured: true
gallery: true
---

## Description

Application mobile fullstack de gestion de tâches avec système de rappels automatiques et validation par photo. Projet développé en suivant les documentations officielles de NestJS, Expo et Firebase, avec l'aide de l'IA pour l'architecture et les bonnes pratiques.

## Stack technique

- **Frontend** : React Native + Expo
- **Backend** : NestJS + TypeScript
- **Base de données** : Firebase Firestore
- **Authentification** : Firebase Auth
- **Notifications** : Expo Push Notifications

## Fonctionnalités principales

- **Authentification** : Système complet d'inscription et connexion
- **Gestion de tâches** : Création, modification et suppression de tâches
- **Validation par photo** : Preuve visuelle de l'accomplissement des tâches
- **Rappels automatiques** : Système progressif de notifications avec cron job
- **Notifications push** : Alertes en temps réel (avec limitations iOS)
- **Interface moderne** : Design responsive et intuitif

## Architecture

L'application utilise une architecture client-serveur avec :

- Backend NestJS exposant une API RESTful
- Base de données NoSQL Firebase Firestore pour la persistance
- Système de cron jobs pour les rappels automatiques
- Intégration Firebase Auth pour la sécurité

## Apprentissages

Ce projet fullstack m'a permis de :

- Maîtriser le développement mobile avec React Native et Expo
- Implémenter un backend robuste avec NestJS
- Gérer l'upload et le stockage de photos
- Mettre en place un système de notifications push
- Travailler avec Firebase (Auth, Firestore)
- Développer des cron jobs pour l'automatisation
