

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

### `yo nextjs-typescript-antd`

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
? Would you like to create a store for this page? Yes
? Store name User
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
then after selecting `account` as the parent page, your`forgot password` will be generated within the `account` folder. (Please note that you would have created the `account` page earlier). Below is the final output: 



```
$ yo nextjs-typescript-antd:page --force
? Page name forgot password
? Page title Forgot password
? Is this a nested page? Yes
? Select the parent page account
? Would you like to create a store for this page? No
   create pages\account\forgot-password\index.tsx
   create pages\account\forgot-password\styles.scss
   create static\locales\en\pages\account\forgot-password.json
   create tests\units\pages\account\forgot-password.test.js
    force components\global\layout\index.tsx
    force server.js
```

Note how the page has been named `forgot-password` even though you would have entered   `forgot password`. The same would have been the case even if you had entered something like `Forgot Password`, `forgotPassword` or  `ForgotPassword` 

You can choose that a  the redux `store` be created when you create  a page. To achieve this, just answer `y` to the question `Would you like to create a store for this page?`. And the output would be something like below:
```
$ yo nextjs-typescript-antd:page --force
? Page name Forgot Password
? Page title Forgot password
? Is this a nested page? Yes
? Select the parent page account
? Would you like to create a store for this page? Yes
? Store name (ForgotPassword)
```
Notice how the default Store name is `ForgotPassword`. The same would have been the case even if you had entered something like `forgot Password`, `forgotPassword` or    `forgot-password` for the name of the page . And the final output will be something like

```
$ yo nextjs-typescript-antd:page --force
? Page name Forgot Password
? Page title Forgot password
? Is this a nested page? Yes
? Select the parent page account
? Would you like to create a store for this page? Yes
? Store name ForgotPassword
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

This is possible because of the configuration in the `.babelrc` file.

```json
...
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
...
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

export  interface  IPeopleState { 
    //#region Doables
    readonly errable?: { [key  in  PeopleErrable]?:  string };
    readonly booleanable?: { [key  in  PeopleBooleanable]?:  boolean };
    readonly successible?: { [key  in  PeopleSuccessible]?:  string };
    //#endregion
}
```
As you can see, we have 3 `type`s, namely `PeopleErrable`, `PeopleBooleanable` & `PeopleSuccessible` and they are initialized with default values which the comments state that they should be removed as soon as you start creating your own.

The reason I introduced these 3 `type` in a newly-created store is to allow the user to define the state for all the actions that are `fullfillable` and by this, I simply mean the situation where an action can be dispatched and we wait for it finish (by either succeeding or failing). If we use fetching users as an example, we would normally have three properties in the state: `isFetchUsersInProgress`: `boolean`, `fetchUsersError`: `string` and (sometimes `fetchUserSuccess`: `string` - which, for the purpose of this example, would be a string like `"Successfully fetched the user!"`. 

This approach seem to work properly, except for when you have to create a selector to read them. You would have something like `selectisFetchUsersInProgress`, `fetchUserErrorMessage` and, finally, `fetchUserSuccess`. This creates a problem because for every `fullfilable` action, that would mean you would need a new selector. 

Another problem is when you need an action to set each of those. The old approach means you would need 3 actions, namely: `setisFetchUsersInProgress`,  `setFetchUserErrorMessage` and `fetchUserSuccess`. That's not cool! So, to avoid having to do this, I just thought I could get away with these `doable` `type`s and define, in them, what can be doable. This allows me to create just one selector that allows me to select anything  that can be `booleanable`, such as `isFetchUsersInProgress`, `isUpdateUserInProgress`, `isSigningOutInProgress`, `showDeleteModal`, etc. with just one selector like the one below

```jsx
export  const  selectPeopleBooleanableState  = (key:  PeopleBooleanable  |  PeopleBooleanable[]) =>

createSelector(
    peopleState(),
    ({ booleanable }) => (Array.isArray(key) ?  !!key.filter(k  =>          booleanable[k]).length  :  booleanable[key])
);
```
As you can see, I can simply do something like

```jsx
const mapStateToProps = createStructuredSelector({
    isFetchUsersInProgress= selectPeopleBooleanableState('isFetchUsersInProgress')
    isUpdateUserInProgress= selectPeopleBooleanableState('isUpdateUserInProgress')
    isSigningOutInProgress= selectPeopleBooleanableState('isSigningOutInProgress')
    showDeleteModal= selectPeopleBooleanableState('showDeleteModal')
});

// Or the one that returns true if any of the above is true, like
const mapStateToProps = createStructuredSelector({
    showloader= selectPeopleBooleanableState(['isFetchUsersInProgress', 'isUpdateUserInProgress', 'isSigningOutInProgress'])
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
Inside the reducer, the first line ensures that if the action being performed is `RESET_PEOPLE_DOABLES`, we make make use of `./rootReducer/reducerPayloadDoableHelper` which ensures that the current `errable`, `successible` and `boolean` are not overridden by the incoming values. A good example of when that can be the case is if our current state has something like this:

```jsx
{
    booleanable: {
        isFetchUsersInProgress: true,
        isUpdateUserInProgress: false,
    }
}
```

if we were to `togglePeopleBooleanableState` like below
```jsx
dispatch(togglePeopleBooleanableState({
    isSigningOutInProgress: false, showDeleteModal: false
}));
```

this would have resulted in a new state being 
```jsx
{
    booleanable: {
        isSigningOutInProgress: false,
        showDeleteModal: false,
    }
}
```
but what we are looking for is 
```jsx
{
    booleanable: {
        isFetchUsersInProgress: true,
        isUpdateUserInProgress: false,
        isSigningOutInProgress: false,
        showDeleteModal: false,
    }
}
```

but the `reducerPayloadDoableHelper` function solves that problem.

I will skip`sagas.ts` file.

#### `selectors.ts`
This is initialized with 3 selectors that are used to select the `errable`, `successible` or `booleanable` states of a given sub-state. and they are, in the case of `People` state, `selectPeopleBooleanableState`,  `selectPeopleErrableState` and `selectPeopleSuccessibleState`. All these will be generated for you when you use the `:store` subgenerator. 

### `yo nextjs-typescript-antd:action`

It will prompt you the name for your new action.

Below is an example of creating a `action`. The first question you are asked is t select the name of the state under which the action will be created. In our case, that will be a `People` state.
```
$ $ yo nextjs-typescript-antd:action --force
? Action name jump
? Select the store (Use arrow keys)
> People 
  Posts 
```

In case you are wondering, the list of states is contained in the `.yo-rc.json` file and it's updated each time you use a generator to generate a state. Currently, it looks like below
```jsx
{
  "generator-nextjs-typescript-antd": {
    "pages": [
      ...
    ],
    "stores": [
      "Posts",
      "People"
    ]
  }
}
```

As you can see, there are two stores in our project.

After that, you are asked if your action will can be fullfillable or not. An example of such can be one that triggers an API call, such as `fetchUsers` because an API can return either success or error in which case you might want to react to that by dispatching a success (`fetchUsersSuccess`) an error (`fetchUsersError`) action. 
```
$ yo nextjs-typescript-antd:action --force
? Action name fetchUsers
? Select the store People
? Is it fullfillable? (Does it have SUCCESS & ERROR?) Yes
    force redux-store\people\constants.ts
    force redux-store\people\reducer.ts
    force redux-store\people\actions.ts
    force redux-store\people\state.ts
    force redux-store\people\sagas.ts
```

As you can see 5 files were updated. Let's see how they were all affected.

```jsx
// redux-store\people\constants.ts
  
...
//#region FETCH_USERS-related constants
export  const  FETCH_USERS  =  'FETCH_USERS';
export  const  FETCH_USERS_SUCCESS  =  'FETCH_USERS_SUCCESS';
export  const  FETCH_USERS_ERROR  =  'FETCH_USERS_ERROR';
//#endregion
...
```

```jsx
// redux-store\people\actions.ts
  
...
//#region fetchUsers-related constants
export  const  fetchUsers  =  createAction<IPeopleState>(FETCH_USERS, () => ({
booleanable: { isFetchUsersInProgress: true },
errable: { fetchUsersErrorMsg: null },
successible: { fetchUsersSuccessMsg: null },
}));
 
export  const  fetchUsersSuccess  =  createAction<IPeopleState, IPeopleState>(FETCH_USERS_SUCCESS, state  => ({
booleanable: { isFetchUsersInProgress: false },
successible: { fetchUsersSuccessMsg: 'FETCH_USERS action fullfilled!' },
state,
}));

export  const  fetchUsersError  =  createAction<IPeopleState, string>(FETCH_USERS_ERROR, fetchUsersErrorMsg  => ({
booleanable: { isFetchUsersInProgress: false },
errable: { fetchUsersErrorMsg },
}));
//#endregion
...
```

```jsx
// redux-store\people\reducer.ts
  
import {
    ...
    FETCH_USERS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR,
    /* new-constant-import-goes-here */
} from  './constants';

...

export  default (
state: IPeopleState  =  initialState,
{ type, payload: incomingPayload }: ReduxActions.Action<IPeopleState>
) => {
const  payload  = ...

    switch (type) {
        ...
        case  FETCH_USERS:
        case  FETCH_USERS_SUCCESS:
        case  FETCH_USERS_ERROR:
        /* new-constant-cases-go-here */
        case  DEFAULT_ACTION:
        return {
            ...state,
            ...payload,
        };
        default:
            return  state;
    }
};
```

```jsx
// redux-store\people\sagas.ts
  
...
import {
  ...
  FETCH_USERS,
  /* new-constant-import-goes-here */
} from './constants';
import {
  ...
  fetchUsersSuccess,
  fetchUsersError,
  /* new-action-import-goes-here */
} from './actions';
...
function* fetchUsersSaga() {
  const BOOL_VALUE = Math.random() >= 0.5;

  yield delay(500); // Just sleep for half a sec just to look real. A saga requires a yield because it's a generator

  try {
    if (BOOL_VALUE) {
      yield put(fetchUsersSuccess({}));
    } else {
      yield put(fetchUsersError('Sorry, An error occured! Please try again later!'));
    }
  } catch (error) {
    yield put(fetchUsersError('Sorry, An error occured! Please try again later!'));
  }
}

export default function* peopleSaga() {
  yield all([
    ...
    takeLatest(FETCH_USERS, fetchUsersSaga),
    /* new-saga-registration-goes-here */
  ]);
}

```

```jsx
// redux-store\people\state.ts
...
export  type  PeopleErrable  = 'fetchUsersErrorMsg'  /* new-errable-goes-here */;
export  type  PeopleBooleanable  = 'isFetchUsersInProgress'  /* new-booleanable-goes-here */;
export  type  PeopleSuccessible  = 'fetchUsersSuccessMsg'  /* new-successible-goes-here */;
...
```

As you can see, it's too much code... but it's too much code that you don't get to write.

In a case where you do not want to have your action that has `_ERROR` and `_SUCCESS`, you would have only three files updated such as below

```jsx
$ yo nextjs-typescript-antd:action --force
? Action name jump
? Select the store People
? Is it fullfillable? (Does it have SUCCESS & ERROR?) No
    force redux-store\people\constants.ts
    force redux-store\people\reducer.ts
    force redux-store\people\actions.ts
```

And below is how each would have been affected
```jsx
// redux-store\people\constants.ts
...
//#region JUMP-related constants
export  const  JUMP  =  'JUMP';
//#endregion
...

// redux-store\people\reducer.ts
...
switch (type) {
    ...
    case  JUMP:
    /* new-constant-cases-go-here */
    case  DEFAULT_ACTION:
        return {
            ...state,
            ...payload,
        };
    default:
        return  state;
}

...
// redux-store\people\actions.ts
...
//#region jump-related constants
export  const  jump  =  createAction<IPeopleState, IPeopleState>(JUMP,  state  =>  state); // Make sure you pass a proper payload!!!
//#endregion
...
```

As you can see, there was nothing updated with regards to `errable`, `successible` and `booleanable` states because the action is not `async` and  can't fail.

### `yo nextjs-typescript-antd:enum`

It will prompt you the name for your new enum.

```
$ yo nextjs-typescript-antd:enum --force
? Enum name UserRoles
   create enums\userRoles.ts
    force enums\index.ts
```

Below is how the two files will be affected 

```jsx
// enums\userRoles.ts
export  enum  UserRoles {
    DefaultValue =  1,
}
```
and
```jsx
// enums\index.ts
...
export { UserRoles } from  './userRoles';
...
```
### `yo nextjs-typescript-antd:antdhoc`

It will prompt you the name for your new higher-order component.

```
$ yo nextjs-typescript-antd:hoc --force
? HOC name withUserRoles
   create hocs\withUserRoles.tsx
    force hocs\index.ts
```
Below is how the two files will be affected 

```jsx
// hocs\withUserRoles.tsx

import  React, { FC, ComponentType } from  'react';
/**
 *
 * @param  Component - the component that is passed into the HOC can be either a function component or class component.
 *
 * @see https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb
*/
const  withUserRoles  = <P  extends  object>(Component:  ComponentType<P>):  FC<P> => (props:  P) => {
    // Your logic comes up in here
    return  <Component {...props} />;
};  

export  default  withUserRoles;
```
and
```jsx
// hocs\index.ts
...
export { default  as  withUserRoles } from  './withUserRoles';
...
```

### `yo nextjs-typescript-antd:antdhook`

It will prompt you the name for your new hook.

```
$ yo nextjs-typescript-antd:hook --force
? Hook name (Should start with use) useUserRoles
   create hooks\useUserRoles.ts
    force hooks\index.ts
```
Below is how the two files will be affected 

```jsx
// hooks\useUserRoles.ts

export  const  useUserRoles  = () => {
    // Put your logic here
    return  null;
};
```
and
```jsx
// hooks\index.ts
...
export { useUserRoles } from  './useUserRoles';
...
```

### `yo nextjs-typescript-antd:antdcontext`

It will prompt you the name for your new context.

```
$ yo nextjs-typescript-antd:context --force
? Context name UserContext
   create contexts\userContext.ts
    force contexts\index.ts
```
Below is how the two files will be affected 

```jsx
// contexts\userContext.ts

import { createContext } from  'react';  

interface  IUserContext {} 

export  const  defaultUserContext:  IUserContext  = {};

export  const  UserContext  =  createContext<IUserContext>(defaultUserContext);
```
and
```jsx
// contexts\index.ts
...
export { UserContext } from  './userContext';
...
```

### `yo nextjs-typescript-antd:model`

It will prompt you the name for your new interface.

```
$ yo nextjs-typescript-antd:model --force
? Model name User
   create models\user.d.ts
    force models\index.d.ts
```

Below is how the two files will be affected 

```jsx
// models\user.d.ts

export  interface  IUser {
    readonly id:  string;
}
```
and
```jsx
// models\index.d.ts
...
export { IUser } from  './user';
...
```

All that the subgenerators `:hoc`, `:hook`, `:model`, `:hook` and `:context` are giving you is a boilerplate and they also help enforcing the naming convention and eliminate the issues that can arise by someone creating something, like an `hoc` and they forget to export it in the `hocs/index.ts`. That will only mean that they can only import it as `import { someHoc } from 'hocs/someHoc';`. But they should only be importing it as `import { someHoc } from 'hocs';` and that is only possible if they don't forget to export it in the `hocs/index.ts` file. And, also, because the code is generated, you can not create a file in `PascalCase` , as in `SomeHoc` or even `hocs/some-hoc`. All file names will be in `camelCase`. 

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
