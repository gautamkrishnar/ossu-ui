/* eslint-env es6 */

// import { Router, Route, Link } from 'react-router';
import React from 'react';

export class Login extends React.Component {
  constructor (props) {
    super(props);
  }

  /* componentDidMount () {
    this.getAuthStrategyFromAPI();
  }*/

  /* getAuthStrategyFromAPI () {
    this.props.readFromAPI(this.props.API + '/auth', (strategy) => {
      this.props.addAuthStrategy(strategy); // redux method for set state.
    });
  }*/

  isLoggedIn () {
    if (window.localStorage.getItem('jwt')) {
      return 'logout';
    } else {
      return 'login';
    }
  }

  handleLogInOut () {
    if (window.localStorage.getItem('jwt')) {
      window.localStorage.removeItem('jwt');
      return '/';
    } else {
      // this.props.onLoginClick(this.props.authStrategies.strategies[0]);
    }
  }

  calculateStyleClasses () {
    return 'navButton item pull right';
  }

  assembleAuthUri () {
    return '#';
    // return this.props.strategy.auth_url + '?client_id=' + this.props.strategy.data.client_id + '&scope=' + this.props.strategy.data.scope;
  }

  render () {
    return (
        <a onClick={this.handleLogInOut()} className={this.calculateStyleClasses()}>{this.isLoggedIn()}</a>
    );
  }
}
