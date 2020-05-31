/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const selectRouter = state => state.router;

const makeSelectLoading = () =>
  createSelector(
    selectHome,
    homeState => homeState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectHome,
    homeState => homeState.error,
  );

const makeSelectStrings = () =>
  createSelector(
    selectHome,
    homeState => homeState.strings,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  selectHome,
  makeSelectLoading,
  makeSelectError,
  makeSelectStrings,
  makeSelectLocation,
};
