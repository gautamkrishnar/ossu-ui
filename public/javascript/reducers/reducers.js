import { combineReducers } from 'redux';
import {
  SHOW_REDIRECT_MODAL, HIDE_REDIRECT_MODAL,
  REQUEST_CURRICULUM, RECEIVE_CURRICULUM,
  INVALIDATE_CURRICULUM, RECEIVE_AUTH_STRATEGIES,
  SELECT_CURRICULUM, REQUEST_AUTH_STRATEGIES
} from '../actions/action.js';

const initialState = {
  userInfo: {},
  authStrategies: {},
  selectedCurriculum: 'cs',
  curriculumList: {},
  redirectModal: {
    hidden: true
  }
};

function selectedCurriculum (state = initialState.selectedCurriculum, action) {
  switch (action.type) {
    case SELECT_CURRICULUM:
      return action.curriculum;
    default:
      return state;
  }
}
function redirectModal (state = initialState.redirectModal, action) {
  switch (action.type) {
    case SHOW_REDIRECT_MODAL:
      return action.data;
    case HIDE_REDIRECT_MODAL:
      return initialState.redirectModal;
    default:
      return state;
  }
}
function userInfo (state = initialState.userInfo, action) {
  switch (action.type) {
    default:
      return state;
  }
}
function authStrategies (state = {isFetching: false, strategies: []}, action) {
  switch (action.type) {
    case REQUEST_AUTH_STRATEGIES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_AUTH_STRATEGIES:
      return Object.assign({}, state, {
        isFetching: false,
        strategies: action.strategies
      });
    default:
      return state;
  }
}
function curriculum (state = { isFetching: false, didInvalidate: false, courses: [] }, action) {
  switch (action.type) {
    case INVALIDATE_CURRICULUM:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case REQUEST_CURRICULUM:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_CURRICULUM:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        courses: action.courses,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}
function curriculumList (state = initialState.curriculumList, action) {
  switch (action.type) {
    case INVALIDATE_CURRICULUM:
    case RECEIVE_CURRICULUM:
    case REQUEST_CURRICULUM:
      return Object.assign({}, state, {
        [action.curriculum]: curriculum(state[action.curriculum], action)
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  redirectModal,
  authStrategies,
  userInfo,
  curriculumList,
  selectedCurriculum
});

export default rootReducer;
