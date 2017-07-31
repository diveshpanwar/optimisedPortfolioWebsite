# Optimised Portfolio Website
### This is Project 4 for FED, It uses gulp to automate tasks. Please see the instructions for more.
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
* **mobile:** It will display the pagespeed rank of the index.html of website for mobile.
* **desktop:** It will display the pagespeed rank of the index.html of website for desktop.
***
## Optimisations
* ### index.html
 * Leverage Browser Cache using .htaccess files
 * Image Optimisations
 * Minified Resources
 * Defered JavaScript files
 * Loading Scripts near the bottom
 * Reducing the server-response time by using personal server with compression enabled.
 * google fonts are loaded using the webfonts

* ### Pizza.html
  * Reducing the number of moving images
  * Declaring the redundant variables with static values outside the loops for example **var dx (line 454), var newwidth (line 456), var scroller (line 514).**
  * Reducing the unnecessary calculation like phase calculation in updatePositions functions (line 516).
  * Image optimisation
  * calling the updatePositions function for the first time after the window loads complete to avoid the performance bottleneck.

* ### views/css/style.css
  * adding the will-change property to the mover class.
***
## Guide for Reviewers
* The readable code is available in the **dev** directory
* The website is hosted on two locations:
  * [GitHub](https://diveshpanwar.github.io/optimisedPortfolioWebsite/dist/)
  * [Personal Server](http://optimisedportfolio.diveshpanwar.website/)
* PageSpeed Score for both the urls is above 90 but the best performance is observed on the personal server.
* For pizza.html optimisations can be found in the following functions.
  * updatePositions
  * changePizzaSizes
  * document.addEventListener line 537
* For index.html optimisations are carried using:
  * gulpfile.js (to minify resources).
  * header and the part just above the closing tag of the body.
***
## Resources
* [will-change MDN](https://developer.mozilla.org/en/docs/Web/CSS/will-change)
* [getElementsByClassName MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)
* [Google PageSpeed](https://developers.google.com/speed/docs/insights/v2/reference/pagespeedapi)
* [npm and gulp plugins](https://www.npmjs.com/)
