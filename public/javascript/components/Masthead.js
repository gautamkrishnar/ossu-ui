import React from 'react';

export class Masthead extends React.Component {
  render () {
    return (
      <div className='mdl-layout__content masthead'>
        <div className='ossu-logo'>
          <div className='center-text-box'>
            <h1> OSS </h1>
            <h2> University </h2>
          </div>
          <div className='center-text-box constrain-text-box'>
            <h3> Path to a free, self-taught education in Computer Science! </h3>
          </div>
        </div>
      </div>
    );
  }
}
