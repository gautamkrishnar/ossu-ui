import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/reducers.js';

const createStoreWithMiddleware = compose(
  applyMiddleware(
    thunkMiddleware,
    createLogger()),
  require('redux-devtools').devTools(),
  require('redux-devtools').persistState(
    window.location.href.match(/[?&]debug_session=([^&]+)\b/)
  )
)(createStore);

export default function configureStore (initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  if (module.hot) {
    module.hot.accept('../reducers/reducers.js', () => {
      const nextRootReducer = require('../reducers/reducers.js');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
