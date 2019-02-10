import * as React from 'react';
import Layout from 'components/layout';
import './styles.scss';

export const <%= component %> = () => (
  <Layout title="<%= title %>" description="This is the <%= title %> Page">
    <div className="<%= className %>">
      <p>
        This is the <strong><%= title %></strong> page
      </p>
    </div>
  </Layout>
);

export default <%= component %>;
