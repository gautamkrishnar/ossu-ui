import React from 'react';

export class Masthead extends React.Component {
  render () {
    return (
      <div className='mdl-layout__content masthead'>
      <div className='mdl-cell mdl-cell--12-col'>
        <div className='ossu-logo masthead-content'>
          <h1> OSSU </h1>
        </div>
        <div className='masthead-content'>
          <h2> Learn Amazing things Here! </h2>
        </div>
      </div>
      </div>
    );
  }
}
