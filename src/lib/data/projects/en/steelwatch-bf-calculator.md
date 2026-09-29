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
type: 'Data Visualization'
description: 'Interactive calculator estimating the emissions locked in by relining more than 1,000 blast furnaces worldwide'
technologies: ['Svelte', 'D3.js', 'Node.js']
features: ['Data visualization', 'Scenario modelling', 'WordPress integration']
client: 'SteelWatch'
team:
  - 'Bruno St-Jacques, developer'
---

![SteelWatch Blast Furnace Emissions Calculator on desktop, tablet and mobile devices](../../../assets/images/bfc-devices.png)

Following the [Corporate Scorecard](/projects/steelwatch-corporate-scorecard), we teamed up again with [Designers for Climate Studios](https://dfc.studio) and SteelWatch to build an interactive calculator on one of the steel industry's biggest climate blind spots: blast furnace relining.

Around 70% of the world's steel still depends on iron from coal-fired blast furnaces. Every 15 to 20 years, a furnace has to be relined, and each relining adds another 15 to 25 years of operation, locking in emissions long past climate deadlines. The Blast Furnace Emissions Calculator makes that choice visible: based on data from Global Energy Monitor's Global Iron and Steel Tracker, it projects future CO₂ emissions for more than 1,000 operating blast furnaces across some 420 plants in 44 countries.

Users can zoom from all assessed plants down to a country, a selection of companies, a single plant or an individual furnace, then pick a relining scenario (no further relinings, no relinings after a chosen cutoff year, or every furnace relined once more) and fine-tune lifespan, utilisation rate and emissions intensity. A stacked bar chart splits emissions between the current campaign and what a relining would add, with markers for 50% and 100% reductions against the 2050 net-zero horizon. An impact box translates the cumulative total into relatable comparisons, from round-the-world flights to years of a country's emissions. Below the chart, furnaces closest to their next relining are ranked as cards or in a sortable table, so journalists, analysts and campaigners can quickly see where the next decisions will be made.

Technically, it is a SvelteKit app with a pure, fully tested TypeScript calculation engine, D3-based charts, shareable URLs that encode each scenario, and English and Japanese content managed by SteelWatch's editorial team through a Google Sheet. The same views are packaged as a WordPress plugin and embedded directly into SteelWatch's website.

Try the calculator [here](https://steelwatch.org/bf-calculator/).
