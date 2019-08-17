import { createSelector } from 'reselect';
import { IStoreState } from '../storeState';

export const <%= stateName %> = () => (state: IStoreState) => state.<%= nameWithLowerCase %>;

export const selectIsLoading = () =>
  createSelector(
    <%= stateName %>(),
    state => state.isLoading,
  );

//#region Doables
export const select<%= stateShortName %>BooleanableState = (key: <%= stateShortName %>Booleanable | <%= stateShortName %>Booleanable[]) =>
createSelector(
  <%= stateName %>(),
  ({ booleanable }) => (Array.isArray(key) ? !!key.filter(k => booleanable[k]).length : booleanable[key])
);

export const select<%= stateShortName %>ErrableState = (key: <%= stateShortName %>Errable | <%= stateShortName %>Errable[]) =>
createSelector(
  <%= stateName %>(),
  ({ errable }) => (Array.isArray(key) ? !!key.filter(k => errable[k]).length : errable[key])
);

export const select<%= stateShortName %>SuccessIbleState = (key: <%= stateShortName %>SuccessIble | <%= stateShortName %>SuccessIble[]) =>
createSelector(
  <%= stateName %>(),
  ({ successible }) => (Array.isArray(key) ? !!key.filter(k => successible[k]).length : successible[key])
);
//#endregion