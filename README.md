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