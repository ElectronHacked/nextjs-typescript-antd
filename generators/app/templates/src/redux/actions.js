import { createAction } from 'redux-act';

export const startFetchingCharacters = createAction(
  'Start fetching characters'
);

export const stopFetchingCharacters = createAction('Stop fetching characters');

export const fetchCharacters = createAction('Fetch characters');

export const fetchCharactersSuccess = createAction('Characters fetched');
