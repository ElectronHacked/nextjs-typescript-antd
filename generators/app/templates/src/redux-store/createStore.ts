import { createStore, applyMiddleware, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import allSagas from './rootSaga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middlewares: Middleware[]) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middlewares));
  }
  return applyMiddleware(...middlewares);
};

export function configureStore() {
  const middlewares: Middleware[] = [sagaMiddleware];

  const persistConfig = {
    key: 'root',
    storage,
    blacklist: [],
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer, bindMiddleware(middlewares));

  const persistor = persistStore(store);

  allSagas.forEach(saga => {
    sagaMiddleware.run(saga);
  });

  return { store, persistor };
}
