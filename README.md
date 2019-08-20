
# A scaffolder for ReactJS using NextJS, TypeScript & Ant Design

This yeoman generator will build different React components, creating a skeleton for the different files. 

# Requirements

This is a Yeoman generator. You need to install Yeoman, NodeJS and npm to install the generator and its dependencies. Make sure you have all installed globally.

First, download and install NodeJS and npm. More information about NodeJS / npm: https://nodejs.org/

Second, install Yeoman. More information about Yeoman: http://yeoman.io/

# Installation

```
# install yo
$ npm install -g yo

# install a generator
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
  * [yo nextjs-typescript-antd](#yo-nextjs-typescript-antd)
  * [yo nextjs-typescript-antd:page](#yo-nextjs-typescript-antdpage)
  * [yo nextjs-typescript-antd:component](#yo-nextjs-typescript-antdcomponent)
  * [yo nextjs-typescript-antd:store](#yo-nextjs-typescript-antdstore)
  * [yo nextjs-typescript-antd:action](#yo-nextjs-typescript-antdaction)
  * [yo nextjs-typescript-antd:enum](#yo-nextjs-typescript-antdenum)
  * [yo nextjs-typescript-antd:hoc](#yo-nextjs-typescript-antdhoc)
  * [yo nextjs-typescript-antd:hook](#yo-nextjs-typescript-antdhook)
  * [yo nextjs-typescript-antd:context](#yo-nextjs-typescript-antdcontext)
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

### `yo nextjs-typescript-antd

It will prompt you for the details of your new project `nextjs-typescript-antd` project

```
$ yo nextjs-typescript-antd
Initializing...
? Your project name rect-next-project
? Your project display name React Next Project
? What's your full name User Name
? What's your email address username@email.com
   create package.json
   create .babelrc
   create .eslintignore
   create .eslintrc
   create .gitattributes
   create .gitignore
   create .prettierrc
   ...
```

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
Sometimes you might want to have your page nested within another page. To achieve this, all you need to do is: 
```
$ yo nextjs-typescript-antd:page --force
? Page name forgot password
? Page title Forgot password
? Is this a nested page? Yes
? Select the parent page
  about
> account
  index
  people
  post
  posts
(Move up and down to reveal more choices)
```
then after selecting `account` as the parent page, your`forgot password` will be generated within the `account` folder. (Please note that you would have created the `account`	 page earlier). Below is the final output: 



```
$ yo nextjs-typescript-antd:page --force
? Page name forgot password
? Page title Forgot password
? Is this a nested page? Yes
? Select the parent page account
? Would you like to create reducer for this page? No
   create pages\account\forgot-password\index.tsx
   create pages\account\forgot-password\styles.scss
   create static\locales\en\pages\account\forgot-password.json
   create tests\units\pages\account\forgot-password.test.js
    force components\global\layout\index.tsx
    force server.js
```

Note how the page has been named `forgot-password` even though you would have entered 	`forgot password`. The same would have been the case even if you had entered something like `Forgot Password`, `forgotPassword` or 	`ForgotPassword` 

You can choose that a  the redux `store` be created when you create  a page. To achieve this, just answer `y` to the question `Would you like to create reducer for this page?`. And the output would be something like below:
```
$ yo nextjs-typescript-antd:page --force
? Page name Forgot Password
? Page title Forgot password
? Is this a nested page? Yes
? Select the parent page account
? Would you like to create reducer for this page? Yes
? Reducer name (ForgotPassword)
```
Notice how the default reducer name is `ForgotPassword`. The same would have been the case even if you had entered something like `forgot Password`, `forgotPassword` or 	`forgot-password` for the name of the page . And the final output will be something like

```
$ yo nextjs-typescript-antd:page --force
? Page name Forgot Password
? Page title Forgot password
? Is this a nested page? Yes
? Select the parent page account
? Would you like to create reducer for this page? Yes
? Reducer name ForgotPassword
    force pages\account\forgot-password\index.tsx
    force pages\account\forgot-password\styles.scss
    force static\locales\en\pages\account\forgot-password.json
    force tests\units\pages\account\forgot-password.test.js
    force components\global\layout\index.tsx
    force server.js
   create redux-store\forgotPassword\actions.ts
   create redux-store\forgotPassword\constants.ts
   create redux-store\forgotPassword\reducer.ts
   create redux-store\forgotPassword\sagas.ts
   create redux-store\forgotPassword\selectors.ts
   create redux-store\forgotPassword\state.ts
    force redux-store\rootReducer.ts
    force redux-store\rootSaga.ts
    force redux-store\storeState.ts
```

### `yo nextjs-typescript-antd:component`

It will prompt you the name for your new component.

```
$ yo nextjs-typescript-antd:component --force
? Component name UserDetails
? Is this a page-specific component? Yes
? Page name User
   create components\global\pages\user\userDetails\index.tsx
   create components\global\userDetails\styles.scss
   create static\locales\en\userDetails.json
   create tests\units\components\userDetails.test.js
```
Just as you can nest pages, you can also choose that your components be specific to pages which are nested. Below is the code sample:

```
$ yo nextjs-typescript-antd:component --force
? Component name user avatar
? Is this a page-specific component? Yes
? Page name
  about
  account
> account/forgot-password
  index
  people
(Move up and down to reveal more choices)
```

And the final output:
```
$ yo nextjs-typescript-antd:component --force
? Component name user avatar
? Is this a page-specific component? Yes
? Page name account/forgot-password
   create components\pages\account\forgot-password\userAvatar\index.tsx
   create components\pages\account\forgot-password\userAvatar\styles.scss
    force static\locales\en\userAvatar.json
    force tests\units\components\userAvatar.test.js
    force components\index.ts
```

Note that for the component name we entered `user avatar` and we got `userAvatar`. This is because all the component files should be `camelCase`d and the component names should be `PascalCase`d. Below is the generated component:

```jsx
import  React, {FC} from  'react';
import  './styles.scss';

interface  IProps {};

export  const  UserAvatar:  FC<IProps> = () => (
	<div  className="user-avatar">
		UserAvatar component
	</div>
);

export  default  UserAvatar;
```


And the `components\index.ts` file looks something like

```jsx
export { default  as  CommentItem } from  './global/commentItem';
export { default  as  CommentList } from  './global/commentList';
export { default  as  CustomNProgress } from  './global/customNProgress';
export { default  as  Layout } from  './global/layout';
export { default  as  PostItem } from  './global/postItem';
export { default  as  PostList } from  './global/postList';
export { default  as  CustomErrorBoundary } from  './global/customErrorBoundary';
export { default  as  UserAvatar } from  './pages/account/forgot-password/userAvatar';
/* new-component-import-goes-here */
```
This will allow you to import the `UserAvatar`  component from anywhere in the project like below

```jsx
...
import { UserAvatar } from 'components';
...
```

This is possible because of the configuration in the `.babelrc` file, line `9`

```json
{
  "presets": ["next/babel", "@zeit/next-typescript/babel"],
  "plugins": [
    [
      "module-resolver",
      {
        "root": ["./"],
        "alias": {
          "api": "./api",
          "components": "./components",
          "constants": "./constants",
          "redux-store": "./redux-store"
        }
      }
    ],
    ["@babel/plugin-proposal-decorators", { "decoratorsBeforeExport": true }],
    [
      "import",
      {
        "libraryName": "antd",
        "style": true
      }
    ]
  ]
}
```
### `yo nextjs-typescript-antd:store`

It will prompt you the name for your new store.

```
$ $ yo nextjs-typescript-antd:store --force
? Store name People
   create redux-store\people\actions.ts
   create redux-store\people\constants.ts
   create redux-store\people\reducer.ts
   create redux-store\people\sagas.ts
   create redux-store\people\selectors.ts
   create redux-store\people\state.ts
    force redux-store\rootReducer.ts
    force redux-store\rootSaga.ts
    force redux-store\storeState.ts
```
As you can see, there were 6 new files which were created. Let's have a look at each and explain what's happening in those.

#### `state.ts`
```jsx
export  type  PeopleErrable  =
	|  '__errable__'  // Remove this. It's just a placeholder
	/* new-errable-goes-here */; 

export  type  PeopleBooleanable  =
	|  '__booleanable__'  // Remove this. It's just a placeholder
	/* new-booleanable-goes-here */;  

export  type  PeopleSuccessible  =
	|  '__successible__'  // Remove this. It's just a placeholder
	/* new-successible-goes-here */;  

export  interface  IPeopleState{ 
	//#region Doables
	readonly errable?: { [key  in  PeopleErrable]?:  string };
	readonly booleanable?: { [key  in  PeopleBooleanable]?:  boolean };
	readonly successible?: { [key  in  PeopleSuccessible]?:  string };
	//#endregion
}
```
As you can see, we have 3 `type`s, namely `PeopleErrable`, `PeopleBooleanable` & `PeopleSuccessible` and they are initialized with default values which the comments state that they should be removed as soon as you start creating your own.

The reason I introduced these 3 `type` in a newly-created store is to allow the user to define the state for all the actions that are `fullfillable` and by this, I simply mean the situation where an action can be dispatched and we wait for it finish (by either succeeding or failing). If we use fetching users as an example, we would normally have three properties in the state: `isFetchingUsers`: `boolean`, `fetchUsersError`: `string` and (sometimes `fetchUserSuccess`: `string` - which, for the purpose of this example, would be a string like `"Successfully fetched the user!"`. 

This approach seem to work properly, except for when you have to create a selector to read them. You would have something like `selectIsFetchingUsers`, `fetchUserErrorMessage` and, finally, `fetchUserSuccess`. This creates a problem because for every `fullfilable` action, that would mean you would need a new selector. 

Another problem is when you need an action to set each of those. The old approach means you would need 3 actions, namely: `setIsfetchingUsers`, 	`setFetchUserErrorMessage` and `fetchUserSuccess`. That's not cool! So, to avoid having to do this, I just thought I could get away with these `doable` `type`s and define, in them, what can be doable. This allows me to create just one selector that allows me to select anything  that can be `booleanable`, such as `isFetchingUsers`, `isUpdatingTheUser`, `isSigningOut`, `showDeleteModal`, etc. with just one selector like the one below

```jsx
export  const  selectPeopleBooleanableState  = (key:  PeopleBooleanable  |  PeopleBooleanable[]) =>

createSelector(
	peopleState(),
	({ booleanable }) => (Array.isArray(key) ?  !!key.filter(k  =>  		booleanable[k]).length  :  booleanable[key])
);
```
As you can see, I can simply do something like

```jsx
const mapStateToProps = createStructuredSelector({
	isFetchingUsers= selectPeopleBooleanableState('isFetchingUsers')
	isUpdatingTheUser= selectPeopleBooleanableState('isUpdatingTheUser')
	isSigningOut= selectPeopleBooleanableState('isSigningOut')
	showDeleteModal= selectPeopleBooleanableState('showDeleteModal')
})

// Or the one that returns true if any of the above is true, like
const mapStateToProps = createStructuredSelector({
	showloader= selectPeopleBooleanableState(['isFetchingUsers', 'isUpdatingTheUser', 'isSigningOut'])
})
```

Please be sure to remove the default `doable`s like `__errable__`, `__booleanable__` & `__successible__` once you have added your own.

Another example of creating an action that can set either of them, is in the `redux-store\people\actions.ts`

```jsx
export  const  togglePeopleErrableState  =  createAction<IPeopleState, { [key  in  PeopleErrable]?:  string }>(
	TOGGLE_PEOPLE_ERRABLE_STATE,
	key  => ({
		errable: key,
	})
);
```

This allows you to what is shown below. (This assumes you have `errable` states such as `fetcUserErrorMsg`, `updateUserErrorMsg`, `signInErrorMsg`, etc.

```jsx
dispatch(togglePeopleErrableState({ fetcUserErrorMsg: '' )); 
dispatch(togglePeopleErrableState({ updateUserErrorMsg: 'Could not update the user!' ));
dispatch(togglePeopleErrableState({ signInErrorMsg: '' ));

// Or even
dispatch(togglePeopleErrableState({ 
	fetcUserErrorMsg: '',
	updateUserErrorMsg: 'Could not update the user!',
	signInErrorMsg: '' 
})); 

```

All with just one action.

### `constants.ts`
```jsx
export  const  DEFAULT_ACTION  =  'DEFAULT_ACTION';

  

//#region Reset doable for this state
export  const  RESET_PEOPLE_DOABLES  =  'RESET_PEOPLE_DOABLES';
export  const  TOGGLE_PEOPLE_BOOLEANABLE_STATE  =  'TOGGLE_PEOPLE_BOOLEANABLE_STATE';
export  const  TOGGLE_PEOPLE_ERRABLE_STATE  =  'TOGGLE_PEOPLE_ERRABLE_STATE';
export  const  TOGGLE_PEOPLE_SUCCESSIBLE_STATE  =  'TOGGLE_PEOPLE_SUCCESSIBLE_STATE';
//#endregion

/* new-constant-export-goes-here */
```
This contains the constants to set the `doable`s and reset them. Please do not remove the line that says `/* new-constant-export-goes-here */` as that is where the generated code will seat.

#### `reducer.ts`

```jsx
import {
	DEFAULT_ACTION,
	RESET_PEOPLE_DOABLES,
	/* new-constant-import-goes-here */
} from  './constants';
  
import { IPeopleState } from  './state';
import { reducerPayloadDoableHelper } from  'redux-store/rootReducer';
  
const  initialState:  IPeopleState  = {
	errable: {},
	booleanable: {},
	successible: {},
};

  

export  default (
state: IPeopleState  =  initialState,
{ type, payload: incomingPayload }: ReduxActions.Action<IPeopleState>
) => {
const  payload  =
	type  ===  RESET_PEOPLE_DOABLES
	?  incomingPayload
	: (reducerPayloadDoableHelper(state, incomingPayload) as  IPeopleState);
	  

switch (type) {
	/* new-constant-cases-go-here */
	case  DEFAULT_ACTION:
		return {
			...state,
			...payload,
		}
	default:
		return  state;
	}
};
```

### `yo nextjs-typescript-antd:action`

It will prompt you the name for your new reducer.

```
$ $ yo nextjs-typescript-antd:action --force
? Action name jump
? Select the reducer (Use arrow keys)
> People 
  Posts 
```

```
$ yo nextjs-typescript-antd:action --force
? Action name jump
? Select the reducer People
? Is it fullfillable? (Does it have SUCCESS & ERROR?) Yes
    force redux-store\people\constants.ts
    force redux-store\people\reducer.ts
    force redux-store\people\actions.ts
    force redux-store\people\state.ts
    force redux-store\people\sagas.ts
```

### `yo nextjs-typescript-antd:enum`

It will prompt you the name for your new reducer.

```
$ yo nextjs-typescript-antd:enum --force
? Enum name UserRoles
   create enums\userRoles.ts
    force enums\index.ts
```
### `yo nextjs-typescript-antd:antdhoc`

It will prompt you the name for your new reducer.

```
$ yo nextjs-typescript-antd:hoc --force
? HOC name withUserRoles
   create hocs\withUserRoles.tsx
    force hocs\index.ts
```

### `yo nextjs-typescript-antd:antdhook`

It will prompt you the name for your new reducer.

```
$ yo nextjs-typescript-antd:hook --force
? Hook name (Should start with use) useUserRoles
   create hooks\useUserRoles.ts
    force hooks\index.ts
```

### `yo nextjs-typescript-antd:antdcontext`

It will prompt you the name for your new reducer.

```
$ yo nextjs-typescript-antd:context --force
? Context name UserContext
   create contexts\userContext.ts
    force contexts\index.ts
```

### `yo nextjs-typescript-antd:model`

It will prompt you the name for your new interface.

```
$ yo nextjs-typescript-antd:model --force
? Model name User
   create models\user.d.ts
    force models\index.d.ts
```

# Changelog Generator
Generate a changelog from git commits using https://github.com/lob/generate-changelog. This is meant to be used so that for every patch, minor, or major version, you update the changelog prior to running npm version so that the git tag contains the commit that updated both the changelog and version.

# Release and Publish
In order to release and publish we have created a npm script `npm run release-and-publish` that will create a new tag in github and will publish your pkg into npm.

# What does this generator do?

This yeoman generator will build different React components, creating a skeleton for the different files.

### TODO List

- [ ] Allow The User To Choose A CSS Preprocessor (LESS OR LESS)
- [ ] Allow The User To Specify CRUD Requirements When Generating The Page
- [ ] Allow The User To Choose A [Layout](https://ant.design/components/layout/) When Generating The Boilerplate

# Credits

Electron Hacked
Github: https://github.com/ElectronHacked/nextjs-typescript-antd

Inspired by https://github.com/AnalyticsFire/generator-create-next-app-reloaded by Damian Aruj

# Licence

MIT
