import React, { useEffect } from 'react';
import { compose } from 'recompose';
import { withRouter, SingletonRouter } from 'next/router';
import { connect } from 'react-redux';
import { IDispatchable, IPost } from 'models';
import Layout from 'components/global/layout';
import PostItem from 'components/global/postItem';
import CommentList from 'components/global/commentList';
import './styles.scss';
import { fetchPostComments } from './../../redux/posts/actions';
import { createSelector } from 'reselect';
import { selectSelectedPost } from './../../redux/posts/selectors';
import { getQueryStringValue } from './../../utils';

interface Props extends SingletonRouter, IDispatchable {
  readonly post: IPost;
}

export const Post: React.SFC<Props> = ({ router, dispatch, post }) => {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const key = 'id';
    let postId: string | string[] | null;
    try {
      postId = router.query[key];
    } catch (error) {
      postId = getQueryStringValue(key, window.document.location.search);
    }

    if (postId && !Array.isArray(postId)) {
      dispatch(fetchPostComments(postId));
    }
  });

  return (
    <Layout title="Post Details" description="This is the Post Details Page">
      <h2>Post Details</h2>
      <PostItem post={post} hasViewCommentsLink={false} />
      <CommentList comments={[]} />
    </Layout>
  );
};

const mapStateToProps = createSelector(
  selectSelectedPost(),
  post => ({ post })
);

export default compose(
  connect(mapStateToProps),
  withRouter
)(Post);
