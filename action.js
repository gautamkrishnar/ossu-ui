/*
 * action types
 */

export const ADD_AUTH_STRATEGY = 'ADD_AUTH_STRATEGY';

/*
 * other constants
 */

/*
 * action creators
 */

export function addAuthStrategy (strategy) {
  return { type: ADD_AUTH_STRATEGY, strategy };
}
