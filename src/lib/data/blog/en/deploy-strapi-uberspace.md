---
name: 'Deploy Strapi CMS to Uberspace Ubuntu Server'
date: '2024-01-18'
repo: null
slug: 'deploy-strapi-uberspace'
description: 'A guide to easily self-host the headless CMS'
technologies: ['Strapi', 'JavaScript', 'Node.js', 'Bash', 'Ubuntu']
---

A lof of my projects involve setting up Content Management Systems (CMS) to host clients' data. One of my preferred solution is Strapi, a highly-customizable open-source CMS which can run as a self-hosted Node.js app.

There are countless hosting providers out there, but I usually go with [Uberspace](https://uberspace.de/en/), a small company of about a dozen people based in Germany and Austria. It offers a no-frills shell-first platform with servers that already have the essentials to get you started, as well as extensive documentation on how to use a wide array of tools. While it may not offer the extensive resources of high-end VPS options, it has consistently proven to be sufficient for deploying and managing CMS applications. You can even choose your price, I gladly recommend!

Now, once you have your Uberspace server running, let's learn how you can deploy your Strapi application to the web. The guide will walk you through the following necessary steps: access your Uberspace server, create a MySQL database, install Strapi, configure the necessary settings, and deploy your application to the domain of your choice.

For the purpose of this guide, we will assume the Uberspace username is `lando` and the hostname `landozone.uberspace.de` Don't forget to change these values for your own when following the guide for your own server!

### Step 1: Acccess Uberspace server via SSH

If you haven't done so already, [generate your SSH key](https://docs.tritondatacenter.com/public-cloud/getting-started/ssh-keys/generating-an-ssh-key-manually/manually-generating-your-ssh-key-in-mac-os-x) and add it to your Uberspace dashboard in the "Logins" section. Navigate to the "Datasheet" section to find your server's hostname and username, and connect to your server by opening up a terminal and typing:

```bash
ssh username@hostname.uberspace.de
```

### Step 2: Create MySQL database

Before installing Strapi, you need to create a database for it to contain the data. Strapi supports PostgreSQL, SQLite, MySQL and MariaDB. Uberspace has MariaDB installed out-of-the-box, and you can create easily create a new database (the name needs to start with your username):

```bash
mysql -e "CREATE DATABASE lando_strapi"
```

and double-checking if it was correctly created:

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

While we're dealing with some MySQL commands, let's retrieve your MySQL username and password:

```bash
my_print_defaults client
```

The output should be something like that (you will need these credentials later on when we configure Strapi):

```bash
--default-character-set=utf8mb4
--user=lando
--password=*******************
```

### Step 3: Configure Node version

Strapi runs on Node.js (either v18 or v20 at the time of writing this blog). You can check which version of Node is installed on your server, and switch to version 18 or 20:

```bash
node -v
uberspace tools version use node 18
```

### Step 4: Install Strapi

Install Strapi in the <span style="color:var(--color-secondary)">html</span> directory (which is the DocumentRoot of your server, accessible to visitors):

```bash
cd ~/html
npx create-strapi-app@latest cms
```

When prompted about installation type, choose "Custom" then enter your preferred language (JavaScript or TypeScript), mysql as default database client, 127.0.0.1 as Host, 3006 as Port, the username and password you retrieved earlier, and enable or disable SSL connection:

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

This will create a Strapi app in a folder named <span style="color:var(--color-secondary)">cms</span>, accessible at <span style="color:var(--color-secondary)">~/html/cms</span>.

### Step 5: Create first Strapi build

Move to the Strapi directory and create the initial build:

```bash
cd ~/html/cms
npm run strapi build
```

This will create a fully-working Strapi application which can run on your server.

### Step 6: Install process manager and create server.js file

The next step is to install pm2, a process manager to manage your Node.js processes. This is to ensure that the Strapi app keeps running even when you terminate your connection to the server (among other features).

```bash
npm install pm2 -g
```

Once it is installed, let's create a <span style="color:var(--color-secondary)">server.js</span> file in the Strapi root directory to configure the Strapi server (we will use it later to start Strapi with pm2):

```bash
cd ~/html/cms
touch server.js
```

The file should contain the following:

```javascript
const strapi = require('@strapi/strapi');
strapi().start();
```

This file is the entry point for the Strapi server, initializing it and beginning its execution. It can be further customized to include additional configurations or middleware depending on a project's requirements.

### Step 7: Add domain to server

We're almost there! In order for your Strapi app to be accessible at a given URL, some extra configuration is needed. I usually deploy apps to a subdomain (e.g. <span style="color:var(--color-secondary)">cms.landozone.net</span>) and this can easily be done with Uberspace thanks to its set of pre-built tools (no need to configure nginx reverse proxies, SSL certificates and other processes).

First, let's add the subdomain to the server:

```bash
uberspace web domain add cms.landozone.net
```

```bash
The webserver's configuration has been adapted.
Now you can use the following records for your DNS:
    A -> ***.**.***.**
    AAAA -> *********************
```

You can now add these two records to the DNS settings of your domain to make sure your subdomain points to your server.

### Step 8: Configure web backend process

Once this is done, we can now configure the web backend process for the application:

```bash
uberspace web backend set cms.landozone.net --http --port 1337
```

What this process does is telling the domain <span style="color:var(--color-secondary)">cms.landozone.net</span> to use HTTP as the protocol and listen on port 1337. And what will run on port 1337? You guessed it, your Strapi app!

One note about port 1337 before going forward (as it can be a little confusing): this is not the port you previously assigned for the database (e.g. 3306) but the port on which the Strapi server should be running. Port 1337 is only the default, and this can be changed if needed.

### Final step: start your Strapi app with pm2

Now that your Strapi app is built and your domain and backend process are configured, you are ready to start the app and access it online. Simply navigate to the app's root folder and start it with pm2:

```bash
cd ~/html/cms
pm2 start server.js
```

Once it's started, you can check if the app is indeed running at port 1337 and accessible at your desired subdomain by typing:

```bash
uberspace web backend list

cms.landozone.net/ http:1337 => OK, listening: PID 11360, node /var/www/virtual/lando/html/cms/server.js
```

If the output is similar to the one above, you can use your browser and access your app at your subdomain. Congrats! 🎉

### \*\* Extra steps: create bash scripts for production and development

Do you want to navigate to your Strapi folder and execute a few commands every time you need to switch between the development and production server? I don't. Good news is that <span style="color:var(--color-secondary)">bash</span> scripts can allow us to be lazy and automate things.

Let's create two scripts in the <span style="color:var(--color-secondary)">bin</span> folder and give them permissions to ensure they are executable:

```bash
touch ~/bin/prod-cms.sh ~/bin/dev-cms.sh
u+x ~/bin/dev-cms.sh ~/bin/prod-cms.sh
```

Now, let's edit the development script:

```bash
vim ~/bin/dev-cms.sh
```

add this content to the file:

```bash
#!/bin/bash

cd ~/html/cms
pm2 kill
npm run strapi develop
```

and now for the production script:

```bash
vim ~/bin/prod-cms.sh
```

add this content to the file:

```bash
#!/bin/bash

cd ~/html/cms
pm2 start server.js
```

When you now log into your server via SSH, you will need to run one of these two scripts to get you going:

```bash
cd bin
dev-cms.sh
```
