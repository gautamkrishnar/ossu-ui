import { combineReducers } from 'redux';
import { ADD_AUTH_STRATEGY, SHOW_REDIRECT_MODAL, HIDE_REDIRECT_MODAL } from '../actions/action.js';

const initialState = {
  userInfo: {},
  authStrategies: [],
  courses: [],
  redirectModal: {
    hidden: true
  }
};

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

function authStrategies (state = initialState.authStrategies, action) {
  switch (action.type) {
    case ADD_AUTH_STRATEGY:
      return [
        ...state,
        action.strategy
      ];
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

function courses (state = initialState.courses, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const ossuApp = combineReducers({
  redirectModal,
  authStrategies,
  userInfo,
  courses
});

export default ossuApp;
