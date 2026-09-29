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
type: 'Website'
description: 'Sustainability think tank based in Berlin'
technologies: ['SvelteKit', 'Tailwind CSS', 'Payload CMS', 'MongoDB', 'Redis']
features: ['Automated content generation']
client: 'TMG Think Tank'
team:
  - 'Bruno St-Jacques, developer'
---

![TMG Think Tank Devices](../../../assets/images/tmg-devices.png)

Since 2023, we have been working with [TMG Think Tank for Sustainability](https://tmg-thinktank.com/), a Berlin-based non-profit and consultancy working on sustainability transformations. The site brings a large body of work together in one searchable place: programmes, projects and initiatives, publications and reports, events and event series, videos, news, a blog, the team and job openings.

In 2026, we migrated the SvelteKit frontend from Contentful to a self-hosted Payload CMS. Editors can now build report pages directly in the CMS, PDF thumbnails are generated automatically on upload, and publications can be reached directly via their DOI number. Full-text search, add-to-calendar buttons for events and a Brevo-powered newsletter sign-up round out the experience, while a Redis-backed cache keeps pages fast and refreshes only what changes whenever content is published.
