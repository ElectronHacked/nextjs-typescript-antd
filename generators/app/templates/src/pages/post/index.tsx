import React, { useEffect, FC } from 'react';
import { compose } from 'recompose';
import { withRouter, SingletonRouter } from 'next/router';
import { connect } from 'react-redux';
import { IDispatchable, IPost } from 'models';
import { Layout, PostItem, CommentList } from 'components';
import { fetchPostComments } from 'redux-store/posts/actions';
import { createSelector } from 'reselect';
import { selectSelectedPost } from 'redux-store/posts/selectors';
import { getParameterByName } from './../../utils';
import './styles.scss';

interface IProps extends SingletonRouter, IDispatchable {
  readonly post: IPost;
}

export const Post: FC<IProps> = ({ router, dispatch, post }) => {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const key = 'id';
    let postId: string | string[] | null;
    try {
      postId = router.query[key];
    } catch (error) {
      postId = getParameterByName(key, window.location.href);
    }

    if (postId && !Array.isArray(postId)) {
      dispatch(fetchPostComments(postId));
    }
  });

  return (
    <Layout title="Post Details" description="This is the Post Details Page">
      <h2>Post Details</h2>
      {post && <PostItem post={post} hasViewCommentsLink={false} />}
      <CommentList comments={[]} />
    </Layout>
  );
};

const mapStateToProps = createSelector(
  selectSelectedPost(),
  post => ({ post })
);

export default compose<IProps, IProps>(
  connect(mapStateToProps),
  withRouter
)(Post);
