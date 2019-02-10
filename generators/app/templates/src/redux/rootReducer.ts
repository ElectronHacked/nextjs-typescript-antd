import { combineReducers, Reducer, AnyAction } from 'redux';
import { IStoreState } from './storeState';
import posts from './posts/reducer';
/* new-imported-reducer-goes-here */

const rootReducer: Reducer<IStoreState, AnyAction> = combineReducers<
  IStoreState
>({
  posts,
  /* new-tranformed-reducer-export-goes-here */
});

export default rootReducer;
