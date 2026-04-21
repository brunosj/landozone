---
name: 'Berlin Carsharing Preisrechner'
date: '2023-11-01'
url: 'https://carsharing.landozone.net/'
repo: 'https://github.com/brunosj/berlin-carsharing'
slug: 'berlin-carsharing'
image: 'bcpc-bg.png'
color: '#AE3A29'
colorRGB: [174, 58, 41]
keepTextLight: true
type: 'Web-App'
description: 'Preisrechner fur Carsharing-Dienste in Berlin'
technologies: ['Svelte', 'Google Maps APIs']
features: ['Google-Maps-Integration', 'Kurz-/Langstrecken-Berechnung']
client: 'Personal'
team:
  - 'Bruno St-Jacques, developer'
---

![BCPC Devices](../../../assets/images/bcpc-devices.png)

Berlin ist unser Alltagshub – für kurze Wege greifen wir meist zum Fahrrad: wenig Impact und gut für den Kopf 🚴🏼‍♂️. An regnerischen Tagen, wenn die Bahn zu viele Umstiege bedeuten würde, landen wir oft bei einem der Carsharing-Angebote der Stadt.

Nach ein paar zu grauen Wochen mit manuellem Provider-Vergleich stellten wir uns eine einfache Frage: Wäre eine kleine Seite hilfreich, die Preise direkt gegenüberstellt? Jede Firma rechnet anders – pro Minute, pro Kilometer, Entsperrgebühren, Flughafenzuschläge – und ein Rechner nimmt dem Raten etwas Luft.

Ein paar hundert Zeilen Code spater war der [Berlin Carsharing Preisrechner](https://carsharing.landozone.net) online. Die App ist bewusst simpel: Man gibt Distanz und geschaetzte Dauer einer Fahrt ein und sieht sofort die Preise verschiedener Anbieter. Enthalten sind MILES, ShareNow, Bolt und SIXT. Man kann zwischen Kurzstrecken (unter einer Stunde) und Langstrecken (uber einer Stunde) umschalten und optional Flughafen-Zu- oder Abschlage berucksichtigen.

### Weitere Entwicklung

#### Geolokalisierung

Ein starkes Update war die Integration von Geolokalisierung. Damit konnen Nutzerinnen und Nutzer ein Ziel eingeben und Entfernung sowie geschatzte Fahrzeit automatisch ubernehmen lassen (perspektivisch sogar unter Berucksichtigung aktueller Verkehrsdaten). So wird die App noch mehr zur zentralen Stelle fur den Preisvergleich, ohne zusatzliche Tools zur Distanz- und Zeitberechnung.

Stand 27.12.2023 - inzwischen umgesetzt! 🚀

#### Preisupdates in Echtzeit

Aktuell mussen Preisdaten manuell im Code gepflegt werden, da die Anbieter keine offentlichen APIs fur ihre Tarife bereitstellen. Als naechsten Schritt waere ein Crawler spannend, der die Infos automatisch ausliest, damit im Frontend immer die neuesten Preise landen.
