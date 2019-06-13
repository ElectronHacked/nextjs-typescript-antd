import React, { useEffect, FC } from 'react';
import { Layout, PostList } from 'components';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { IDispatchable } from 'models';
import { fetchPosts } from 'redux-store/posts/actions';
import './styles.scss';

export const Posts: FC<IDispatchable> = ({ dispatch }) => {
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

export default compose<IDispatchable, IDispatchable>(connect())(Posts);
