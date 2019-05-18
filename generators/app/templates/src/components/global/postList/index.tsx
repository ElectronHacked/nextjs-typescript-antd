import React from 'react';
import uuid from 'uuid/v4';
import PostItem from '../postItem';
import { createSelector } from 'reselect';
import { selectAllPosts } from 'redux-store/posts/selectors';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { IPost } from 'models';
import './styles.scss';

interface IProps {
  readonly posts: IPost[];
}

const PostList: React.SFC<IProps> = ({ posts }) => (
  <React.Fragment>
    <h1>Posts</h1>
    {posts.map(post => (
      <PostItem post={post} key={uuid()} />
    ))}
  </React.Fragment>
);

const mapStateToProps = createSelector(
  selectAllPosts(),
  posts => ({ posts })
);

const withConnect = connect(mapStateToProps);

export default compose<IProps, IProps>(withConnect)(PostList);
