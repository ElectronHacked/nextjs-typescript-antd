import { IPostsState } from './posts/state';
/* new-imported-state-goes-here */

export interface IStoreState {
  readonly posts: IPostsState;
  /* new-imported-state-key-goes-here */
}
