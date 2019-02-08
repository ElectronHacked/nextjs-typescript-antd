import {createSelector} from 'reselect';
import {StoreState} from '../storeState';

export const <%= stateName %> = () => (state: StoreState) => state.<%= stateName %>;

export const selectIsLoading = () =>
  createSelector(
    <%= stateName %>(),
    state => state.isLoading,
  );
