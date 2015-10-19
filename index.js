/* eslint-env es6 */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './public/javascript/components/App.js';
import ossuApp from './public/javascript/reducers/reducers.js';


let store = createStore(ossuApp);




ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
