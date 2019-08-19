import { IPost, IComment } from 'models';

export type PostsErrable = 'fetchPostsErrorMsg' | 'fetchPostCommentsErrorMsg';

export type PostsBooleanable = 'isFetchingPosts' | 'isFetchingPostComments';

export type PostsSuccessible = 'fetchPostsSuccessMsg' | 'fetchPostCommentsSuccessMsg';

export interface IPostsState {
  readonly posts?: IPost[];
  readonly comments?: IComment[];
  readonly selectedPostId?: string;
  readonly text?: string;

  //#region Doables
  readonly errable?: { [key in PostsErrable]?: string };
  readonly booleanable?: { [key in PostsBooleanable]?: boolean };
  readonly successible?: { [key in PostsSuccessible]?: string };
  //#endregion
}
