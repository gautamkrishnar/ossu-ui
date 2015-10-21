/* eslint-env es6 */

// import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createHistory, useBasename } from 'history';
// import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import App from './public/javascript/components/App.js';
import Authorize from './public/javascript/components/Authorize.js';
import configureStore from './public/javascript/store/configureStore.js';

let store = configureStore();

const history = useBasename(createHistory)({
  basename: '/something'
});

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={App}>
          <Route path='Courses'>
            <Route path=':courseId'/>
          </Route>
          <Route path='About'/>
          <Route path='Blog'>
            <Route path=':blogId'/>
          </Route>
          <Route path='Contribute'/>
        </Route>
        <Route path='authorize' >
          <Route path='github' component={Authorize} />
        </Route>
      </Router>
    </Provider>
  </div>,
  document.getElementById('root')
);

/*
 *  <DebugPanel top right bottom>
 *    <DevTools store={store} monitor={LogMonitor} />
 *  </DebugPanel>
 */
