import { all, select, takeLatest } from 'redux-saga/effects';
import { DEFAULT_ACTION } from './constants';
import { select<%= stateShortName %>BooleanableState } from './selectors';

export function* intializeSaga() {
  const isInitializing = yield select(select<%= stateShortName %>BooleanableState('isInitializing'));

  console.log('<%= sagaName %> has been initialized properly isInitializing:', isInitializing);
}

export default function* <%= sagaName %>() {
  yield all([takeLatest(DEFAULT_ACTION, intializeSaga)]);
}
