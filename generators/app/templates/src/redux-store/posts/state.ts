import { IPost, IComment } from 'models';

export interface IPostsState {
  readonly posts: IPost[];
  readonly comments: IComment[];
  readonly isFetchingPosts: boolean;
  readonly selectedPostId: string;
  readonly isFetchingPostComments: boolean;
  readonly fetchDataErrorMessage: string;
}
