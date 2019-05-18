import React, { useEffect } from 'react';
import { Layout, PostList } from 'components';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { IDispatchable } from 'models';
import { fetchPosts } from './../../redux/posts/actions';
import './styles.scss';

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
