import React from 'react';

export class Masthead extends React.Component {
  render () {
    return (
      <div className='mastHead ui inverted masthead center aligned segment'>
        <div className='ui text container'>
          <h1 className='ui inverted header shadow'> OSSU </h1>
          <h1 className='ui inverted header'> OSSU </h1>
        </div>
        <div className='ui text container'>
          <h2> Learn Amazing things Here! </h2>
        </div>
      </div>
    );
  }
}
