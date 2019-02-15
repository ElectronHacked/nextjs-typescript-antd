import {createSelector} from 'reselect';
import {IStoreState} from '../storeState';

export const <%= stateName %> = () => (state: IStoreState) => state.<%= nameWithLowerCase %>;

export const selectIsLoading = () =>
  createSelector(
    <%= stateName %>(),
    state => state.isLoading,
  );
