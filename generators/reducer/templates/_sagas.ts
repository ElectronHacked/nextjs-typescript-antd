import { all, select, takeLatest, delay } from 'redux-saga/effects';
import {
  DEFAULT_ACTION,
/* new-constant-import-goes-here */
} from './constants';
import {
  /* new-action-import-goes-here */
} from './actions';
import { select<%= stateShortName %>BooleanableState } from './selectors';

export function* intializeSaga() {
  const isInitializing = yield select(select<%= stateShortName %>BooleanableState('isInitializing'));

  console.log('<%= sagaName %> has been initialized properly isInitializing:', isInitializing);
}

/* new-saga-goes-here */

export default function* <%= sagaName %>() {
  yield all([
    takeLatest(DEFAULT_ACTION, intializeSaga),
    /* new-saga-registration-goes-here */
  ]);
}
