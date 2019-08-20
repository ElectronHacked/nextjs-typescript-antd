import { all, select, takeLatest, delay, put } from 'redux-saga/effects';
import {
  DEFAULT_ACTION,
/* new-constant-import-goes-here */
} from './constants';
import {
  toggle<%= stateShortName %>SuccessibleState
  /* new-action-import-goes-here */
} from './actions';
import { select<%= stateShortName %>BooleanableState } from './selectors';

export function* intializeSaga() {
  const booleanable = yield select(select<%= stateShortName %>BooleanableState('__booleanable__'));

  yield put(toggle<%= stateShortName %>SuccessibleState({ __booleanable__: !booleanable }));

  console.log('<%= sagaName %> has been initialized properly __booleanable__:', booleanable );
}

/* new-saga-goes-here */

export default function* <%= sagaName %>() {
  yield all([
    takeLatest(DEFAULT_ACTION, intializeSaga),
    /* new-saga-registration-goes-here */
  ]);
}
