import { createSelector } from 'reselect';
import { IStoreState } from '../storeState';

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
        let foundComments = allComments.filter(
          ({ postId }) => postId == selectedPostId
        );

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
        let foundPost = state.posts.find(({ id }) => id == selectedPostId);

        return foundPost ? foundPost : null;
      }

      return null;
    }
  );

export const selectIsFetchingComments = () =>
  createSelector(
    postState(),
    state => state.isFetchingPostComments
  );

export const selectIsFetchingPosts = () =>
  createSelector(
    postState(),
    state => state.isFetchingPosts
  );
