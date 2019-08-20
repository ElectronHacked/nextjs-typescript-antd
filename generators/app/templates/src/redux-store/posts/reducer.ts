import { IPostsState } from './state';
import {
  RESET_POSTS_DOABLES,
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POST_COMMENTS,
  FETCH_POST_COMMENTS_SUCESS,
  FETCH_POST_COMMENTS_ERROR,
  TOGGLE_POSTS_BOOLEANABLE_STATE,
  TOGGLE_POSTS_ERRABLE_STATE,
  TOGGLE_POSTS_SUCCESSIBLE_STATE,
} from './constants';
import { reducerPayloadDoableHelper } from 'redux-store/rootReducer';

const initialState: IPostsState = {
  posts: [],
  comments: [],
  errable: {},
  booleanable: {},
  successible: {},
  selectedPostId: '',
};

export default (
  state: IPostsState = initialState,
  { type, payload: incomingPayload }: ReduxActions.Action<IPostsState>
) => {
  const payload =
    type === RESET_POSTS_DOABLES
      ? incomingPayload
      : (reducerPayloadDoableHelper(state, incomingPayload) as IPostsState);

  switch (type) {
    case FETCH_POSTS:
    case FETCH_POSTS_SUCCESS:
    case FETCH_POSTS_ERROR:
    case FETCH_POST_COMMENTS:
    case FETCH_POST_COMMENTS_ERROR:
    case TOGGLE_POSTS_BOOLEANABLE_STATE:
    case TOGGLE_POSTS_ERRABLE_STATE:
    case TOGGLE_POSTS_SUCCESSIBLE_STATE:
      return {
        ...state,
        ...payload,
      };
    case FETCH_POST_COMMENTS_SUCESS: {
      const comments = payload ? payload.comments : [];

      return {
        ...state,
        isFetchingPostComments: false,
        comments: [...state.comments, ...comments],
      };
    }
    default:
      return state;
  }
};
