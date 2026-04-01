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
featured: true
---

![THF Radio Devices](../../../assets/images/thf-devices.png)

Refaire le site de THF Radio compte parmi les projets qui comptent le plus pour mon parcours de développeur. D’abord, je suis impliqué musicalement dans cette communauté depuis ses débuts et j’y ai rencontré des tas de personnes passionnantes. Ensuite, j’ai découvert les frameworks JavaScript grâce au développeur qui avait construit la première version du site en 2020 — il m’a patiemment expliqué npm, variables d’environnement, récupération de données, bundlers, etc., ce qui m’a vraiment lancé dans cet univers sans fin.

En 2023, le site d’origine montrait des signes de fatigue, sa maintenance devenait difficile et freinait les nouvelles fonctionnalités. La communauté radio grandissait et voulait une plateforme plus aboutie. J’avais alors assez d’expérience sur d’autres projets et le temps de m’y consacrer pleinement.

La transition a impliqué de réécrire une grande partie du code. Côté front, passage de Gatsby à Next.js et nouveau design (signé [Eli Michiel](https://www.instagram.com/elmidesign)). Côté back, nous avons conservé notre serveur Ubuntu pour le CMS et déployé le site via Vercel.

Après quelques mois de travail, nous avons pu annoncer à la communauté qu’un nouveau site était prêt 🎉

### Fonctionnalités

#### Direct et archive des émissions

Comme sur la version précédente, le direct repose sur Airtime Pro et l’archive sur l’API Mixcloud. Les auditeurs basculent facilement entre les deux flux pour suivre le direct ou les rediffusions.

#### Pages par émission

Chaque émission a désormais sa page : les auditeurs peuvent explorer le détail des programmes. Les données viennent de Strapi (CMS Node.js sur notre serveur [Uberspace](https://uberspace.de) — hébergeur que je recommande chaudement).

#### Support bilingue

Pour un public varié, nous avons priorisé l’anglais et l’allemand.

#### Calendrier à jour

Avec l’ISR, le calendrier (Teamup) se met à jour en temps réel.

#### Salon Discord

Pour renforcer les échanges, intégration d’un salon Discord.

#### Filtrage des émissions

Navigation simplifiée grâce au filtrage des émissions.

### Découvrir THF Radio

Parcourez le nouveau [THF Radio](https://thfradio.de/) et, pour le côté technique, le dépôt [GitHub](https://github.com/brunosj/thfradio-nextjs). THF Radio, c’est aussi une plateforme portée par une communauté, localement et au-delà — bienvenue à bord !
