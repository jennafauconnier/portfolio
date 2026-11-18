---
title: "Agents Team - Équipe d'agents LLM"
description: "Une équipe produit d'agents (PM, PO, Tech Lead, dev front et back, QA) qui transforme une demande en code testé, avec un modèle par rôle choisi selon le prix"
date: "2026-11-18"
tags: ["Python", "OpenRouter", "DeepSeek", "Mimo", "hy4", "unittest"]
image: "/images/agents-team/pipeline.png"
github: "https://github.com/jennafauconnier/agents-team"
embed: "/demos/agents-team/index.html?embed=1&v=5"
featured: true
---

## Description

Une équipe d'agents LLM qui reprend les rôles d'une équipe produit : PM, PO, Tech Lead, dev front, dev back et QA. À partir d'une phrase (« Ajouter un panier à une boutique en ligne »), elle produit un cadrage, des user stories avec critères d'acceptation, un plan technique, le code, ses tests, puis un verdict du QA. Environ 200 lignes de Python, sans dépendance.

La présentation interactive ci-dessus permet de cliquer sur chaque rôle pour voir ce qu'il a réellement produit.

## Stack technique

- **Langage** : Python 3.9+, bibliothèque standard uniquement
- **Modèles** : DeepSeek v4.1 flash, Mimo v2.6 pro et hy4, via OpenRouter
- **Tests** : `unittest`, exécutés pour de vrai sur le code généré
- **Présentation** : HTML, CSS et JavaScript, sans framework

## Fonctionnalités principales

- **Un modèle par rôle, choisi selon le prix** : un modèle peu coûteux cadre et code, un modèle plus fort conçoit et vérifie, là où une erreur se propage
- **QA appuyé sur des tests exécutés** : le code du back est écrit sur disque et testé dans un environnement sans clé d'API, des tests rouges priment sur l'avis du QA
- **Boucle de correction** : après un KO, seul le côté fautif est refait, avec un modèle plus fort, jusqu'à 5 fois
- **Garde-fous de coût** : budget plafonné à 0,50 $ par run, repli sur un autre modèle quand une réponse est vide
- **Historique de chaque run** : tours, verdicts, modèles utilisés et coût, dans un `run.json`

## Architecture

Les agents ne discutent pas : chacun reçoit les livrables des étapes précédentes. Le Tech Lead découpe le plan en parties FRONT et BACK, et les deux devs travaillent en parallèle, chacun avec sa part. Les tests du back sont lancés, leur sortie est donnée au QA, qui rend un verdict par côté.

```
Demande → PM → PO → Tech Lead ─┬→ Dev front ─┐
                               └→ Dev back  ─┴→ tests → QA ── OK ──→ livré
                                                         └ KO ──→ retour aux devs
```

## Résultat

Sur la demande « Ajouter un panier à une boutique en ligne », l'équipe livre 7 fichiers et 796 lignes dont 233 de tests. Les 29 tests passent et le QA approuve le front et le back.

## Évolution : vers une V2

Le projet est conçu pour itérer. L'objectif est de traiter des situations de plus en plus compliquées au coût le plus bas : le budget tranche, et un modèle plus fort n'est appelé que lorsqu'un test ou le QA échoue. Les pistes de la V2 :

- Mesurer le coût réel en comparant l'équipe routée à une équipe où tous les rôles utilisent le modèle fort
- Découper automatiquement les demandes complexes en incréments validés un par un
- Travailler dans un vrai projet : lire du code existant, ouvrir une MR en brouillon, avec une pause humaine après le PO et le Tech Lead

## Apprentissages

Ce projet m'a permis de :

- Comprendre pourquoi un QA qui relit le code se laisse convaincre, et pourquoi il faut exécuter les tests
- Traiter le cas d'un test faux plutôt que d'un code faux : le QA doit recalculer à la main
- Contourner les modèles à raisonnement qui renvoient des réponses vides quand ils épuisent leurs tokens
- Garder le périmètre et le coût sous contrôle avec un budget, un nombre de corrections limité et un PO borné à 3 stories
