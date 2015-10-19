/* eslint-env es6 */

import { React } from 'react';
import { Uri } from 'jsuri';

export class Authorize extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
    this.props.setLoginPayloadInState(new Uri(location.search).getQueryParamValue('code'));
  }

  componentDidMount () {
    this.makeLoginRequestToAPI();
  }

  makeLoginRequestToAPI () {
    this.props.writeToAPI('post', this.props.API + this.props.strategy.callback, this.props.loginPayload, jwt => {
      this.props.storeJWT(jwt);
      // navigate to profile or home page or something.
    });
  }

  render () {
    <div className='ui inverted center aligned'>
      <div className='ui text container'>
        <h1 className='ui inverted header flash'>Attempting to log you in</h1>
      </div>
    </div>
  }
}
