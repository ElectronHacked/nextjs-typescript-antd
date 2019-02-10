import { createAction, combineActions } from 'redux-actions';
import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POST_COMMENTS,
  FETCH_POST_COMMENTS_SUCESS,
  FETCH_POST_COMMENTS_ERROR,
} from './constants';
import {
  FetchDataErrorPayload,
  FetchPostCommentsSuccessPayload,
  FetchPostCommentsPayload,
  FetchPostsSuccessPayload,
  FetchPostsPayload,
} from './payloads';
import { IPost, IComment } from 'models';

export const fetchPosts = createAction<FetchPostsPayload>(FETCH_POSTS, () => ({
  isFetchingPosts: true,
}));

export const fetchPostsSuccess = createAction<
  FetchPostsSuccessPayload,
  IPost[]
>(FETCH_POSTS_SUCCESS, posts => ({ posts }));

export const fetchPostsError = createAction<FetchDataErrorPayload, string>(
  FETCH_POSTS_ERROR,
  fetchDataErrorMessage => ({ fetchDataErrorMessage })
);

export const fetchPostComments = createAction<FetchPostCommentsPayload, string>(
  FETCH_POST_COMMENTS,
  selectedPostId => ({ selectedPostId })
);

export const fetchPostCommentsSuccess = createAction<
  FetchPostCommentsSuccessPayload,
  Comment[]
>(FETCH_POST_COMMENTS_SUCESS, comments => ({ comments }));

export const fetchPostCommentsError = createAction<
  FetchDataErrorPayload,
  string
>(FETCH_POST_COMMENTS_ERROR, fetchDataErrorMessage => ({
  fetchDataErrorMessage,
}));

export const errorActions = combineActions(
  FETCH_POSTS_ERROR,
  FETCH_POST_COMMENTS_ERROR
);
