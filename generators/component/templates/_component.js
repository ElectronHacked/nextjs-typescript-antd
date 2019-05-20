import React, {FC} from 'react';
import './styles.scss';

interface IProps {};

export const <%= component %>: FC<IProps> = () => (
  <div className="<%= className %>">
    <%= component %> component
  </div>
);

export default <%= component %>;
