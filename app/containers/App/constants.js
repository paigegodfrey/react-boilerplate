/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_STRINGS = 'boilerplate/App/LOAD_STRINGS';
export const LOAD_STRINGS_SUCCESS = 'boilerplate/App/LOAD_STRINGS_SUCCESS';
export const LOAD_STRINGS_ERROR = 'boilerplate/App/LOAD_STRINGS_ERROR';
export const ADD_STRING = 'boilerplate/App/ADD_STRING';
export const ADD_STRING_SUCCESS = 'boilerplate/App/ADD_STRING_SUCCESS';
export const ADD_STRING_ERROR = 'boilerplate/App/ADD_STRING_ERROR';
