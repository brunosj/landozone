---
name: 'Berlin Carsharing Price Calculator'
date: '2023-11-01'
url: 'https://carsharing.landozone.net/'
repo: 'https://github.com/brunosj/berlin-carsharing'
slug: 'berlin-carsharing'
image: 'bcpc-bg.png'
color: '#AE3A29'
colorRGB: [174, 58, 41]
keepTextLight: true
type: 'Application web'
description: 'Calculateur de prix pour l’autopartage à Berlin'
technologies: ['Svelte', 'Google Maps APIs']
features: ['Intégration Google Maps', 'Calcul trajets courts / longs']
featured: true
---

![BCPC Devices](../../../assets/images/bcpc-devices.png)

Ce que j’aime à Berlin, c’est faire la majorité des trajets à vélo — écolo et bon pour la forme 🚴🏼‍♂️ Quand il pleut et qu’un trajet en transports imposerait trop de correspondances, je passe parfois par l’autopartage.

Un automne pluvieux, en comparant les offres, l’idée est venue : une petite appli pour comparer les prix des opérateurs. Chacun a son barème — minute, kilomètre, frais de déverrouillage, aéroport — autant centraliser l’info.

Quelques centaines de lignes plus tard, le [calculateur d’autopartage berlinois](https://carsharing.landozone.net) voyait le jour : distance et durée estimée en entrée, prix comparés pour trouver le moins cher. Données pour MILES, ShareNow, Bolt et SIXT ; bascule trajets courts (moins d’une heure) / longs (plus d’une heure) ; option prise en charge / retour aéroport.

### Poursuite du développement

#### Géolocalisation

Une évolution naturelle : la géolocalisation pour saisir une destination et remplir automatiquement distance et durée (voire le trafic). L’outil devient un guichet unique au lieu de jongler entre plusieurs applis.

Mise à jour du 27.12.2023 — c’est en ligne ! 🚀

#### Prix en temps réel

Les tarifs sont encore saisis à la main : les opérifs ne proposent pas d’API publique pour tout récupérer. Une piste : un crawler pour alimenter le front avec des données à jour.
