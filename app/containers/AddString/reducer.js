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
} from './constants';

export const initialState = {
  loading: false,
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
        draft.loading = true;
        draft.error = false;
        draft.newString = draft.newString;
        break;

      case ADD_STRING_SUCCESS:
        draft.newString = action.newString;
        draft.loading = false;
        break;

      case ADD_STRING_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default addStringReducer;
