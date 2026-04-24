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
type: 'Datenvisualisierung'
description: 'Öffentliches Dashboard zum Vergleich von 18 großen Stahlherstellern in 29 Ländern hinsichtlich Dekarbonisierung und Transformationsbereitschaft'
technologies: ['Svelte', 'D3.js', 'Node.js']
features: ['Datenvisualisierung', 'Postgres (Drizzle) + D3-Diagramme', 'WordPress-Integration']
client: 'SteelWatch'
team:
  - 'Bruno St-Jacques, developer'
---

![SteelWatch Corporate Scorecard – Dashboard auf Desktop und mobilen Geräten](../../../assets/images/steelwatch-devices.png)

Gemeinsam mit [Designers for Climate Studios](https://dfc.studio) und SteelWatch haben wir ein interaktives Dashboard zur Dekarbonisierungsleistung großer Stahlhersteller entwickelt.

SteelWatch Corporate Scorecard ist ein öffentliches Dashboard, das 18 große Stahlhersteller (29 Länder) hinsichtlich ihrer Transformationsbereitschaft vergleicht. Die Hauptansicht ist ein Unternehmensraster: Jede Kachel zeigt Identität, Rang und eine kompakte Score-Übersicht; sortierbar nach Gesamtpunktzahl oder nach Größe. In der Größenansicht verbindet eine Weltkarte den Fußabdruck mit der Geografie.

Die Auswahl eines Unternehmens öffnet ein Detailpanel: Du kannst Produzenten durchblättern, ohne den Kontext zu verlieren, siehst, wie sich das Gesamtergebnis auf die sechs Methodik-Kategorien verteilt, und steigst von der Kategorie in Unterindikatoren ab – ein Headline-Score bleibt nie eine Black Box: Du siehst, wo ein Unternehmen Punkte gewinnt oder verliert, wie es in diesem Ausschnitt im Vergleich zu Peers abschneidet, und kannst Diagramme sowie Erläuterungen zu den Unterindikatoren lesen, die die Evidenz hinter jeder Bewertungsstufe erklären. Diese Struktur richtet sich an Analyst*innen, Journalist*innen und Kampagnenakteur\*innen, die sowohl eine schnelle Bestenliste als auch belastbare Tiefe in einer Sitzung brauchen.

Technisch ist es eine SvelteKit-App mit serverseitig geladenen Scorecard-Daten in Postgres (Drizzle), D3-basierten Diagrammen (inklusive Mini-Charts im Raster und Grafiken zu Unterindikatoren) und einer Paketierung, die darauf abzielt, dieselben Ansichten in WordPress neben der redaktionellen Website von SteelWatch einzubetten.

Die Scorecard [hier](https://steelwatch.org/scorecard/) ansehen.

![SteelWatch Screen](../../../assets/images/sw-screen.png)
