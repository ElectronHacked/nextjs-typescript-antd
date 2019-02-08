import {all, select, takeLatest} from 'redux-saga/effects';
import {DEFAULT_ACTION} from './constants';
import {selectIsLoading} from './selectors';

export function* intializeSaga() {
  const isloading = yield select(selectIsLoading());

  console.log('<%= sagaName %> has been initialized properly isloading:', isloading);
}

export default function* <%= sagaName %>() {
  yield all([takeLatest(DEFAULT_ACTION, intializeSaga)]);
}
