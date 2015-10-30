import React, { Component } from 'react';
import {createHistory, useBasename} from 'history';
import {
  Router, Route,
  IndexRoute, Redirect
} from 'react-router';

import App from '../components/App.js';
import Authorize from '../components/Authorize.js';
import BodyContent from '../components/BodyContent.js';
import AboutPage from '../components/AboutPage.js';

const history = useBasename(createHistory)({
  basename: ''
});

export default class Routes extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    console.log('Mounted the Router Component');
  }

  render () {
    const {...other} = this.props;
    return (
      <Router history={history}>
        <Route path='/' component={App} {...other}>
          <IndexRoute component={BodyContent} />
          <Redirect from='/home' to='/' />
          <Route path='about' component={AboutPage} />
        </Route>
        <Route path='authorize' >
          <Route path='github' component={Authorize} />
        </Route>
      </Router>
    );
  }
}
