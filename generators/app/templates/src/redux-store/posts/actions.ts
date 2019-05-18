import { createAction, combineActions } from 'redux-actions';
import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POST_COMMENTS,
  FETCH_POST_COMMENTS_SUCESS,
  FETCH_POST_COMMENTS_ERROR,
} from './constants';
import { IPost, IComment } from 'models';
import { IPostsState } from './state';

export const fetchPosts = createAction<IPostsState>(FETCH_POSTS, () => ({
  isFetchingPosts: true,
}));

export const fetchPostsSuccess = createAction<IPostsState, IPost[]>(FETCH_POSTS_SUCCESS, posts => ({ posts }));

export const fetchPostsError = createAction<IPostsState, string>(FETCH_POSTS_ERROR, fetchDataErrorMessage => ({
  fetchDataErrorMessage,
}));

export const fetchPostComments = createAction<IPostsState, string>(FETCH_POST_COMMENTS, selectedPostId => ({
  selectedPostId,
}));

export const fetchPostCommentsSuccess = createAction<IPostsState, IComment[]>(FETCH_POST_COMMENTS_SUCESS, comments => ({
  comments,
}));

export const fetchPostCommentsError = createAction<IPostsState, string>(
  FETCH_POST_COMMENTS_ERROR,
  fetchDataErrorMessage => ({
    fetchDataErrorMessage,
  })
);

export const errorActions = combineActions(FETCH_POSTS_ERROR, FETCH_POST_COMMENTS_ERROR);
