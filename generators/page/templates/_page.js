import React, {FC} from 'react';
import Layout from 'components/global/layout';
import './styles.scss';

interface IProps {};

export const <%= component %>: FC<IProps> = () => (
  <Layout title="<%= title %>" description="This is the <%= title %> Page">
    <div className="<%= className %>">
      <p>
        This is the <strong><%= title %></strong> page
      </p>
    </div>
  </Layout>
);

export default <%= component %>;
