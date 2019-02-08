# A great component builder for ReactJs using NextJs

This yeoman generator will build different React components, creating a skeleton for the different files.

# Requirements

This is a Yeoman generator. You need to install Yeoman, NodeJS and npm to install the generator and its dependencies. Make sure you have all installed globally.

First, download and install NodeJS and npm. More information about NodeJS / npm: https://nodejs.org/

Second, install Yeoman. More information about Yeoman: http://yeoman.io/

# Installation

```
$ npm install -g generator-create-next-app-reloaded
```

# Usage

```
$ yo create-next-app-reloaded
$ cd create-next-app-reloaded
$ yarn dev
```

# Table of Contents

* [Questions? Feedback?](#questions-feedback)
* [Folder Structure](#folder-structure)
* [Available Scripts](#available-scripts)
  * [yarn dev](#yarn-dev)
  * [yarn build](#yarn-build)
  * [yarn start](#yarn-start)
* [Available Generators](#available-generators)
  * [yo create-next-app-reloaded:page](#yo-create-next-app-reloadedpage)
  * [yo create-next-app-reloaded:component](#yo-create-next-app-reloadedcomponent)
* [Changelog](#changelog-generator)
* [Release and Publish](#release-and-publish)

# Questions? Feedback?

Check out [Next.js FAQ & docs](https://github.com/zeit/next.js#faq) or [let us know](https://github.com/segmentio/create-next-app/issues) your feedback.

# Folder Structure

After creating an app, it should look something like:

```
my-app/
  README.md
  .gitignore
  .prettierrc
  i18n.js
  .babelrc
  .eslintrc
  static/
    favicon.ico
    locales/
        en/
            common.js
    images/
  tests/
    units/
        components/
        jest.config.js
        pages/
        setup/
            index.js
            assetsTransformer.js
  server.js
  components/
    activeLink/
    footer/
    header/
    layout/
    navLink/
    characterInfo/
    nav/
  config/
    custom-environment-variables.js
    default.js
    development.js
    production.js
  lib/
    withI18next.js
    config.shim.js
  next.config.js
  pages/
    about/
    index.js
    _app.js
    _document.js
    home/
    redux-example/
  styles/
    _mixins.scss
    _variables.scss/
    main.scss
    vendors/
        bootstrap-4.0.0-beta.2/
  redux/
    actions.js
    epics.js
    index.js
    reducer.js
  package.json
```

# Available Scripts

### `yarn dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any errors in the console.

### `yarn build`

Builds the app for production to the `.next` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn start`

Starts the application in production mode.
The application should be compiled with \`next build\` first.

See the section in Next docs about [deployment](https://github.com/zeit/next.js/wiki/Deployment) for more information.

# Available Generators

### `yo create-next-app-reloaded:page`

It will prompt you the name and the title for your new page.

```
$ yo create-next-app-reloaded:page
? Page name: contactUs
? Page title: Contact Us Page
   create pages/contactUs/contactUs.js
   create pages/contactUs/index.js
   create pages/contactUs/contactUs.scss
   create static/locales/en/contactUs.json
   create tests/units/pages/contactUs.test.js
 conflict server.js // This is because we are adding the new i18n namespace into the namespaces array.
? Overwrite server.js? overwrite
    force server.js
```

### `yo create-next-app-reloaded:component`

It will prompt you the name for your new component.

```
$ yo create-next-app-reloaded:component
? Component name: myNav
   create components/myNav/myNav.js
   create components/myNav/index.js
   create components/myNav/casa.scss
   create static/locales/en/myNav.json
   create tests/units/components/myNav.test.js
```

# Changelog Generator
Generate a changelog from git commits using https://github.com/lob/generate-changelog. This is meant to be used so that for every patch, minor, or major version, you update the changelog prior to running npm version so that the git tag contains the commit that updated both the changelog and version.

# Release and Publish
In order to release and publish we have created a npm script `npm run release-and-publish` that will create a new tag in github and will publish your pkg into npm.

# What does this generator do?

This yeoman generator will build different React components, creating a skeleton for the different files.

# Credits

Damian Aruj <mailto:damian@analyticsfire.com>
Github: https://github.com/analyticsfire/generator-create-next-app-reloaded

# Licence

MIT
