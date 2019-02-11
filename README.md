# A great component builder for ReactJs using NextJs

This yeoman generator will build different React components, creating a skeleton for the different files. 

# Requirements

This is a Yeoman generator. You need to install Yeoman, NodeJS and npm to install the generator and its dependencies. Make sure you have all installed globally.

First, download and install NodeJS and npm. More information about NodeJS / npm: https://nodejs.org/

Second, install Yeoman. More information about Yeoman: http://yeoman.io/

# Installation

```
$ npm install -g yo-nextjs-typescript-generator
```

# Usage

```
$ yo yo-nextjs-typescript-generator
$ cd yo-nextjs-typescript-generator
$ npm run dev
```

# Table of Contents

* [Questions? Feedback?](#questions-feedback)
* [Folder Structure](#folder-structure)
* [Available Scripts](#available-scripts)
  * [yarn dev](#yarn-dev)
  * [yarn build](#yarn-build)
  * [yarn start](#yarn-start)
* [Available Generators](#available-generators)
  * [yo yo-nextjs-typescript-generator:page](#yo-yo-nextjs-typescript-generatorpage)
  * [yo yo-nextjs-typescript-generator:component](#yo-yo-nextjs-typescript-generatorcomponent)
* [Changelog](#changelog-generator)
* [Release and Publish](#release-and-publish)

# Questions? Feedback?

Check out [Next.js FAQ & docs](https://github.com/zeit/next.js#faq) or [let us know](https://github.com/segmentio/create-next-app/issues) your feedback.

# Folder Structure

After creating an app, it should look something like:

```
my-app/
  api/
    postsApi.js
  components/
    global/
    commentItem/
      index.tsx
      styles.scss
    commentList/       
      index.tsx
      styles.scss
    customNProgress/
      index.tsx
      styles.scss
    layout/
      index.tsx
      styles.scss
    postItem/
      index.tsx
      styles.scss
    postList/
      index.tsx
      styles.scss
  config/
    custom-environment-variables.js
    default.js
    development.js
    production.js
    testing.js
  constants/
    index.ts
  lib/
    withI18next.js
    config.shim.js
  models/
    comment.d.ts
    post.d.ts
    index.d.ts
    loadable.d.ts
    dispatchable.d.ts
  pages/
    about/
      index.tsx
      styles.scss
    index/
      index.tsx
      styles.scss
    post/
      index.tsx
      styles.scss
    posts/
      index.tsx
      styles.scss
    _app.js
    _document.js
  redux/
    posts/
      actions.ts
      constants.ts
      payloads.ts
      sagas.ts
      selectors.ts
      state.ts
    createStore.ts    
    rootReducer.ts    
    rootSaga.ts  
    storeState.ts
  static/
    favicon.ico
    locales/
        en/
    images/
  styles/
    vendors/
    _mixins.scss
    _variables.scss
    antd-custom.less
    main.scss
  tests/
    units/
        components/
        jest.config.js
        pages/
        setup/
            index.js
            assetsTransformer.js
  typings/
    react-redux.d.ts
  .babelrc
  .eslintignore
  .eslintrc
  .gitignore
  .prettierrc
  README.md
  i18n.js
  .babelrc
  next.config.js
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

### `yo yo-nextjs-typescript-generator:page`

It will prompt you the name and the title for your new page.

```
$ yo yo-nextjs-typescript-generator:page
yo next-typescript-ant:page
? Page name Products
? Page title Our Products
   create pages\products\index.tsx
   create pages\products\styles.scss
   create static\locales\en\products.json
   create tests\units\pages\products.test.js
 conflict components\global\layout\index.tsx
? Overwrite components\global\layout\index.tsx? overwrite // This is because we are adding the link to the newly-created page to the nav bar, in the layout component
    force components\global\layout\index.tsx
 conflict server.js
? Overwrite server.j // This is because we are adding the new i18n namespace into the namespaces array.
    force server.js
```

### `yo yo-nextjs-typescript-generator:component`

It will prompt you the name for your new component.

```
$ yo yo-nextjs-typescript-generator:component
? Component name User
   create components\global\user\index.tsx
   create components\global\user\styles.scss
   create static\locales\en\user.json
   create tests\units\components\user.test.js
```

### `yo yo-nextjs-typescript-generator:model`

It will prompt you the name for your new interface.

```
$ yo yo-nextjs-typescript-generator:model
? Model name UserInfo
   create models\userInfo.d.ts
 conflict models\index.d.ts
? Overwrite models\index.d.ts? overwrite // Here we are adding our newly-created interface, IUserInfo, into index.d.ts, which exposes 'models' module
    force models\index.d.ts
```


### `yo yo-nextjs-typescript-generator:reducer`

It will prompt you the name for your new reducer.

```
$ yo yo-nextjs-typescript-generator:component
? Reducer name Employees
   create redux\employees\actions.ts
   create redux\employees\constants.ts
   create redux\employees\payloads.ts
   create redux\employees\reducer.ts
   create redux\employees\sagas.ts
   create redux\employees\selectors.ts
   create redux\employees\state.ts
 conflict redux\rootReducer.ts
? Overwrite redux\rootReducer.ts? overwrite // We are combining the current reducer with the new created Employees reducer
    force redux\rootReducer.ts
 conflict redux\rootSaga.ts
? Overwrite redux\rootSaga.ts? overwrite // We are updating the root saga to include the Employees' sagas so that the can be run at together
    force redux\rootSaga.ts
 conflict redux\storeState.ts
? Overwrite redux\storeState.ts? overwrite // We are updating the application state to include the IEmployeeState that just got created
    force redux\storeState.ts
```

# Changelog Generator
Generate a changelog from git commits using https://github.com/lob/generate-changelog. This is meant to be used so that for every patch, minor, or major version, you update the changelog prior to running npm version so that the git tag contains the commit that updated both the changelog and version.

# Release and Publish
In order to release and publish we have created a npm script `npm run release-and-publish` that will create a new tag in github and will publish your pkg into npm.

# What does this generator do?

This yeoman generator will build different React components, creating a skeleton for the different files.

# Credits

Damian Aruj <mailto:damian@analyticsfire.com>
Github: https://github.com/analyticsfire/generator-yo-nextjs-typescript-generator

# Licence

MIT
