---
name: 'TMG Think Tank'
date: '2023-11-01'
url: 'https://tmg-thinktank.com/'
repo: 'https://github.com/brunosj/tmg-svelte-payload'
slug: 'tmg-thinktank'
image: 'tmg-bg.jpg'
color: '#67797B'
colorRGB: [103, 121, 123]
keepTextLight: true
type: 'Site web'
description: 'Think tank du développement durable basé à Berlin'
technologies: ['SvelteKit', 'Tailwind CSS', 'Payload CMS', 'MongoDB', 'Redis']
features: ['Génération de contenu automatisée']
client: 'TMG Think Tank'
team:
  - 'Bruno St-Jacques, developer'
---

![TMG Think Tank Devices](../../../assets/images/tmg-devices.png)

Depuis 2023, nous accompagnons le [TMG Think Tank for Sustainability](https://tmg-thinktank.com/), une organisation à but non lucratif et un cabinet de conseil berlinois qui travaille sur les transformations vers la durabilité. Le site réunit un vaste ensemble de contenus en un seul endroit consultable : programmes, projets et initiatives, publications et rapports, événements et cycles d’événements, vidéos, actualités, blog, équipe et offres d’emploi.

En 2026, nous avons migré le frontend SvelteKit de Contentful vers un Payload CMS auto-hébergé. L’équipe éditoriale peut désormais composer des pages de rapport directement dans le CMS, les vignettes des PDF sont générées automatiquement au téléversement, et les publications sont accessibles directement via leur numéro DOI. Une recherche plein texte, des boutons d’ajout au calendrier pour les événements et une inscription à la newsletter via Brevo complètent l’expérience, tandis qu’un cache adossé à Redis garde les pages rapides et ne rafraîchit que ce qui change à chaque publication.
