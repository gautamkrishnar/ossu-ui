/*
 * action types
 */

export const ADD_AUTH_STRATEGY = 'ADD_AUTH_STRATEGY';
export const SHOW_REDIRECT_MODAL = 'SHOW_REDIRECT_MODAL';
export const HIDE_REDIRECT_MODAL = 'HIDE_REDIRECT_MODAL';

/*
 * other constants
 */

/*
 * action creators
 */

export function addAuthStrategy (strategy) {
  return { type: ADD_AUTH_STRATEGY, strategy };
}
export function showRedirectModal (data) {
  return { type: SHOW_REDIRECT_MODAL, data };
}
export function hideRedirectModal () {
  return { type: HIDE_REDIRECT_MODAL };
}
