import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import { rootEpic } from './epics';

/**
 * @param {object} initialState
 * @param {boolean} options.isServer indicates whether it is a server side or client side
 * @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
 * @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
 * @param {function} options.deserializeState custom functions for serializing and deserializing the redux state
 * @param {function} options.serializeState serialize the redux state on the server
 * @param {boolean} options.debug User-defined debug mode param
 * @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
 */
export default function initStore(initialState, options) {
  const epicMiddleware = createEpicMiddleware(rootEpic);
  const logger = createLogger({ collapsed: true }); // log every action to see what's happening behind the scenes.
  const reduxMiddleware = applyMiddleware(
    thunkMiddleware,
    epicMiddleware,
    logger
  );

  return createStore(
    reducer,
    initialState,
    composeWithDevTools(reduxMiddleware)
  );
}
