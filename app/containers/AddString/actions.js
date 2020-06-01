/*
 *
 * AddString actions
 *
 */

import { ADD_STRING, ADD_STRING_SUCCESS, ADD_STRING_ERROR } from './constants';

/**
 * Add new string, this action starts the request saga
 *
 * @return {object} An action object with a type of ADD_STRING
 */
export function addString() {
  return {
    type: ADD_STRING,
  };
}

/**
 * Dispatched when the new string is added by the request saga
 *
 * @param  {string} newString The new string
 *
 * @return {object}      An action object with a type of ADD_STRING_SUCCESS passing the string
 */
export function stringAdded(newString) {
  return {
    type: ADD_STRING_SUCCESS,
    newString,
  };
}

/**
 * Dispatched when loading the strings fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of ADD_STRING_ERROR passing the error
 */
export function stringAddingError(error) {
  return {
    type: ADD_STRING_ERROR,
    error,
  };
}
