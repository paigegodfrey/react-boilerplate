import produce from 'immer';
import addStringReducer from '../reducer';
import {
  changeString,
  addString,
  stringAdded,
  stringAddingError,
  resetForm,
} from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('addStringReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      saveConfirmed: false,
      error: false,
      newString: '',
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(addStringReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeString action correctly', () => {
    const newString = 'test';
    const expectedResult = produce(state, draft => {
      draft.newString = newString;
    });
    expect(addStringReducer(state, changeString(newString))).toEqual(
      expectedResult,
    );
  });

  it('should handle the addString action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.saveConfirmed = false;
      draft.error = false;
    });
    expect(addStringReducer(state, addString())).toEqual(expectedResult);
  });

  it('should handle the stringAdded action correctly', () => {
    const newString = 'test';
    const expectedResult = produce(state, draft => {
      draft.newString = newString;
      draft.saveConfirmed = true;
    });
    expect(addStringReducer(state, stringAdded(newString))).toEqual(
      expectedResult,
    );
  });

  it('should handle the stringAddingError action correctly', () => {
    const error = { message: 'bad request' };
    const expectedResult = produce(state, draft => {
      draft.error = error;
      draft.saveConfirmed = false;
    });
    expect(addStringReducer(state, stringAddingError(error))).toEqual(
      expectedResult,
    );
  });

  it('should handle the resetForm action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.saveConfirmed = false;
      draft.error = false;
      draft.newString = '';
    });
    expect(addStringReducer(state, resetForm())).toEqual(expectedResult);
  });
});
