import { interval } from 'rxjs/observable/interval';
import { of } from 'rxjs/observable/of';
import { takeUntil, mergeMap, catchError, map } from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';
import ajax from 'universal-rx-request'; // because standard AjaxObservable only works in browser

import * as actions from './actions';

export const fetchUserEpic = (action$, store) =>
  action$.pipe(
    ofType(actions.startFetchingCharacters.getType()),
    mergeMap(action => {
      return interval(3000).pipe(
        mergeMap(x =>
          of(
            actions.fetchCharacters({
              isServer: store.getState().isServer,
            })
          )
        ),
        takeUntil(action$.ofType(actions.stopFetchingCharacters.getType()))
      );
    })
  );

export const fetchCharactersEpic = (action$, store) =>
  action$.pipe(
    ofType(actions.fetchCharacters.getType()),
    mergeMap(action =>
      ajax({
        url: `https://swapi.co/api/people/${store.getState().nextCharacterId}`,
      }).pipe(
        map(response =>
          actions.fetchCharactersSuccess({
            response: response.body,
            isServer: store.getState().isServer,
          })
        ),
        catchError(_error => of(actions.stopFetchingCharacters()))
      )
    )
  );

export const rootEpic = combineEpics(fetchUserEpic, fetchCharactersEpic);
