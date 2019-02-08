import * as React from 'react';
import { func } from 'prop-types';
import { withI18next } from 'lib/withI18next';

interface Props {
  t: (val: string, val2?: any) => any;
}

export const <%= component %>: React.SFC<Props>  = ({ t }) => (
  <div className="<%= className %>">
    { /* Here it goes the new component */ }
  </div>
);

export default withI18next(['common', '<%= i18n %>'])(<%= component %>);
