import { createAction } from 'redux-actions';
import {
  DEFAULT_ACTION,
  RESET_<%= STATE_NAME %>_DOABLES,
  TOGGLE_<%= STATE_NAME %>_BOOLEANABLE_STATE,
  TOGGLE_<%= STATE_NAME %>_ERRABLE_STATE,
  TOGGLE_<%= STATE_NAME %>_SUCCESSIBLE_STATE,
} from './constants';
import { <%= stateName %> } from './state';

export const defaultAction = createAction<<%= stateName %>>(DEFAULT_ACTION, () => ({
  errable: { initializingError: null },
  booleanable: { isInitializing: true },
  successible: { intiializeSuccess: 'Successfully initialized!' },
}));

//#region Doables
export const reset<%= stateShortName %>Doables = createAction<<%= stateName %>>(RESET_<%= STATE_NAME %>_DOABLES, () => ({
  errable: {},
  booleanable: {},
  successible: {},
}));

export const toggle<%= stateShortName %>BooleanableState = createAction<
  <%= stateName %>,
  { [key in <%= stateShortName %>Booleanable]?: boolean }
>(TOGGLE_<%= STATE_NAME %>_BOOLEANABLE_STATE, key => ({
  booleanable: key,
}));

export const toggle<%= stateShortName %>ErrableState = createAction<<%= stateName %>, { [key in <%= stateShortName %>Errable]?: string }>(
  TOGGLE_<%= STATE_NAME %>_ERRABLE_STATE,
  key => ({
    errable: key,
  })
);

export const toggle<%= stateShortName %>SuccessIbleState = createAction<
  <%= stateName %>,
  { [key in <%= stateShortName %>SuccessIble]?: string }
>(TOGGLE_<%= STATE_NAME %>_SUCCESSIBLE_STATE, key => ({
  successible: key,
}));
//#endregion
