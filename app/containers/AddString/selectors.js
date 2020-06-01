/**
 * AddString state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAddString = state => state.addString || initialState;

const makeSelectAddStringLoading = () =>
  createSelector(
    selectAddString,
    substate => substate.loading,
  );

const makeSelectAddStringError = () =>
  createSelector(
    selectAddString,
    substate => substate.error,
  );

const makeSelectAddString = () =>
  createSelector(
    selectAddString,
    substate => substate.newString,
  );

export {
  selectAddString,
  makeSelectAddStringLoading,
  makeSelectAddStringError,
  makeSelectAddString,
};
