import { createSelector } from 'reselect';
import { IStoreState } from '../storeState';
import {
  <%= stateShortName %>Errable,
  <%= stateShortName %>Booleanable,
  <%= stateShortName %>Successible,
} from './state';

export const <%= stateName %> = () => (state: IStoreState) => state.<%= nameWithLowerCase %>;

export const selectIsLoading = () =>
  createSelector(
    <%= stateName %>(),
    state => state.isLoading,
  );

//#region Doables
/**
 * Returns true if the evaluation of a booleanable state of a given key(s) is true
 * @param key the key to compare to
 */
export const select<%= stateShortName %>BooleanableState = (key: <%= stateShortName %>Booleanable | <%= stateShortName %>Booleanable[]) =>
createSelector(
  <%= stateName %>(),
  ({ booleanable }) => (Array.isArray(key) ? !!key.filter(k => booleanable[k]).length : booleanable[key])
);

/**
 * Returns the errable state of a given key(s) is true
 * @param key the key to compare to
 */
export const select<%= stateShortName %>ErrableState = (key: <%= stateShortName %>Errable | <%= stateShortName %>Errable[]) =>
createSelector(
  <%= stateName %>(),
  ({ errable }) => (Array.isArray(key) ? !!key.filter(k => errable[k]).length : errable[key])
);

/**
 * Returns the successible state of a given key(s) is true
 * @param key the key to compare to
 */
export const select<%= stateShortName %>SuccessibleState = (key: <%= stateShortName %>Successible | <%= stateShortName %>Successible[]) =>
createSelector(
  <%= stateName %>(),
  ({ successible }) => (Array.isArray(key) ? !!key.filter(k => successible[k]).length : successible[key])
);
//#endregion