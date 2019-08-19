import { createSelector } from 'reselect';
import { IStoreState } from '../storeState';
import { PostsErrable, PostsSuccessible, PostsBooleanable } from './state';

export const postState = () => (state: IStoreState) => state.posts;

export const selectAllPosts = () =>
  createSelector(
    postState(),
    state => state.posts
  );

export const selectSelectedPostComments = () =>
  createSelector(
    postState(),
    state => {
      const selectedPostId = state.selectedPostId;
      const allComments = state.comments;

      if (selectedPostId) {
        const foundComments = allComments.filter(({ postId }) => postId === selectedPostId);

        return foundComments ? foundComments : [];
      }

      return [];
    }
  );

export const selectSelectedPostId = () =>
  createSelector(
    postState(),
    state => state.selectedPostId
  );

export const selectSelectedPost = () =>
  createSelector(
    postState(),
    state => {
      const selectedPostId = state.selectedPostId;

      if (selectedPostId) {
        const foundPost = state.posts.find(({ id }) => id === selectedPostId);

        return foundPost ? foundPost : null;
      }

      return null;
    }
  );

//#region Doables
/**
 * Returns true if the evaluation of a booleanable state of a given key(s) is true
 * @param key the key to compare to
 */
export const selectPostsBooleanState = (key: PostsBooleanable | PostsBooleanable[]) =>
  createSelector(
    postState(),
    ({ booleanable }) => (Array.isArray(key) ? !!key.filter(k => booleanable[k]).length : booleanable[key])
  );

/**
 * Returns the errable state of a given key(s) is true
 * @param key the key to compare to
 */
export const selectPostsErrableState = (key: PostsErrable | PostsErrable[]) =>
  createSelector(
    postState(),
    ({ errable }) => (Array.isArray(key) ? !!key.filter(k => errable[k]).length : errable[key])
  );

/**
 * Returns the successible state of a given key(s) is true
 * @param key the key to compare to
 */
export const selectPostsSuccessiblebleState = (key: PostsSuccessible | PostsSuccessible[]) =>
  createSelector(
    postState(),
    ({ successible }) => (Array.isArray(key) ? !!key.filter(k => successible[k]).length : successible[key])
  );
//#endregion
