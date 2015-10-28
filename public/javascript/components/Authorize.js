/* eslint-env es6 */

import React, { PropTypes } from 'react';
// import { Uri } from 'jsuri';

export default class Authorize extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    window.alert('this is just a proof of concept that it is working! We can put all the javascript for ajax requests in componentDidMount');
  }

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
