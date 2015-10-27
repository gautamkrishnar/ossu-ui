/* eslint-env es6 */

import React, { Component, PropTypes } from 'react';
// import { Uri } from 'jsuri';

export class Authorize extends Component {
  constructor (props) {
    super(props);
  }

  // componentWillMount () {
  //   this.props.setLoginPayloadInState(new Uri(window.location.search).getQueryParamValue('code'));
  // }

  // componentDidMount () {
  //   this.makeLoginRequestToAPI();
  // }

  // makeLoginRequestToAPI () {
  //   this.props.writeToAPI('post', this.props.API + this.props.strategy.callback, this.props.loginPayload, jwt => {
  //     this.props.storeJWT(jwt);
  //     // navigate to profile or home page or something.
  //   });
  // }

  render () {
    return (
      <div className='ui inverted center aligned'>
        <div className='ui text container'>
          <h1 className='ui inverted header'>Attempting to log you in</h1>
        </div>
      </div>
    );
  }
}

Authorize.propTypes = {
  setLoginPayloadInState: PropTypes.func,
  writeToAPI: PropTypes.func,
  storeJWT: PropTypes.func,
  API: PropTypes.string.isRequired,
  strategy: PropTypes.object.isRequired,
  loginPayload: PropTypes.string.isRequired
};
