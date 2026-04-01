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
type: 'Datenvisualisierung'
description: 'Eine Auswahl meiner Projekte rund um Datenvisualisierung'
technologies: ['Svelte', 'D3.js', 'R', 'E-Charts', 'Vue 3', 'Storybook']
features: ['Interaktiv', 'Individuell']
featured: true
---

<script>
  import ExternalLink from '$lib/components/Link/ExternalLink.svelte';
  import Link from '$lib/components/Link/Link.svelte';  
</script>

![Dataviz auf mehreren Geräten](../../../assets/images/dataviz-devices.png)

Mein Weg ins Coden begann eigentlich mit Datenvisualisierung: damals an der Uni mit R und vielen Stunden, in denen ich versucht habe, Diagramme zugleich ansprechend und aussagekräftig zu gestalten. Auch wenn ich heute viel Webentwicklung mache, experimentiere ich weiterhin gern mit Dataviz-Techniken und -Bibliotheken und halte Ausschau nach neuen Projekten in dem Bereich.

Du hast ein spannendes Dataviz-Thema? [Lass uns sprechen](/#contact)!

### SteelWatch Corporate Scorecard 2026

Gemeinsam mit [Designers for Climate Studios](https://dfc.studio) und SteelWatch haben wir ein interaktives Dashboard zur Dekarbonisierungsleistung großer Stahlhersteller entwickelt.

[SteelWatch Corporate Scorecard](https://steelwatch.org/scorecard/) ist ein öffentliches Dashboard, das 18 große Stahlhersteller (29 Länder) hinsichtlich ihrer Transformationsbereitschaft vergleicht. Die Hauptansicht ist ein Unternehmensraster: Jede Kachel zeigt Identität, Rang und eine kompakte Score-Übersicht; sortierbar nach Gesamtpunktzahl oder nach Größe. In der Größenansicht verbindet eine Weltkarte den Fußabdruck mit der Geografie.

Die Auswahl eines Unternehmens öffnet ein Detailpanel: Du kannst Produzenten durchblättern, ohne den Kontext zu verlieren, siehst, wie sich das Gesamtergebnis auf die sechs Methodik-Kategorien verteilt, und steigst von der Kategorie in Unterindikatoren ab – ein Headline-Score bleibt nie eine Black Box: Du siehst, wo ein Unternehmen Punkte gewinnt oder verliert, wie es in diesem Ausschnitt im Vergleich zu Peers abschneidet, und kannst Diagramme sowie Erläuterungen zu den Unterindikatoren lesen, die die Evidenz hinter jeder Bewertungsstufe erklären. Diese Struktur richtet sich an Analyst*innen, Journalist*innen und Kampagnenakteur*innen, die sowohl eine schnelle Bestenliste als auch belastbare Tiefe in einer Sitzung brauchen.

Technisch ist es eine SvelteKit-App mit serverseitig geladenen Scorecard-Daten in Postgres (Drizzle), D3-basierten Diagrammen (inklusive Mini-Charts im Raster und Grafiken zu Unterindikatoren) und einer Paketierung, die darauf abzielt, dieselben Ansichten in WordPress neben der redaktionellen Website von SteelWatch einzubetten.

Scorecard [hier](https://steelwatch.org/scorecard/) ansehen.

![SteelWatch-Ansicht](../../../assets/images/sw-screen.png)

### Flare 2026 – Bericht zu Infostealern und Identitätsrisiken im Unternehmen

In Zusammenarbeit mit Flare, einem Cybersicherheitsunternehmen mit Sitz in Montreal, habe ich die Inhalte ihres Berichts „[2026 State of Enterprise Infostealer Identity Exposure](https://flare.io/learn/resources/2026-enterprise-infostealer-identity-exposure)“ in eine digitale Erzählung übertragen. Mit Scrollytelling und Datenvisualisierung sollte aus einem statischen Bericht ein interaktives, eindringliches Erlebnis werden.

![Flare Desktop-Ansicht](../../../assets/images/flare-desktop.png)

### Birmingham Now

2025 durfte ich an [Birmingham Now](https://brumnow.birminghammuseums.org.uk/) mitarbeiten – einer interaktiven Soundkarte, die Birminghams Vergangenheit und Gegenwart über Audio erlebbar macht. Zusammen mit dem Team der Birmingham Museums und Devision entstand ein digitaler Raum, in dem Menschen die klangliche Geschichte der Stadt entdecken und selbst beitragen können.

Das Projekt kombiniert Next.js, Payload CMS und Mapbox GL zu einem immersiven Erlebnis, in dem Nutzerinnen und Nutzer bestehende Geschichten hören und eigene Sound-Snippets zur Sammlung hinzufügen können.

Technologien:

- Next.js (React)
- Payload CMS
- Mapbox GL JS

<br/>

![Birmingham Now](../../../assets/images/bnow-screen.jpg)

### DFC Studios Dataviz Lab

Gemeinsam mit [DFC Studios](https://dfc.studio/) entwickeln wir interaktive Dashboard-Lösungen für Organisationen aus dem Bereich Klima-Advocacy (u. a. Climate Action Tracker, SteelWatch). Auf Basis moderner Informationsdesign- und Visualisierungsmethoden entstehen so visuell starke und gleichzeitig inhaltlich belastbare Darstellungen, die die Arbeit dieser Organisationen unterstützen.

Technologien:

- Svelte
- D3.js

<br/>

![DFC Dataviz](../../../assets/images/dataviz-desktop.png)

### SISTA

Anfang 2024 ergab sich eine spannende Zusammenarbeit mit Le Basic an [SISTA](https://lebasic.com/productions/nos-outils#Sista), einem Tool, das Kommunen hilft, ihr lokales Ernährungssystem besser zu verstehen. Wir haben komplexe Daten zu Landwirtschaft, Verarbeitung und Konsum in klar lesbare, interaktive Visualisierungen übersetzt.

Meine Rolle umfasste die Migration der Plattform von Power BI zu Vue 3, die Entwicklung wiederverwendbarer Visualisierungskomponenten und den Aufbau einer Storybook-Bibliothek für konsistentes Design.

Technologien:

- Vue 3
- E-Charts
- Storybook

<br/>

![SISTA Dataviz](../../../assets/images/sista-screen.png)

### Experimente mit D3.js

Svelte hat mich unter anderem deshalb sofort interessiert, weil es aus dem Wunsch entstanden ist, bessere interaktive Inhalte zu bauen – besonders Datenvisualisierungen. Auch wenn ich heute häufig SvelteKit für Websites nutze, experimentiere ich in meiner Freizeit weiterhin gern mit D3.js. Vieles davon ist noch Work in Progress, aber auf diese <ExternalLink href="https://mgd.landozone.net/">interaktive Exploration des Music Genre Dataset</ExternalLink> bin ich besonders stolz.

Technologien:

- Svelte
- D3.js

<br/>

![MGD Dataviz](../../../assets/images/mgd-screen.png)

### Discourse Network Analysis mit R

2019 habe ich in meiner Masterarbeit meine Interessen für Policy und Datenvisualisierung verbunden und die EU-Urheberrechtspolitik mit Discourse Network Analysis untersucht. Mit R und dem igraph-Paket habe ich die Beziehungen zwischen Akteuren und ihren Positionen in der Debatte sichtbar gemacht. Methodik und Ergebnisse sind in diesem <ExternalLink href="https://www.dropbox.com/scl/fi/xm1hgfjvmtk6xcijsg79l/STJACQUES-BRUNO_MT-poster_bg_web.pdf?rlkey=odz4r3ecdnt8vlcxc9icsct12&dl=0">Poster</ExternalLink> dokumentiert.

Technologien:

- R
- Discourse Network Analyzer
- igraph

<br/>

![DNA-Netzwerk](../../../assets/images/brunosj_dna-copyright_networks.png)

Ich durfte diese Arbeit bei satRday Berlin 2019 vorstellen und dort Methodik und Ergebnisse teilen. Die Slides gibt es <ExternalLink href="https://www.dropbox.com/scl/fi/vkrsbx3chenzis5anmlr6/satRday2019_St-Jacques_DNA.pdf?rlkey=hy4f7wkmqu8wcprap2yhwd5c3&dl=0">hier</ExternalLink>.

<br/>

![satRday 2019](../../../assets/images/satRday2019.jpg)
