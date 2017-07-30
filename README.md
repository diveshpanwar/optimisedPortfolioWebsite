# Optimised Portfolio Website
### This project is about using gulp to minify the HTML, CSS and JS and to deploy the webserver. The server also watches for the changes in the files in the source files.
***
## Features
* Checks for changes in the html, js, and css files.
* Minifies the html, css, and js files.
* Deploys the server at port 8000 (default)
* Reloads the webpage automatically after a change is seen.
***
## File Structure
* **dev:** This is the directory where all the original development files (source files) will exist.
* **dist:** This is the directory which will contain all the minified files for distribution and deployment.
* **gulpfile.js:** This file includes all the automated gulp tasks.
*  **package.json:** This file includes the basic description and the dependencies.
***
## PreRequisite
* NodeJS is already installed.
* NPM is already installed.
* If you haven't, than don't worry [Click Here to go to the configuration guide](https://docs.npmjs.com/getting-started/installing-node).
***
## Installation instruction
* Open root directory in terminal
* Run **npm install**, it will download all the dependency packages.
* Run **gulp** (it will run all the default tasks).
***
## Task Descriptions
* **connect:** It will launch the server.
* **lint:** It will check the js files for errors.
* **minifyall:** It will minify all the html, js and css files.
* **watch:** It will watch files for the changes and deploy the minifyall function.
***
