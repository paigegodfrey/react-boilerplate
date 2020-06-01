/**
 * Test sagas
 */

import { put, takeLatest } from 'redux-saga/effects';
import { ADD_STRING } from '../constants';
import { stringAdded, stringAddingError } from '../actions';
import stringData, { postString } from '../saga';

const newString = 'test string';

describe('addStringSaga Saga', () => {
  let addStringGenerator;

  beforeEach(() => {
    addStringGenerator = postString();

    const selectDescriptor = addStringGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = addStringGenerator.next(newString).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the stringAdded action if it requests the data successfully', () => {
    const response = newString;
    const putDescriptor = addStringGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(stringAdded(response, newString)));
  });

  it('should call the stringAddingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = addStringGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(stringAddingError(response)));
  });
});

describe('stringDataSaga Saga', () => {
  const stringDataSaga = stringData();

  it('should start task to watch for ADD_STRING action', () => {
    const takeLatestDescriptor = stringDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(ADD_STRING, postString));
  });
});
