import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/reducers.js';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  createLogger()
)(createStore);

export default function configureStore (initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  console.log('logging from configureStore');
  if (module.hot) {
    module.hot.accept('../reducers/reducers.js', () => {
      const nextRootReducer = require('../reducers/reducers.js');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
