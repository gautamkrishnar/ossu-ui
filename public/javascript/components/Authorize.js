/* eslint-env es6 */

import React, { PropTypes } from 'react';
// import { Uri } from 'jsuri';

export default class Authorize extends React.Component {
  constructor (props) {
    super(props);
  }

  // componentWillMount () {
  //   this.props.setLoginPayloadInState(new Uri(window.location.search).getQueryParamValue('code'));
  // }

  componentDidMount () {
    // this.makeLoginRequestToAPI();
    window.alert('this is just a proof of concept that it is working! ' + window.location);
  }

  // makeLoginRequestToAPI () {
  //   this.props.writeToAPI('post', this.props.API + this.props.strategy.callback, this.props.loginPayload, jwt => {
  //     this.props.storeJWT(jwt);
  //     // navigate to profile or home page or something.
  //   });
  // }

  render () {
    return (
      <div className='authorize'>
        <h1 className='ui inverted flashing header'>Attempting to log you in</h1>
      </div>
    );
  }
}

Authorize.propTypes = {
  setLoginPayloadInState: PropTypes.func,
  writeToAPI: PropTypes.func,
  storeJWT: PropTypes.func,
  API: PropTypes.string,
  strategy: PropTypes.object,
  loginPayload: PropTypes.string
};
