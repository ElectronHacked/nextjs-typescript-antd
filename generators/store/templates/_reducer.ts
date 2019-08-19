import { 
  DEFAULT_ACTION,
  RESET_<%= STATE_NAME %>_DOABLES,
  /* new-constant-import-goes-here */
} from './constants';

import { <%= stateName %> } from './state';
import { reducerPayloadDoableHelper } from 'redux-store/rootReducer';

const initialState: <%= stateName %> = {
  errable: {},
  booleanable: {},
  successible: {},
};

export default (
  state: <%= stateName %> = initialState,
  { type, payload: incomingPayload }: ReduxActions.Action<<%= stateName %>>
) => {
  const payload =
    type === RESET_<%= STATE_NAME %>_DOABLES
      ? incomingPayload
      : reducerPayloadDoableHelper(state, incomingPayload);

  switch (type) {
    /* new-constant-cases-go-here */
    case DEFAULT_ACTION:
      return {
        ...state, 
        ...payload,
      }
    default:
      return state;
  }
};

