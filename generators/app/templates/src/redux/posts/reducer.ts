import { handleActions } from 'redux-actions';
import { IPostsState } from './state';
import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POST_COMMENTS,
  FETCH_POST_COMMENTS_SUCESS,
  FETCH_POST_COMMENTS_ERROR,
} from './constants';
import {
  FetchPostsSuccessPayload,
  FetchDataErrorPayload,
  FetchPostsPayload,
  FetchPostCommentsSuccessPayload,
} from './payloads';

const initialState: IPostsState = {
  posts: [],
  comments: [],
  isFetchingPosts: false,
  isFetchingPostComments: false,
  fetchDataErrorMessage: '',
  selectedPostId: '',
};

export default handleActions<IPostsState>(
  {
    [FETCH_POSTS]: (state, action: ReduxActions.Action<FetchPostsPayload>) => ({
      ...state,
      ...action.payload,
    }),
    [FETCH_POSTS_SUCCESS]: (
      state,
      action: ReduxActions.Action<FetchPostsSuccessPayload>
    ) => ({ ...state, isFetchingPosts: false, ...action.payload }),
    [FETCH_POSTS_ERROR]: (
      state,
      action: ReduxActions.Action<FetchDataErrorPayload>
    ) => ({ ...state, isFetchingPosts: false, ...action.payload }),
    [FETCH_POST_COMMENTS]: (
      state,
      action: ReduxActions.Action<FetchPostsSuccessPayload>
    ) => ({ ...state, isFetchingPosts: false, ...action.payload }),
    [FETCH_POST_COMMENTS_SUCESS]: (
      state,
      action: ReduxActions.Action<FetchPostCommentsSuccessPayload>
    ) => {
      const comments = action.payload ? action.payload.comments : [];

      return {
        ...state,
        isFetchingPostComments: false,
        comments: [...state.comments, ...comments],
      };
    },
    [FETCH_POST_COMMENTS_ERROR]: (
      state,
      action: ReduxActions.Action<FetchDataErrorPayload>
    ) => ({ ...state, isFetchingPostComments: false, ...action.payload }),
  },
  initialState
);
