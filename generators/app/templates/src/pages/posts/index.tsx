import React, { useEffect } from 'react';
import Layout from 'components/global/layout';
import PostList from 'components/global/postList';
import './styles.scss';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { IDispatchable } from 'models';
import { fetchPosts } from './../../redux/posts/actions';

export const Posts: React.SFC<IDispatchable> = ({ dispatch }) => {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    dispatch(fetchPosts());
  });

  return (
    <Layout title="List of Posts" description="This is the List of Posts Page">
      <PostList posts={[]} />
    </Layout>
  );
};

export default compose(connect())(Posts);
