/*
 *
 * AddString reducer
 *
 */
import produce from 'immer';
import {
  CHANGE_STRING,
  ADD_STRING,
  ADD_STRING_SUCCESS,
  ADD_STRING_ERROR,
  RESET_FORM,
} from './constants';

export const initialState = {
  saveConfirmed: false,
  error: false,
  newString: '',
};

/* eslint-disable default-case, no-param-reassign */
const addStringReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_STRING:
        draft.newString = action.newString;
        break;

      case ADD_STRING:
        draft.saveConfirmed = false;
        draft.error = false;
        break;

      case ADD_STRING_SUCCESS:
        draft.newString = action.newString;
        draft.saveConfirmed = true;
        break;

      case ADD_STRING_ERROR:
        draft.error = action.error;
        draft.saveConfirmed = false;
        break;

      case RESET_FORM:
        draft.saveConfirmed = false;
        draft.error = false;
        draft.newString = '';
        break;
    }
  });

export default addStringReducer;
