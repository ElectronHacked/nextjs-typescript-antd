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

const initialState: IPostsState = {
  posts: [],
  comments: [],
  isFetchingPosts: false,
  isFetchingPostComments: false,
  fetchDataErrorMessage: '',
  selectedPostId: '',
};

type PostAction = ReduxActions.Action<IFetchPostsPayload>;

export default handleActions<IPostsState>(
  {
    [FETCH_POSTS]: (state, action: PostAction) => ({
      ...state,
      ...action.payload,
    }),
    [FETCH_POSTS_SUCCESS]: (state, action: PostAction) => ({
      ...state,
      isFetchingPosts: false,
      ...action.payload,
    }),
    [FETCH_POSTS_ERROR]: (state, action: PostAction) => ({
      ...state,
      isFetchingPosts: false,
      ...action.payload,
    }),
    [FETCH_POST_COMMENTS]: (state, action: PostAction) => ({
      ...state,
      isFetchingPosts: false,
      ...action.payload,
    }),
    [FETCH_POST_COMMENTS_SUCESS]: (state, action: PostAction) => {
      const comments = action.payload ? action.payload.comments : [];

      return {
        ...state,
        isFetchingPostComments: false,
        comments: [...state.comments, ...comments],
      };
    },
    [FETCH_POST_COMMENTS_ERROR]: (state, action: PostAction) => ({
      ...state,
      isFetchingPostComments: false,
      ...action.payload,
    }),
  },
  initialState
);
