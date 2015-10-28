import React from 'react';

export class NavLogo extends React.Component {
  render () {
    return (
      <div href='#' className='navLogo header item'>
        <img className='logo' src='/public/favicons/favicon-32x32.png' />
        OSSU
      </div>
    );
  }
}
