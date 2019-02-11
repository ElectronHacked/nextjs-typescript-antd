# A great component builder for ReactJs using NextJs

This yeoman generator will build different React components, creating a skeleton for the different files. 

# Requirements

This is a Yeoman generator. You need to install Yeoman, NodeJS and npm to install the generator and its dependencies. Make sure you have all installed globally.

First, download and install NodeJS and npm. More information about NodeJS / npm: https://nodejs.org/

Second, install Yeoman. More information about Yeoman: http://yeoman.io/

# Installation

```
$ npm install -g next-typescript-ant
```

# Usage

```
$ yo next-typescript-ant
$ cd next-typescript-ant
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
  * [yo next-typescript-ant:page](#yo-next-typescript-antpage)
  * [yo next-typescript-ant:component](#yo-next-typescript-antcomponent)
  * [yo next-typescript-ant:reducer](#yo-next-typescript-antreducer)
  * [yo next-typescript-ant:model](#yo-next-typescript-antmodel)
* [Changelog](#changelog-generator)
* [Release and Publish](#release-and-publish)

# Questions? Feedback?

Check out [Next.js FAQ & docs](https://github.com/zeit/next.js#faq) or [let us know](https://github.com/ElectronHacked/next-typescript-ant/issues) your feedback.

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

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any errors in the console.

### `npm run build`

Builds the app for production to the `.next` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run start`

Starts the application in production mode.
The application should be compiled with `next build` first.

See the section in Next docs about [deployment](https://github.com/zeit/next.js/wiki/Deployment) for more information.

### `npm run export`

Then you have a static version of your app in the out directory.

You can also customize the output directory. For that `run next export -h` for the help.

Now you can deploy the out directory to any static hosting service. 

# Available Generators

### `yo next-typescript-ant:page`

It will prompt you the name and the title for your new page.

```
$ yo next-typescript-ant:page
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

### `yo next-typescript-ant:component`

It will prompt you the name for your new component.

```
$ yo next-typescript-ant:component
? Component name User
   create components\global\user\index.tsx
   create components\global\user\styles.scss
   create static\locales\en\user.json
   create tests\units\components\user.test.js
```

### `yo next-typescript-ant:model`

It will prompt you the name for your new interface.

```
$ yo next-typescript-ant:model
? Model name UserInfo
   create models\userInfo.d.ts
 conflict models\index.d.ts
? Overwrite models\index.d.ts? overwrite // Here we are adding our newly-created interface, IUserInfo, into index.d.ts, which exposes 'models' module
    force models\index.d.ts
```

### `yo next-typescript-ant:reducer`

It will prompt you the name for your new reducer.

```
$ yo next-typescript-ant:reducer
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

Electron Hacked
Github: https://github.com/ElectronHacked/next-typescript-ant

Inspired by https://github.com/AnalyticsFire/generator-create-next-app-reloaded by Damian Aruj

# Licence

MIT
