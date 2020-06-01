/**
 * Adds a new string to the server
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { ADD_STRING } from './constants';
import { stringAdded, stringAddingError } from './actions';
import { makeSelectAddString } from './selectors';

const BASE_URL = 'http://localhost:3000';

/**
 * worker Saga
 */
export function* postString() {
  const newString = yield select(makeSelectAddString());
  try {
    // Call the server
    const string = yield call(() =>
      axios.post(`${BASE_URL}/api/strings`, { newString }),
    );
    yield put(stringAdded(string));
  } catch (err) {
    yield put(stringAddingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* stringData() {
  // Watches for ADD_STRING actions and calls postString when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  yield takeLatest(ADD_STRING, postString);
}
