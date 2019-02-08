import {handleActions} from 'redux-actions';

import { ILoadingPayload } from './payloads';

import {DEFAULT_ACTION} from './constants';

import {IMyInvoicesState} from './state';


const initialState: <%= state %> = {
  isLoading: false,
};

const myInvoicesReducer = handleActions<<%= state %>>(
  {
    [FETCH_MY_INVOICES]: (state: <%= state %>, action: ReduxActions.Action<ILoadingPayload>) => ({
      ...state,
      ...action.payload,
    }),
  },
  initialState,
);

export default myInvoicesReducer;
