/**
 * AddString state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAddString = state => state.addString || initialState;

const makeSelectAddStringSaved = () =>
  createSelector(
    selectAddString,
    substate => substate.saveConfirmed,
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
  makeSelectAddStringSaved,
  makeSelectAddStringError,
  makeSelectAddString,
};
