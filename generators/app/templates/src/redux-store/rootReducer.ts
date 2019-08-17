import { combineReducers, Reducer, AnyAction } from 'redux';
import { IStoreState } from './storeState';
import posts from './posts/reducer';
/* new-imported-reducer-goes-here */

type StateComputedTypes = IStoreState[keyof IStoreState];

/**
 * Handles the doables for a given state. Doables are `errable`, `loadable`, `successible` and `booleanable`
 * @param state the state
 * @param action the action dispatched
 */
export const reducerPayloadDoableHelper = (
  state: StateComputedTypes,
  payload: StateComputedTypes
): StateComputedTypes => {
  const { errable = {}, successible = {}, booleanable = {} } = payload || {};
  const {
    errable: currentErrable = {},
    successible: currentSuccessibleble = {},
    booleanable: currentBooleanable = {},
  } = state;

  return {
    ...payload,
    errable: { ...currentErrable, ...errable },
    successible: { ...currentSuccessibleble, ...successible },
    booleanable: { ...currentBooleanable, ...booleanable },
  } as (typeof state);
};

const rootReducer: Reducer<IStoreState, AnyAction> = combineReducers<IStoreState>({
  posts,
  /* new-tranformed-reducer-export-goes-here */
});

export default rootReducer;
