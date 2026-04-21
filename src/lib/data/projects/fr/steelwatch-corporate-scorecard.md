---
name: 'SteelWatch Corporate Scorecard 2026'
date: '2026-04-01'
url: 'https://steelwatch.org/scorecard/'
# repo: 'https://github.com/brunosj/powerkonnekt'
slug: 'steelwatch-corporate-scorecard'
image: 'nzlr-image.jpg'
color: '#009B9D'
colorRGB: [231, 150, 1]
keepTextLight: true
type: 'Visualisation de données'
description: 'Tableau de bord public comparant 18 grands sidérurgistes dans 29 pays sur la décarbonation et la préparation à la transition'
technologies: ['Svelte', 'D3.js', 'Node.js']
features:
  ['Visualisation de données', 'Postgres (Drizzle) + graphiques D3', 'Intégration WordPress']
client: 'SteelWatch'
team:
  - 'Bruno St-Jacques, developer'
---

![Tableau de bord SteelWatch Corporate Scorecard sur ordinateur et appareils mobiles](../../../assets/images/steelwatch-devices.png)

Avec [Designers for Climate Studios](https://dfc.studio) et SteelWatch, nous avons conçu un tableau de bord interactif sur la performance de décarbonation des grands producteurs d’acier.

SteelWatch Corporate Scorecard est un tableau de bord public qui compare 18 grands sidérurgistes (29 pays) sur leur préparation à la transition. La vue principale est une grille d’entreprises : chaque tuile affiche l’identité, le rang et un mini aperçu du score, avec tri par score global ou par taille ; en vue « taille », une carte du monde relie l’empreinte à la géographie.

Choisir une entreprise ouvre un panneau de détail : vous pouvez enchaîner les producteurs sans perdre le fil, voir comment le résultat global se décline dans les six catégories de la méthodologie, puis descendre des catégories vers les sous-indicateurs ; le score principal n’est jamais une boîte noire : vous voyez où une entreprise gagne ou perd des points, comment elle se situe face aux pairs sur ce volet, et vous lisez graphiques et textes explicatifs sur les sous-indicateurs qui justifient chaque tranche. Cette structure s’adresse aux analystes, aux journalistes et aux responsables de campagnes qui ont besoin à la fois d’un classement rapide et d’une profondeur argumentée en une session.

Techniquement, il s’agit d’une appli SvelteKit avec des données scorecard chargées côté serveur dans Postgres (Drizzle), des graphiques basés sur D3 (y compris les mini-graphiques de la grille et ceux des sous-indicateurs), et une intégration pensée pour embarquer les mêmes vues dans WordPress aux côtés du site éditorial de SteelWatch.

Consultez le tableau de bord [ici](https://steelwatch.org/scorecard/).

![SteelWatch Screen](../../../assets/images/sw-screen.png)
