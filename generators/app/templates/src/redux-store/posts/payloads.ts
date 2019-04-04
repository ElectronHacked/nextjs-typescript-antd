import { IPost, IComment } from 'models';

export interface IChangeTextPayload {
  readonly text: string;
}

export interface IFetchPostsPayload {
  readonly isFetchingPosts: boolean;
}

export interface IFetchPostsSuccessPayload {
  readonly posts: IPost[];
}

export interface IFetchPostCommentsPayload {
  readonly selectedPostId: string;
}

export interface IFetchPostCommentsSuccessPayload {
  readonly comments: IComment[];
}

export interface IFetchDataErrorPayload {
  readonly fetchDataErrorMessage: string;
}
