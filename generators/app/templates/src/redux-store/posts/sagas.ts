import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { FETCH_POSTS, FETCH_POST_COMMENTS } from './constants';
import {
  fetchPostsSuccess,
  fetchPostsError,
  fetchPostCommentsSuccess,
  fetchPostCommentsError,
} from './actions';
import { fetchAllPostsApi, fetchPostCommentsApi } from '../../api/postsApi';
import { selectSelectedPostId } from './selectors';

function* fetchPostsSaga() {
  const response = yield call(fetchAllPostsApi);

  try {
    const { status, data } = response;

    if (status === 200) {
      yield put(fetchPostsSuccess(data));
    } else {
      yield put(fetchPostsError('Sorry! An error occured!'));
    }
  } catch (error) {
    yield put(fetchPostsError('Sorry! An error occured!'));
  }
}

function* fetchPostCommentsSaga() {
  const selectedPostId = yield select(selectSelectedPostId());
  const response = yield call(fetchPostCommentsApi, selectedPostId);

  try {
    const { status, data } = response;

    if (status === 200) {
      yield put(fetchPostCommentsSuccess(data));
    } else {
      yield put(fetchPostCommentsError('Sorry! An error occured!'));
    }
  } catch (error) {
    yield put(fetchPostCommentsError('Sorry! An error occured!'));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(FETCH_POSTS, fetchPostsSaga),
    takeLatest(FETCH_POST_COMMENTS, fetchPostCommentsSaga),
  ]);
}
