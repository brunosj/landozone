---
name: 'THF Radio'
date: '2023-08-10'
url: 'https://thfradio.de/'
repo: 'https://github.com/brunosj/thfradio-nextjs'
slug: 'thf-radio'
image: 'thf-bg.jpg'
color: '#1001F5'
colorRGB: [16, 1, 245]
keepTextLight: true
type: 'Site web'
description: 'Plateforme pour une radio communautaire berlinoise'
technologies:
  - 'React'
  - 'Next.js'
  - 'TypeScript'
  - 'Tailwind CSS'
  - 'Strapi CMS'
  - 'Node.js'
  - 'MySQL'
features:
  - 'Multilingue'
  - 'Diffusion en direct'
  - 'Calendrier automatisé'
  - 'Publication automatisée des émissions'
client: 'THF Radio'
team:
  - 'Bruno St-Jacques, developer'
---

![THF Radio Devices](../../../assets/images/thf-devices.png)

Refaire le site de THF Radio reste un repère fort pour notre façon de penser les produits portés par une communauté. Nous sommes proches de cette communauté musicale depuis les débuts, et la station nous a fait croiser quantité de collaborations et d’auditeurs. La personne derrière la version de 2020 a aussi pris le temps d’expliquer patiemment les frameworks JavaScript (npm, variables d’environnement, récupération de données, bundlers) et a marqué notre manière d’aborder le web aujourd’hui.

En 2023, le site d’origine montrait des signes de fatigue, la maintenance freinait les sorties et les nouvelles fonctionnalités peinaient à arriver. La communauté grandissait et demandait une plateforme plus solide. Avec plus d’expérience accumulée sur d’autres chantiers, nous avons pu enfin dédier un vrai cycle à une nouvelle version.

La transition a impliqué de réécrire une grande partie du code. Côté front, passage de Gatsby à Next.js et nouveau design (signé [Eli Michiel](https://www.instagram.com/elmidesign)). Côté back, nous avons conservé notre serveur Ubuntu pour le CMS et déployé le site via Vercel.

Après quelques mois de travail, nous avons pu annoncer à la communauté qu’un nouveau site était prêt 🎉

### Fonctionnalités

#### Direct et archive des émissions

Comme sur la version précédente, le direct repose sur Airtime Pro et l’archive sur l’API Mixcloud. Les auditeurs basculent facilement entre les deux flux pour suivre le direct ou les rediffusions.

#### Pages par émission

Chaque émission a désormais sa page : les auditeurs peuvent explorer le détail des programmes. Les données viennent de Strapi (CMS Node.js sur notre serveur [Uberspace](https://uberspace.de), un hébergeur que nous recommandons volontiers).

#### Support bilingue

Pour un public varié, nous avons priorisé l’anglais et l’allemand.

#### Calendrier à jour

Avec l’ISR, le calendrier (Teamup) se met à jour en temps réel.

#### Salon Discord

Pour renforcer les échanges, intégration d’un salon Discord.

#### Filtrage des émissions

Navigation simplifiée grâce au filtrage des émissions.

### Découvrir THF Radio

Parcourez le nouveau [THF Radio](https://thfradio.de/) et, pour le côté technique, le dépôt [GitHub](https://github.com/brunosj/thfradio-nextjs). THF Radio, c’est aussi une plateforme portée par une communauté, localement et au-delà : bienvenue à bord !
