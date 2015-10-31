// Import 3rd Party Dependencies
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Reqwest from 'reqwest';

// Import Components
import {NavBar} from './NavBar.js';
import {Footer} from './Footer.js';

// Import Actions
import {
  fetchAuthStrategiesIfNeeded, fetchCurriculumIfNeeded,
  showRedirectModal
} from '../actions/action.js';

/*
 * Main React component
 */
export class App extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const {dispatch} = this.props;
    dispatch(fetchAuthStrategiesIfNeeded());
    dispatch(fetchCurriculumIfNeeded('cs'));
    console.log(this.props);
  }

  writeToAPI (method, url, data, callback) {
    Reqwest({
      url: url,
      data: data,
      type: 'json',
      method: method,
      contentType: 'application/json',
      headers: {'Authorization': window.localStorage.getItem('jwt')},
      success: callback,
      error: error => { console.error(url, error['response']); }
    });
  }

  storeJWT (jwt) {
    if (jwt !== undefined) {
      window.localStorage.setItem('jwt', jwt);
    }
  }

  render () {
    const { dispatch, children, state } = this.props;
    return (
      <div className='app'>
        <NavBar
          onLoginClick={data => dispatch(showRedirectModal(data))}
          state={state}
        />
        {children}
        <Footer />
      </div>
    );
  }
}

/*
 * Prop Validation. We will want to amke sure we turn this off before going to production.
 */
App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  state: PropTypes.object.isRequired
};

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select (state) {
  return {
    state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);
