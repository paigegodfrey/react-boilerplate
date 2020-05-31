/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_STRINGS } from 'containers/App/constants';
import { stringsLoaded, stringLoadingError } from 'containers/App/actions';

import axios from 'axios';

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
