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
featured: true
---

![BCPC Devices](../../../assets/images/bcpc-devices.png)

Was ich am Leben in Berlin besonders mag: Ich nutze fur die meisten Wege mein Fahrrad. Das ist nicht nur umweltfreundlich, sondern haelt mich auch fit 🚴🏼‍♂️. Wenn es regnet und eine Strecke mit dem OPNV zu viele Umstiege bedeuten wurde, greife ich manchmal auf eines der Carsharing-Angebote in der Stadt zuruck.

Im letzten Herbst hat es oft geregnet, und an einem Tag kam mir beim Vergleichen der Anbieter die Idee: Warum nicht eine einfache App bauen, die die Preise unterschiedlicher Anbieter direkt gegenuberstellt? Da alle verschiedene Preismodelle haben - pro Minute, pro Kilometer, mit unterschiedlichen Entsperr- und Flughafen-Gebuhren - kann so ein Vergleich die Entscheidung deutlich einfacher machen.

Ein paar hundert Zeilen Code spater war der [Berlin Carsharing Preisrechner](https://carsharing.landozone.net) online. Die App ist bewusst simpel: Man gibt Distanz und geschaetzte Dauer einer Fahrt ein und sieht sofort die Preise verschiedener Anbieter. Enthalten sind MILES, ShareNow, Bolt und SIXT. Man kann zwischen Kurzstrecken (unter einer Stunde) und Langstrecken (uber einer Stunde) umschalten und optional Flughafen-Zu- oder Abschlage berucksichtigen.

### Weitere Entwicklung

#### Geolokalisierung

Ein starkes Update war die Integration von Geolokalisierung. Damit konnen Nutzerinnen und Nutzer ein Ziel eingeben und Entfernung sowie geschatzte Fahrzeit automatisch ubernehmen lassen (perspektivisch sogar unter Berucksichtigung aktueller Verkehrsdaten). So wird die App noch mehr zur zentralen Stelle fur den Preisvergleich, ohne zusatzliche Tools zur Distanz- und Zeitberechnung.

Stand 27.12.2023 - inzwischen umgesetzt! 🚀

#### Preisupdates in Echtzeit

Aktuell mussen Preisdaten manuell im Code gepflegt werden, da die Anbieter keine offentlichen APIs fur ihre Tarife bereitstellen. Als naechsten Schritt waere ein Crawler spannend, der die Infos automatisch ausliest, damit im Frontend immer die neuesten Preise landen.
