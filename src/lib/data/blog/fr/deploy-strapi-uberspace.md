---
name: 'Déployer Strapi CMS sur un serveur Ubuntu Uberspace'
date: '2024-01-18'
repo: null
slug: 'deploy-strapi-uberspace'
description: 'Un guide pour auto-héberger facilement le CMS headless'
technologies: ['Strapi', 'JavaScript', 'Node.js', 'Bash', 'Ubuntu']
---

Beaucoup de mes projets impliquent la mise en place de systèmes de gestion de contenu (CMS) pour héberger les données des clients. Une de mes solutions préférées est Strapi, un CMS open source très personnalisable qui tourne comme application Node.js auto-hébergée.

Il existe d’innombrables hébergeurs, mais je choisis souvent [Uberspace](https://uberspace.de/en/), une petite structure d’une dizaine de personnes en Allemagne et en Autriche. Plateforme « shell first » sans fioritures, avec l’essentiel déjà installé et une documentation fournie sur une grande variété d’outils. Ce n’est peut-être pas un VPS haut de gamme, mais c’est largement suffisant pour déployer et gérer des CMS. Vous choisissez même votre tarif ; je recommande volontiers !

Une fois votre serveur Uberspace prêt, voyons comment déployer Strapi. Le guide couvre : accès SSH, création d’une base MySQL, installation de Strapi, configuration et mise en ligne sur le domaine souhaité.

Pour cet exemple, nous supposons que le nom d’utilisateur Uberspace est `lando` et l’hôte `landozone.uberspace.de` (adaptez ces valeurs à votre cas).

### Étape 1 : accéder au serveur Uberspace en SSH

Si ce n’est pas déjà fait, [générez votre clé SSH](https://docs.tritondatacenter.com/public-cloud/getting-started/ssh-keys/generating-an-ssh-key-manually/manually-generating-your-ssh-key-in-mac-os-x) et ajoutez-la au tableau de bord Uberspace dans la section « Logins ». Dans « Datasheet », notez le nom d’hôte et l’utilisateur, puis connectez-vous :

```bash
ssh username@hostname.uberspace.de
```

### Étape 2 : créer une base MySQL

Avant Strapi, il faut une base de données. Strapi supporte PostgreSQL, SQLite, MySQL et MariaDB. Uberspace fournit MariaDB ; créez une base (le nom doit commencer par votre nom d’utilisateur) :

```bash
mysql -e "CREATE DATABASE lando_strapi"
```

Vérifiez la création :

```bash
mysql -e "SHOW DATABASES"

+--------------------+
| Database           |
+--------------------+
| information_schema |
| lando              |
| lando_strapi       |
+--------------------+
```

Récupérez identifiant et mot de passe MySQL :

```bash
my_print_defaults client
```

Sortie attendue (à garder pour la config Strapi) :

```bash
--default-character-set=utf8mb4
--user=lando
--password=*******************
```

### Étape 3 : configurer la version de Node

Strapi tourne sur Node.js (v18 ou v20 au moment de la rédaction). Vérifiez la version installée et passez à Node 18 ou 20 :

```bash
node -v
uberspace tools version use node 18
```

### Étape 4 : installer Strapi

Installez Strapi dans le répertoire <span style="color:var(--color-secondary)">html</span> (DocumentRoot accessible aux visiteurs) :

```bash
cd ~/html
npx create-strapi-app@latest cms
```

À l’invite, choisissez « Custom », puis la langue (JavaScript ou TypeScript), mysql comme client, 127.0.0.1 comme hôte, 3306 comme port, l’utilisateur et le mot de passe récupérés plus tôt, et désactivez SSL si besoin :

```bash
Choose your installation type
  Quickstart (recommended)
❯ Custom (manual settings)

Choose your preferred language JavaScript
Choose your default database client mysql
Database name: lando_strapi
Host: 127.0.0.1
Port: 3306
Username: lando
Password: **********
Enable SSL connection: No
```

Cela crée l’app dans <span style="color:var(--color-secondary)">cms</span>, accessible sous <span style="color:var(--color-secondary)">~/html/cms</span>.

### Étape 5 : premier build Strapi

```bash
cd ~/html/cms
npm run strapi build
```

Vous obtenez une application Strapi fonctionnelle sur le serveur.

### Étape 6 : gestionnaire de processus et fichier server.js

Installez pm2 pour garder Strapi actif après déconnexion SSH :

```bash
npm install pm2 -g
```

Créez <span style="color:var(--color-secondary)">server.js</span> à la racine Strapi (point d’entrée pour pm2) :

```bash
cd ~/html/cms
touch server.js
```

Contenu :

```javascript
const strapi = require('@strapi/strapi');
strapi().start();
```

Fichier d’entrée minimal ; vous pourrez ajouter config ou middleware selon le projet.

### Étape 7 : ajouter le domaine au serveur

Pour exposer Strapi sur une URL, configurez le domaine. Par exemple un sous-domaine <span style="color:var(--color-secondary)">cms.landozone.net</span> : Uberspace fournit des outils intégrés (sans nginx à configurer à la main pour l’essentiel).

```bash
uberspace web domain add cms.landozone.net
```

```bash
The webserver's configuration has been adapted.
Now you can use the following records for your DNS:
    A -> ***.**.***.**
    AAAA -> *********************
```

Ajoutez ces enregistrements DNS chez votre registrar.

### Étape 8 : configurer le backend web

```bash
uberspace web backend set cms.landozone.net --http --port 1337
```

Cela associe le domaine au port HTTP 1337 (port d’écoute de Strapi, pas celui de MySQL). 1337 est la valeur par défaut ; vous pouvez la changer.

### Dernière étape : lancer Strapi avec pm2

```bash
cd ~/html/cms
pm2 start server.js
```

Vérifiez que le backend écoute :

```bash
uberspace web backend list

cms.landozone.net/ http:1337 => OK, listening: PID 11360, node /var/www/virtual/lando/html/cms/server.js
```

Si la sortie ressemble à ceci, ouvrez le sous-domaine dans le navigateur. Bravo ! 🎉

### ** Étapes supplémentaires : scripts bash pour prod et dev

Vous ne voulez pas retaper des commandes à chaque bascule dev/prod ? Les scripts <span style="color:var(--color-secondary)">bash</span> automatisent tout.

Créez deux scripts dans <span style="color:var(--color-secondary)">bin</span> et rendez-les exécutables :

```bash
touch ~/bin/prod-cms.sh ~/bin/dev-cms.sh
u+x ~/bin/dev-cms.sh ~/bin/prod-cms.sh
```

Script de développement :

```bash
vim ~/bin/dev-cms.sh
```

Contenu :

```bash
#!/bin/bash

cd ~/html/cms
pm2 kill
npm run strapi develop
```

Script de production :

```bash
vim ~/bin/prod-cms.sh
```

Contenu :

```bash
#!/bin/bash

cd ~/html/cms
pm2 start server.js
```

Après connexion SSH, lancez l’un ou l’autre :

```bash
cd bin
dev-cms.sh
```
