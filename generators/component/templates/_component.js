import * as React from 'react';
import { func } from 'prop-types';
import { withI18next } from 'lib/withI18next';
import './styles.scss'

export const <%= component %>  = () => (
  <div className="<%= className %>">
    { /* Here it goes the new component */ }
  </div>
);

export default <%= component %>;
