import { combineReducers } from 'redux';
import { ADD_AUTH_STRATEGY } from './action.js';

function authStrategy(state = [], action) {
  switch (action.type) {
  case ADD_AUTH_STRATEGY:
    return [...state, {
      text: action.text,
      completed: false
    }];
  default:
    return state;
  }
}

const todoApp = combineReducers({
  authStrategy
});

export default todoApp;