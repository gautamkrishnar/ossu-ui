import { combineReducers } from 'redux';
import {
  SHOW_REDIRECT_MODAL, HIDE_REDIRECT_MODAL,
  REQUEST_CURRICULUM, RECEIVE_CURRICULUM,
  INVALIDATE_CURRICULUM, RECEIVE_AUTH_STRATEGIES,
  SELECT_CURRICULUM, REQUEST_AUTH_STRATEGIES,
  REQUEST_USER_INFO, RECEIVE_USER_INFO,
  INVALIDATE_USER_INFO, LOG_USER_IN, LOG_USER_OUT
} from '../actions/action.js';

const initialState = {
  userInfo: {},
  authStrategies: {},
  selectedCurriculum: 'cs',
  curriculumList: {},
  uiState: {
    isLoggedin: false,
    redirectModal: {
      hidden: true
    }
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
/* function redirectModal (state = initialState.redirectModal, action) {
  switch (action.type) {
    case SHOW_REDIRECT_MODAL:
      return action.data;
    case HIDE_REDIRECT_MODAL:
      return initialState.redirectModal;
    default:
      return state;
  }
}*/
function userInfo (state = initialState.userInfo, action) {
  switch (action.type) {
    case REQUEST_USER_INFO:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_USER_INFO:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        userName: action.json.userName,
        // etc whatever needs to be imported.
        lastUpdated: action.receivedAt
      });
    case INVALIDATE_USER_INFO:
      return Object.assign({}, state, {
        didInvalidate: true
      });
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
function uiState (state = initialState.uiState, action) {
  switch (action.type) {
    case LOG_USER_IN:
      return Object.assign({}, state, {
        isLoggedin: true
      });
    case LOG_USER_OUT:
      return Object.assign({}, state, {
        isLoggedin: false
      });
    case SHOW_REDIRECT_MODAL:
      return Object.assign({}, state, {
        redirectModal: {
          url: action.url,
          message: action.message,
          img: action.img
        }
      });
    case HIDE_REDIRECT_MODAL:
      return Object.assign({}, state, {
        redirectModal: {hidden: true}
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  uiState,
  authStrategies,
  userInfo,
  curriculumList,
  selectedCurriculum
});

export default rootReducer;
