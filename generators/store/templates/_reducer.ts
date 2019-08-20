import { 
  DEFAULT_ACTION,
  RESET_<%= STATE_NAME %>_DOABLES,
  TOGGLE_<%= STATE_NAME %>_BOOLEANABLE_STATE,
  TOGGLE_<%= STATE_NAME %>_ERRABLE_STATE,
  TOGGLE_<%= STATE_NAME %>_SUCCESSIBLE_STATE,
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
      : (reducerPayloadDoableHelper(state, incomingPayload) as <%= stateName %>);

  switch (type) {
    case TOGGLE_<%= STATE_NAME %>_BOOLEANABLE_STATE:
    case TOGGLE_<%= STATE_NAME %>_ERRABLE_STATE:
    case TOGGLE_<%= STATE_NAME %>_SUCCESSIBLE_STATE:
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

