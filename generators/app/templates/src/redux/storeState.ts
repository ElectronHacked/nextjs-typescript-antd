import { IPostState } from './posts/state';
/* new-imported-state-goes-here */

export interface IStoreState {
  readonly posts: IPostState;
  /* new-imported-state-key-goes-here */
}
