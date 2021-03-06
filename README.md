# Digitalpierce.com

[![Greenkeeper badge](https://badges.greenkeeper.io/pierceray/digitalpierce.com.svg)](https://greenkeeper.io/) [![Build Status](https://travis-ci.org/pierceray/digitalpierce.com.svg?branch=master)](https://travis-ci.org/pierceray/digitalpierce.com)

## Installation

- run `yarn` to install the dependencies
- `yarn global add grunt-cli` to run the commands as written, or prefix the commands with `npx <command>`

## How to Use

Typically you are going to want to use `grunt server` for day to day development.
For more detailed information look at the [/grunt](/grunt) folder.

### Development

`grunt` - This will run the default grunt task. In this case it will jshint and build the dev vesion of the sass.

`grunt clean` - Cleans (removes) the built files.

`grunt test` - This will run the testing tasks. This includes linting and eventually unit tests when they exist.

`grunt connect:dev` - This will start the static file server for the development. You can also pass `:dist` to start server for the dist folder.

`grunt server` - This will start a static files server, open [http://localhost:9000](http://localhost:9000), and run the watch task.

`grunt build` - This will run the production build without pushing it to the gh-pages branch. It will clean the branch, run the test, build the sass, uglify the javascript, and copy the files to the `/dist` folder.

### Deployment

`grunt deploy` - This step will run the `grunt build` task and the `grunt gh-pages` task to push the site to the GitHub Pages branch (gh-pages).

## Coding Guidelines

- [SASS/CSS Coding Guidelines](src/sass/README.md)
- JavaScript must pass the .jshintrc rules at the base of the project. Run `grunt test`
