The `config` Directory
======================

This directory is to hold different configuration files. For example, you might have a database that your app talks to. While developing, you will most likely be using a development environment database. But when you push your app live to production, you will want a secure, production database.

To aid this, you can create a `config/database.js.example` file that shows how your app expects the file to be formatted. Then, on the production server, you can copy `config/database.js.example` to `config/database.js` and file it in with your secret keys/passwords/paths. This way, you never have to put anything sensitive into the GitHub repo. (Make sure that you have a `.gitignore` that will exclude the `database.js` file, but not `database.js.example`).

**Other examples of config files:**
+ user/password files
+ 3rd party API keys that need to be hidden (Mailchimp, Google, etc)
+ SMTP Email user/password
+ Anything that needs to be different in the dev and prod environments

**In general, this config files should be JSON**