---
name: 'SteelWatch Blast Furnace Emissions Calculator'
date: '2026-09-29'
url: 'https://steelwatch.org/bf-calculator/'
# repo: 'https://github.com/brunosj/powerkonnekt'
slug: 'steelwatch-bf-calculator'
image: 'nzlr-image.jpg'
color: '#009B9D'
colorRGB: [231, 150, 1]
keepTextLight: true
type: 'Visualisation de données'
description: 'Calculateur interactif estimant les émissions verrouillées par la réfection de plus de 1 000 hauts fourneaux dans le monde'
technologies: ['Svelte', 'D3.js', 'Node.js']
features: ['Visualisation de données', 'Modélisation de scénarios', 'Intégration WordPress']
client: 'SteelWatch'
team:
  - 'Bruno St-Jacques, developer'
---

![SteelWatch Blast Furnace Emissions Calculator sur ordinateur, tablette et mobile](../../../assets/images/bfc-devices.png)

Après le [Corporate Scorecard](/projects/steelwatch-corporate-scorecard), nous avons de nouveau collaboré avec [Designers for Climate Studios](https://dfc.studio) et SteelWatch, cette fois sur un calculateur interactif consacré à l’un des grands angles morts climatiques de la sidérurgie : la réfection des hauts fourneaux.

Environ 70 % de l’acier mondial dépend encore de la fonte issue de hauts fourneaux alimentés au charbon. Tous les 15 à 20 ans, un haut fourneau doit être regarni, et chaque réfection prolonge son exploitation de 15 à 25 ans, verrouillant des émissions bien au-delà des échéances climatiques. Le Blast Furnace Emissions Calculator rend ce choix visible : à partir des données du Global Iron and Steel Tracker de Global Energy Monitor, il projette les émissions futures de CO₂ de plus de 1 000 hauts fourneaux en activité, répartis dans quelque 420 usines et 44 pays.

Vous pouvez passer de l’ensemble des usines évaluées à un pays, une sélection d’entreprises, une usine ou un haut fourneau précis, puis choisir un scénario (aucune nouvelle réfection, aucune réfection après une année butoir, ou chaque haut fourneau regarni une dernière fois) et ajuster la durée de vie, le taux d’utilisation et l’intensité d’émissions. Un graphique en barres empilées distingue les émissions de la campagne en cours de celles qu’ajouterait une réfection, avec des repères de réduction de 50 % et 100 % face à l’horizon de la neutralité carbone en 2050. Un encadré d’impact traduit le total cumulé en comparaisons parlantes, des vols autour du monde aux années d’émissions d’un pays. Sous le graphique, les hauts fourneaux les plus proches de leur prochaine réfection sont classés sous forme de cartes ou dans un tableau triable, afin que journalistes, analystes et responsables de campagnes repèrent rapidement où se joueront les prochaines décisions.

Techniquement, il s’agit d’une appli SvelteKit avec un moteur de calcul TypeScript pur et entièrement testé, des graphiques basés sur D3, des URL partageables qui encodent chaque scénario, et des contenus en anglais et en japonais gérés par l’équipe éditoriale de SteelWatch via une Google Sheet. Les mêmes vues sont packagées en plugin WordPress et intégrées directement au site de SteelWatch.

Essayez le calculateur [ici](https://steelwatch.org/bf-calculator/).
