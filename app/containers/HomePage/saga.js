/**
 * Gets the string array from the server
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_STRINGS } from './constants';
import { stringsLoaded, stringLoadingError } from './actions';

const BASE_URL = 'http://localhost:3000';

async function apiFetchStrings() {
  const res = await axios.get(`${BASE_URL}/api/strings`);
  return res.data;
}

/**
 * worker Saga
 */
export function* getStrings() {
  try {
    // Call the server
    const strings = yield call(apiFetchStrings);
    yield put(stringsLoaded(strings));
  } catch (err) {
    yield put(stringLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* stringData() {
  // Watches for LOAD_STRINGS actions and calls getStrings when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_STRINGS, getStrings);
}
