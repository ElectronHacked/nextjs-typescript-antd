import * as React from 'react';
import uuid from 'uuid/v4';
import PostItem from '../PostItem';
import { createSelector } from 'reselect';
import { selectAllPosts } from '../../../redux/posts/selectors';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { IPost } from 'models';
import './styles.scss';

interface Props {
  readonly posts: IPost[];
}

const PostList: React.SFC<Props> = ({ posts }) => (
  <React.Fragment>
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

export default compose<Props, Props>(withConnect)(PostList);
