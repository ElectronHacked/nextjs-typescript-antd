import {createAction} from 'redux-actions';

import {DEFAULT_ACTION} from './constants';
import {<%= stateName %>} from './state';

export const defaultAction = createAction<<%= stateName %>>(DEFAULT_ACTION);
