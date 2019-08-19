import { createAction, combineActions } from 'redux-actions';
import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POST_COMMENTS,
  FETCH_POST_COMMENTS_SUCESS,
  FETCH_POST_COMMENTS_ERROR,
  TOGGLE_POSTS_BOOLEANABLE_STATE,
  TOGGLE_POSTS_ERRABLE_STATE,
  TOGGLE_POSTS_SUCCESSIBLE_STATE,
  RESET_POSTS_DOABLES,
} from './constants';
import { IPost, IComment } from 'models';
import { IPostsState, PostsBooleanable, PostsErrable, PostsSuccessible } from './state';

export const fetchPosts = createAction<IPostsState>(FETCH_POSTS, () => ({
  booleanable: { isFetchingPosts: true },
  errable: { fetchPostsErrorMsg: null },
  successible: { fetchPostsSuccessMsg: null }, // Not always necessary. Just for demonstration on how to use it
}));

export const fetchPostsSuccess = createAction<IPostsState, IPost[]>(FETCH_POSTS_SUCCESS, posts => ({
  posts,
  successible: { fetchPostsSuccessMsg: 'Yay, We got the posts back!' },
  booleanable: { isFetchingPosts: false },
}));

export const fetchPostsError = createAction<IPostsState, string>(FETCH_POSTS_ERROR, fetchPostsErrorMsg => ({
  errable: { fetchPostsErrorMsg },
  booleanable: { isFetchingPosts: false },
}));

export const fetchPostComments = createAction<IPostsState, string>(FETCH_POST_COMMENTS, selectedPostId => ({
  selectedPostId,
  booleanable: { isFetchingPostComments: true },
  errable: { fetchPostCommentsErrorMsg: null },
  successible: { fetchPostCommentsSuccessMsg: null }, // Not always necessary. Just for demonstration on how to use it
}));

export const fetchPostCommentsSuccess = createAction<IPostsState, IComment[]>(FETCH_POST_COMMENTS_SUCESS, comments => ({
  comments,
  booleanable: { isFetchingPostComments: false },
  successible: { fetchPostCommentsSuccessMsg: 'Yay! We got the post comments back.' }, // Not always necessary. Just for demonstration on how to use it
}));

export const fetchPostCommentsError = createAction<IPostsState, string>(
  FETCH_POST_COMMENTS_ERROR,
  fetchPostCommentsErrorMsg => ({
    errable: { fetchPostCommentsErrorMsg },
    booleanable: { isFetchingPostComments: false },
  })
);

//#region  Doables
export const togglePostsBooleanableState = createAction<IPostsState, { [key in PostsBooleanable]?: boolean }>(
  TOGGLE_POSTS_BOOLEANABLE_STATE,
  key => ({
    booleanable: key,
  })
);

export const togglePostsErrableState = createAction<IPostsState, { [key in PostsErrable]?: string }>(
  TOGGLE_POSTS_ERRABLE_STATE,
  key => ({
    errable: key,
  })
);

export const togglePostsSuccessibleState = createAction<IPostsState, { [key in PostsSuccessible]?: string }>(
  TOGGLE_POSTS_SUCCESSIBLE_STATE,
  key => ({
    successible: key,
  })
);

export const resetPostsDoables = createAction<IPostsState>(RESET_POSTS_DOABLES, () => ({
  errable: {},
  booleanable: {},
  successible: {},
}));
//#endregion
