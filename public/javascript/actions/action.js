import fetch from 'isomorphic-fetch';

/*
 * action types
 */
export const REQUEST_AUTH_STRATEGIES = 'REQUEST_AUTH_STRATEGY';
export const RECEIVE_AUTH_STRATEGIES = 'RECEIVE_AUTH_STRATEGY';
export const SHOW_REDIRECT_MODAL = 'SHOW_REDIRECT_MODAL';
export const HIDE_REDIRECT_MODAL = 'HIDE_REDIRECT_MODAL';
export const REQUEST_CURRICULUM = 'REQUEST_CURRICULUM';
export const RECEIVE_CURRICULUM = 'RECEIVE_CURRICULUM';
export const INVALIDATE_CURRICULUM = 'INVALIDATE_CURRICULUM';
export const SELECT_CURRICULUM = 'SELECT_CURRICULUM';

/*
 * other constants
 */

/*
 * action creators
 */

/* Async Action Creators for getting Auth Strategies*/

function requestAuthStrategies () {
  return {
    type: REQUEST_AUTH_STRATEGIES,
  };
}
function receiveAuthStrategies (stratArray) {
  return {
    type: RECEIVE_AUTH_STRATEGIES,
    strategies: stratArray
  };
}
function fetchAuthStrategies () {
  return dispatch => {
    dispatch(requestAuthStrategies());
    return fetch('http://ossu.io/api/auth')
    .then(response => response.json())
    .then(json => dispatch(receiveAuthStrategies(json)));
  };
}
function shouldFetchAuthStrategies (state) {
  const strategies = state.authStrategies;
  if (!strategies) {
    return true;
  }
  if (strategies.isFetching) {
    return false;
  }
  return strategies.didInvalidate;
}
export function fetchAuthStrategiesIfNeeded () {
  return (dispatch, getState) => {
    if (shouldFetchAuthStrategies(getState())) {
      return dispatch(fetchAuthStrategies());
    }
  };
}

/* Action Creators for Modal */

export function showRedirectModal (data) {
  return {
    type: SHOW_REDIRECT_MODAL,
    data
  };
}
export function hideRedirectModal () {
  return {
    type: HIDE_REDIRECT_MODAL
  };
}

/* Async Action Creators for getting the Curriculum */

export function selectCurriculum (curriculum) {
  return {
    type: SELECT_CURRICULUM,
    curriculum
  };
}
export function invalidateCurriculum (curriculum) {
  return {
    type: INVALIDATE_CURRICULUM,
    curriculum
  };
}
function requestCurriculum (curriculum) {
  return {
    type: REQUEST_CURRICULUM,
    curriculum
  };
}
function receiveCurriculum (curriculum, json) {
  return {
    type: RECEIVE_CURRICULUM,
    curriculum: curriculum,
    courses: json.data.children.map(child => child.data),
    // will be -- [].concat.apply([], json.categories.map(child => child.courses.map(grandchild => {
    //   grandchild.category = child.name;
    //   return grandchild;
    // }))),
    receivedAt: Date.now()
  };
}
function fetchCurriculum (curriculum) {
  return dispatch => {
    dispatch(requestCurriculum(curriculum));
    return fetch('http://www.reddit.com/r/frontend.json') // for testing
    // will be -- return fetch('http://ossu.io/api/curriculum/${curriculum}')
      .then(response => response.json())
      .then(json => dispatch(receiveCurriculum(curriculum, json)));
  };
}
function shouldFetchCurriculum (state, curriculum) {
  const courses = state.curriculumList[curriculum];
  if (!courses) {
    //console.log('I am doing something');
    return true;
  }
  if (courses.isFetching) {
    return false;
  }
  return courses.didInvalidate;
}
export function fetchCurriculumIfNeeded (curriculum) {
  return (dispatch, getState) => {
    if (shouldFetchCurriculum(getState(), curriculum)) {
      return dispatch(fetchCurriculum(curriculum));
    }
  };
}
