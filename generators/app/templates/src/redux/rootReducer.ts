import { combineReducers, Reducer, AnyAction } from 'redux';
import { StoreState } from './storeState';
/* new-imported-reducer-goes-here */

const rootReducer: Reducer<StoreState, AnyAction> = combineReducers<StoreState>(
  {
    /* new-tranformed-reducer-export-goes-here */
  }
);

export default rootReducer;
