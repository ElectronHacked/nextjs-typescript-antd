import { createReducer } from 'redux-act';
import * as actions from './actions';

export default createReducer(
  {
    [actions.fetchCharactersSuccess]: (state, payload) => ({
      ...state,
      characters: [...state.characters, payload.response],
      isFetchedOnServer: payload.isServer,
      nextCharacterId: state.nextCharacterId + 1,
    }),
  },
  {
    nextCharacterId: 1,
    characters: [],
    isFetchedOnServer: false,
  }
);
