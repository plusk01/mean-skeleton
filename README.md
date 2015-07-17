MEAN Skeleton
=============

This project is meant to be a reference to myself and others on how to structure a good MEAN application. This example uses pure JS as the frontend (so, not truthfully MEAN) and Jade as the template engine. This two things could easily be interchanged with other technologies.

The main focus of this example is the Node/Express side of things.

This example uses a very simple basic auth to show how to integrate different components.

## Explanation of Files/Folders ##

Click on links for more information about that part of the structure.

+ **app** - This is where your backend Node app lives.
    + [api](app/api)
    + [middleware](app/middleware)
    + [models](app/models)
    + [routes](app/routes)
    + [views](app/views)
+ **[config](config)**
+ **[public](public)**
    + css - All of your frontend css files
    + js - All of your frontend js files
+ *.bowerrc* - This is where you tell `bower` to install dependencies in a specific place (`public/lib`)
+ *.gitignore* - Make sure that you have all packages handled by `npm` and `bower` included in here so you don't source control them. View this file as an example.
+ *bower.json* - Used to keep track of which dependencies you've installed. This allows you to share this project with someone else so they can just clone and type `bower install` and the project will be setup like yours.
+ *package.json* - Similar to `bower.json`, except backend node modules are kept track here.

## A Note on Package Managers ##

Package Managers are an important part of web development. The following gives a brief explanation of `bower` and `npm`.

#### Bower ####

`bower` is used to install frontend dependencies. Always use the `--save` option so that the dependency is saved in `bower.json` for others to see.

Never source control the packages installed by `bower`, instead, source control the `bower.json` which holds all the installs. These dependencies can automagically be installed by running `bower install` in the same directory as the `bower.json`

Some common frontend packages:

```bash
bower install angular --save
bower install bootstrap --save
bower install jquery --save
bower install sweetalert --save
```

#### npm ####

`npm` is used to install backend, node dependencies. Always use the `--save` option so that the dependency is saved in `package.json` for others to see.

Never source control the packages installed by `npm`, instead, source control the `package.json` which holds all the installs. These dependencies can automagically be installed by running `npm install` in the same directory as the `package.json`

Some common node modules:

```bash
npm install express --save
npm install mongoose --save
npm install mongoose --save
```

## Steps to Setup a MEAN Project ##

These steps assume some familiarity with the terminal and that you have `npm` and `bower` installed globally.

1. Create a directory to house your project

    ```bash
    mkdir my-mean
    cd my-mean
    ```

2. Initialize your project with `npm init`. This will ask you a series of questions, don't worry too much about them. A `package.json` will be created.

3. Initialize your project's `bower.json` with `bower init`. Similar questions will be asked, that you can similarly not worry too much about. When asked about module types, choose `globals` only (use <kbd>space</kbd> to select).

4. Create a `.bowerrc` file:

    ```bash
    touch .bowerrc
    ```

    Then use `vim` or sublime to add the following to the file:

    ```javascript
    {
        "directory" : "public/lib"
    }
    ```

    This tells bower where to install dependencies that you add.

5. Create the directory structure of this repo:

    ```bash
    mkdir -p app/{api,middleware,models,routes,views} config public/{css,js}
    ```

6. Create or copy your `app.js`

7. Setup your `config/database.js`

8. Make sure `mongod` server is running

9. Run your app with `nodemon app.js`

    *If you don't have `nodemon`, you can use `node app.js` but you will have to restart the server manually everytime you make a backend JavaScript change. Instead, install `nodemon` with `npm install nodemon --global`*

10. Visit the url:port listed in your browser!