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
type: 'Website'
description: 'Platform for Berlin-based community radio'
technologies:
  - 'React'
  - 'Next.js'
  - 'TypeScript'
  - 'Tailwind CSS'
  - 'Strapi CMS'
  - 'Node.js'
  - 'MySQL'
features:
  - 'Multilingual'
  - 'Live Streaming'
  - 'Automated Calendar'
  - 'Automated Show Uploads'
client: 'THF Radio'
team:
  - 'Bruno St-Jacques, developer'
---

![THF Radio Devices](../../../assets/images/thf-devices.png)

Revamping the THF Radio website is a project that still anchors a lot of how we think about community-led products. We have been close to its musical community since the early days, and the station has introduced us to countless collaborators and listeners. The developer behind the 2020 stack also gave our side a patient tour of JavaScript frameworks (npm, environment variables, data fetching, bundlers), which shaped how we approach the web today.

Fast forward to 2023. The original site had started showing signs of strain, maintenance was slowing releases, and new features were hard to land. The radio community was growing and asking for a stronger platform. With more experience from other builds behind us, we could finally dedicate a full pass to a fresh version of the site.

The transition implied rewriting most of the codebase. On the frontend, we moved from Gatsby to Next.js and implemented a new design (by the talented [Eli Michiel](https://www.instagram.com/elmidesign)). On the backend, we kept our Ubuntu server to host our CMS and deployed the site through Vercel instead.

After a few months of work, we were more than happy to announce to the community that a new website was ready 🎉

### Features

#### Live Stream and Show Archive

In continuity with the previous version of the site, the live stream remains powered by Airtime Pro and the show archive is retrieved through the Mixcloud API. Users can effortlessly toggle between the two audio feeds, ensuring uninterrupted access to both live broadcasts and archived shows.

#### Individual Show Pages

A key addition is the introduction of dedicated pages for each radio show. Now, users can explore the details of their favorite shows more effectively. Show data is fetched from Strapi, a Node.js open-source CMS running on our server (hosted on [Uberspace](https://uberspace.de), a host we happily recommend).

#### Bilingual Support

Recognizing our diverse audience, we prioritized offering bilingual support (English/German), breaking down language barriers.

#### Real-time Calendar Updates

Using Incremental Static Regeneration (ISR), our calendar system (using Teamup) gets real-time updates, keeping users in the loop with accurate show details.

#### Integrated Discord Chatroom

To foster community interaction, we integrated a Discord chatroom.

#### Show Filtering

Navigating content is now simpler with an intuitive show filtering feature.

### Explore THF Radio

Feel free to explore the revamped [THF Radio](https://thfradio.de/) to see the changes firsthand. For those interested in the technical side, the journey is documented on [GitHub](https://github.com/brunosj/thfradio-nextjs). THF Radio is more than a project; it's a practical effort to build a community-driven platform that resonates locally and beyond. Join us in this journey!
