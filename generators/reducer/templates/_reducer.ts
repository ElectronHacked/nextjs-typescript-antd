import { DEFAULT_ACTION, RESET_<%= STATE_NAME %>_DOABLES } from './constants';

import { <%= stateName %> } from './state';

const initialState: <%= stateName %> = {
  isLoading: false,
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
    case DEFAULT_ACTION:
    /* new-imported-state-goes-here */
    default:
      return state;
  }
};

