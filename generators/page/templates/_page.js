import * as React from 'react';
import Layout from '@root/components/layout';
import { withI18next } from 'lib/withI18next';

interface Props {
  t: (val: string, val2?: any) => any;
}

export const <%= component %>: React.SFC<Props> = ({ t }) => (
  <Layout title="asfasfa" className="<%= className %>">
    <div className="container pt-4 pb-4">
      <h1 className="title text-center pb-3">{t('<%= i18n %>:title')}</h1>
    </div>
  </Layout>
);

export default withI18next(['common', '<%= i18n %>'])(<%= component %>);
