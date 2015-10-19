/* eslint-env es6 */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './public/javascript/components/App.js';
import todoApp from './public/javascript/reducers';

let store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
