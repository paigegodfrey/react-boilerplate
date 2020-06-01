import {
  CHANGE_STRING,
  ADD_STRING,
  ADD_STRING_SUCCESS,
  ADD_STRING_ERROR,
  RESET_FORM,
} from 'containers/AddString/constants';

import {
  changeString,
  addString,
  stringAdded,
  stringAddingError,
  resetForm,
} from 'containers/AddString/actions';

describe('AddString actions', () => {
  describe('changeString', () => {
    it('should return the correct type and passed string', () => {
      const newString = 'sample string';
      const expectedResult = {
        type: CHANGE_STRING,
        newString,
      };
      expect(changeString(newString)).toEqual(expectedResult);
    });
  });

  describe('addString', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: ADD_STRING,
      };
      expect(addString()).toEqual(expectedResult);
    });
  });

  describe('stringAdded', () => {
    it('should return the correct type and passed string', () => {
      const newString = 'sample string';
      const expectedResult = {
        type: ADD_STRING_SUCCESS,
        newString,
      };
      expect(stringAdded(newString)).toEqual(expectedResult);
    });
  });

  describe('stringAddingError', () => {
    it('should return the correct type and passed error', () => {
      const error = { message: 'bad request' };
      const expectedResult = {
        type: ADD_STRING_ERROR,
        error,
      };
      expect(stringAddingError(error)).toEqual(expectedResult);
    });
  });

  describe('resetForm', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: RESET_FORM,
      };
      expect(resetForm()).toEqual(expectedResult);
    });
  });
});
