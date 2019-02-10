import { IPost, IComment } from 'models';

export interface ChangeTextPayload {
  text: string;
}

export interface FetchPostsPayload {
  isFetchingPosts: boolean;
}

export interface FetchPostsSuccessPayload {
  posts: IPost[];
}

export interface FetchPostCommentsPayload {
  selectedPostId: string;
}

export interface FetchPostCommentsSuccessPayload {
  comments: IComment[];
}

export interface FetchDataErrorPayload {
  fetchDataErrorMessage: string;
}
