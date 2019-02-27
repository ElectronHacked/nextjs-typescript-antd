# A scaffolder for ReactJS using NextJS, TypeScript & Ant Design

This yeoman generator will build different React components, creating a skeleton for the different files. 

# Requirements

This is a Yeoman generator. You need to install Yeoman, NodeJS and npm to install the generator and its dependencies. Make sure you have all installed globally.

First, download and install NodeJS and npm. More information about NodeJS / npm: https://nodejs.org/

Second, install Yeoman. More information about Yeoman: http://yeoman.io/

# Installation

```
$ npm install -g generator-nextjs-typescript-antd
```

# Usage

```
$ yo nextjs-typescript-antd
```

# Table of Contents

* [Questions? Feedback?](#questions-feedback)
* [Folder Structure](#folder-structure)
* [Available Scripts](#available-scripts)
  * [npm run dev](#npm-run-dev)
  * [npm run build](#npm-run-build)
  * [npm run build](#npm-run-build)
  * [npm run export](#npm-run-export)
* [Available Generators](#available-generators)
  * [yo nextjs-typescript-antd:page](#yo-nextjs-typescript-antdpage)
  * [yo nextjs-typescript-antd:component](#yo-nextjs-typescript-antdcomponent)
  * [yo nextjs-typescript-antd:reducer](#yo-nextjs-typescript-antdreducer)
  * [yo nextjs-typescript-antd:model](#yo-nextjs-typescript-antdmodel)
* [Changelog](#changelog-generator)
* [Release and Publish](#release-and-publish)

# Questions? Feedback?

Check out [Next.js FAQ & docs](https://github.com/zeit/next.js#faq) or [let us know](https://github.com/ElectronHacked/nextjs-typescript-antd/issues) your feedback.

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

### `yo nextjs-typescript-antd:page`

It will prompt you for the name and the title of your new page.

```
$ yo nextjs-typescript-antd:page --force
? Page name User
? Page title User Details
? Would you like to create reducer for this page? Yes
? Reducer name User
   create pages\user\index.tsx
   create pages\user\styles.scss
   create static\locales\en\user.json
   create tests\units\pages\user.test.js
    force components\global\layout\index.tsx
    force server.js
   create redux\user\actions.ts
   create redux\user\constants.ts
   create redux\user\payloads.ts
   create redux\user\reducer.ts
   create redux\user\sagas.ts
   create redux\user\selectors.ts
   create redux\user\state.ts
    force redux\rootReducer.ts
    force redux\rootSaga.ts
    force redux\storeState.ts
```

### `yo nextjs-typescript-antd:component`

It will prompt you the name for your new component.

```
$ yo nextjs-typescript-antd:component
? Component name UserDetails
? Is this a page-specific component? Yes
? Page name User
   create components\global\pages\user\userDetails\index.tsx
   create components\global\userDetails\styles.scss
   create static\locales\en\userDetails.json
   create tests\units\components\userDetails.test.js
```

### `yo nextjs-typescript-antd:model`

It will prompt you the name for your new interface.

```
$ yo nextjs-typescript-antd:model
? Model name UserInfo
   create models\userInfo.d.ts
 conflict models\index.d.ts
? Overwrite models\index.d.ts? overwrite // Here we are adding our newly-created interface, IUserInfo, into index.d.ts, which exposes 'models' module
    force models\index.d.ts
```

### `yo nextjs-typescript-antd:reducer`

It will prompt you the name for your new reducer.

```
$ yo nextjs-typescript-antd:reducer
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
Github: https://github.com/ElectronHacked/nextjs-typescript-antd

Inspired by https://github.com/AnalyticsFire/generator-create-next-app-reloaded by Damian Aruj

# Licence

MIT
