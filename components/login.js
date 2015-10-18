/* eslint-env es6 */

// import { Router, Route, Link } from 'react-router';
import { React } from 'react';

export class Login extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.getAuthStrategyFromAPI();
  }

  getAuthStrategyFromAPI () {
    this.props.readFromAPI(this.props.API + '/auth', (strategy) => {
      this.props.addAuthStrategy(strategy); // redux method for set state.
    });
  }

  isLoggedIn () {
    if (localStorage.getItem('jwt')) {
      return 'logout';
    } else {
      return 'login';
    }
  }

  handleLogInOut () {
    if (localStorage.getItem('jwt')) {
      localStorage.removeItem('jwt');
      return '/';
    } else {
      return this.assembleAuthUri();
    }
  }

  calculateStyleClasses () {
    return '';
  }

  assembleAuthUri () {
    return this.props.strategy.auth_url + '?client_id=' + this.props.strategy.data.client_id + '&scope=' + this.props.strategy.data.scope;
  }

  render () {
    <a href={this.handleLogInOut} className={this.calculateStyleClasses()}>{this.isLoggedIn()}</a>;
  }
}
