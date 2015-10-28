/* eslint-env es6 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Routes from './public/javascript/router/Routes.js';
import configureStore from './public/javascript/store/configureStore.js';

let store = configureStore();

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Routes />
    </Provider>
  </div>,
  document.getElementById('root')
);
