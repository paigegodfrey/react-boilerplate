/*
 *
 * AddString actions
 *
 */

import {
  CHANGE_STRING,
  ADD_STRING,
  ADD_STRING_SUCCESS,
  ADD_STRING_ERROR,
  RESET_FORM,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} newString The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_STRING
 */
export function changeString(newString) {
  return {
    type: CHANGE_STRING,
    newString,
  };
}

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
 * Dispatched when adding the strings fails
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

/**
 * Dispatched when form submission is complete
 *
 * @return {object}       An action object with a type of RESET_FORM
 */
export function resetForm() {
  return {
    type: RESET_FORM,
  };
}
