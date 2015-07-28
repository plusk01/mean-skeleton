# Installing Node
###### Using nvm to install Node.js

## What is Node?

[Node.js](http://nodejs.org/) is a platform for running JavaScript. JavaScript was created for the web, and it is still the only real programming language that runs in the browser. Node.js allows you to run JavaScript outside of the browser. It's a great server platform because then you can write your full stack (front and back end) in the same language: JavaScript.

## What is nvm?

[NVM](https://github.com/creationix/nvm) (which stands for Node Version Manager) is a tool to install node and handle the version you're using. That's pretty much it.

## How to install Node with nvm

If you are using a Linux machine, use the following command:
```
git clone https://github.com/creationix/nvm.git ~/.nvm && cd ~/.nvm && git checkout `git describe --abbrev=0 --tags`
```

If you are on a Mac machine, use:
```
git clone https://github.com/creationix/nvm.git ~/.nvm && cd ~/.nvm && git checkout `git describe --abbrev=0 --tags`
```

Enable nvm on your system:

Edit the `.bash_profile` file
```
nano ~/.bash_profile
```

Then paste this code into the file
```
source ~/.nvm/nvm.sh
```

`Ctrl O` and press enter to save. `Ctrl X` to exit.

**Then restart terminal to apply the changes**

Now install Node:
```
nvm install 0.10
```

Then tell nvm which version of Node to use:
```
nvm use 0.10
nvm alias default 0.10
```

And Node is installed!

Run the `node` command to see it in action. It will function just like the JavaScript console in your browser.

To see a list of all the Node versions you have installed, you can type:
```
nvm ls
```

## Other Node Goodies

You should also install two packages that will help you as you develop in Node in this course.

### http-server

`http-server` is a package that lets you start a dev web server in any directory on your machine. Install it by running:
```
npm install -g http-server
```

You can use it by `cd`'ing into the directory you want to serve and running `http-server`

### readline-sync

This package will help you to create easy to read/code command-line applications. We will use this package in our JavaScript exercises.

```
npm install -g readline-sync
```

Add this line to the end of your .bashrc file (.bash_profile) on mac

```
export NODE_PATH=/usr/local/lib/node_modules
```

And now run the source command to reflect the changes

```
source ~/.bashrc #for linux
source ~/.bash_profile #for mac
```

Add it to your Node app by:
```
var ask = require('readline-sync');
```

Example code:
```
var ask = require('readline-sync');


console.log('Hello! My name is Betty. Help me get to know you!\n');
var firstName = ask.question('What is your first name? ');
