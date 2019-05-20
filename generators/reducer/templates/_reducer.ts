import {handleActions} from 'redux-actions';

import {DEFAULT_ACTION} from './constants';

import { <%= stateName %> } from './state';

const initialState: <%= stateName %> = {
  isLoading: false,
};

export default handleActions<<%= stateName %>>(
  {
    [DEFAULT_ACTION]: (state: <%= stateName %>, action: ReduxActions.Action<<%= stateName %>>) => ({
      ...state,
      ...action.payload,
    }),
  },
  initialState,
);
