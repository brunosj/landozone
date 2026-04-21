---
name: 'Dataviz'
date: '2025-11-05'
url: ''
repo: ''
slug: 'dataviz-work'
image: 'dataviz-devices.png'
color: '#F06292'
colorRGB: [102, 60, 245]
keepTextLight: false
type: 'Data Visualization'
description: 'Selected studio work in data visualization'
technologies: ['Svelte', 'D3.js', 'R', 'E-Charts', 'Vue 3', 'Storybook']
features: ['Interactive', 'Custom']
client: 'Various'
team:
  - 'Bruno St-Jacques, developer'
---

<script>
  import ExternalLink from '$lib/components/Link/ExternalLink.svelte';
  import Link from '$lib/components/Link/Link.svelte';  
</script>

![Dataviz Devices](../../../assets/images/dataviz-devices.png)

Our path into serious product work started with data visualization: university days with R and long nights making plots readable and compelling. We still reach for charting techniques and libraries often, and we are always open to new dataviz collaborations.

Got an interesting dataviz project in mind? [Let's chat](/#contact)!

### SteelWatch Corporate Scorecard 2026

In collaboration with [Designers for Climate Studios](https://dfc.studio) and SteelWatch, we built an interactive dashboard exploring the decarbonisation performance of major steelmakers.

[SteelWatch Corporate Scorecard](https://steelwatch.org/scorecard/) is a public dashboard for comparing 18 major steelmakers (29 countries) on transition readiness. The main view is a company grid: each tile shows identity, rank, and a mini score snapshot, sortable by overall score or by size; in the size view, a world map ties footprint to geography.

Choosing a company opens a detail panel where you can step through producers without losing context, see how the overall result breaks down across the six methodology categories, and drill from category into sub-indicators, so a headline score is never a black box: you can see where a company earns or loses points, how it ranks peers on that slice, and read sub-indicator charts and narrative that explain the evidence behind each band. That layout is meant for analysts, journalists, and campaigners who need both a quick leaderboard and defensible depth in one session.

Technically it is a SvelteKit app with server-loaded scorecard data in Postgres (Drizzle), D3-based charts (including the grid mini charts and sub-indicator graphics), and packaging aimed at embedding the same views in WordPress alongside SteelWatch’s editorial site.

Explore the scorecard [here](https://steelwatch.org/scorecard/).

![SteelWatch Screen](../../../assets/images/sw-screen.png)

### Flare 2026 State of Enterprise Infostealer Identity Exposure Report

Partnering with Flare, a cybersecurity firm based in Montreal, we transposed the content of their "[2026 State of Enterprise Infostealer Identity Exposure](https://flare.io/learn/resources/2026-enterprise-infostealer-identity-exposure)" report. Using a combination of scrollytelling and data visualization techniques, the goal was to take a static report and turn it into an interactive and compelling experience.

![Flare Desktop](../../../assets/images/flare-desktop.png)

### Birmingham Now

In 2025 we worked on [Birmingham Now](https://brumnow.birminghammuseums.org.uk/), an interactive sound map that brings Birmingham's past and present to life through audio. Together with the team at Birmingham Museums and the folks at Devision, we created a digital space where anyone can explore and contribute to the city's sonic history.

The project combines Next.js with Payload CMS and Mapbox GL to create an immersive experience where users can both listen to existing stories and add their own soundbites to the growing collection.

Technologies:

- Next.js (React)
- Payload CMS
- Mapbox GL JS

<br/>

![Birmingham Now ](../../../assets/images/bnow-screen.jpg)

### DFC Studios Dataviz Lab

Together with [DFC Studios](https://dfc.studio/) we are building a suite of interactive dashboards for different organizations active in the climate advocacy sector (Climate Action Tracker, SteelWatch, etc.). Building on state-of-the-art information design and visualization technologies, we aim to provide compelling and informative visualizations able to support the mission of these organizations.

Technologies:

- Svelte
- D3.js

<br/>

![DFC Dataviz ](../../../assets/images/dataviz-desktop.png)

### SISTA

Early 2024 brought an exciting opportunity to work with Le Basic on [SISTA](https://lebasic.com/productions/nos-outils#Sista), a tool that helps local authorities understand their food ecosystem. We transformed complex data about agricultural production, food processing, and consumption into clear insights through interactive visualizations.

Our work included migrating the platform from Power-BI to Vue 3, creating reusable visualization components, and setting up a Storybook library to keep design consistent across the platform.

Technologies:

- Vue 3
- E-Charts
- Storybook

<br/>

![SISTA Dataviz](../../../assets/images/sista-screen.png)

### Experiments with D3.js

Svelte caught our attention because it was born from the need to create better interactive content, especially data visualizations. We mostly ship sites with SvelteKit now, and we still enjoy prototyping with D3.js. Many experiments stay in draft, but we are especially fond of this <ExternalLink href="https://mgd.landozone.net/">interactive exploration of the Music Genre Dataset</ExternalLink>.

Technologies:

- Svelte
- D3.js

<br/>

![MGD Dataviz](../../../assets/images/mgd-screen.png)

### Discourse Network Analysis with R

A 2019 master's thesis combined policy interest with data visualization, analyzing EU copyright through Discourse Network Analysis. Using R and the igraph package, the project mapped stakeholder relationships and positions in the debate. Methodology and findings are summarised in this <ExternalLink href="https://www.dropbox.com/scl/fi/xm1hgfjvmtk6xcijsg79l/STJACQUES-BRUNO_MT-poster_bg_web.pdf?rlkey=odz4r3ecdnt8vlcxc9icsct12&dl=0">poster</ExternalLink>.

Technologies:

- R
- Discourse Network Analyzer
- igraph

<br/>

![DNA Network](../../../assets/images/brunosj_dna-copyright_networks.png)

The work was shared at satRday Berlin 2019 with a walkthrough of the methodology and results. Presentation slides are <ExternalLink href="https://www.dropbox.com/scl/fi/vkrsbx3chenzis5anmlr6/satRday2019_St-Jacques_DNA.pdf?rlkey=hy4f7wkmqu8wcprap2yhwd5c3&dl=0">here</ExternalLink>.

<br/>

![satRday 2019](../../../assets/images/satRday2019.jpg)
