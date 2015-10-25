import React from 'react';

export class NavLogo extends React.Component {
  render () {
    return (
      <div className='nav-text' href='#'>
        <img className='logo' src='./public/favicons/favicon-32x32.png' />
      </div>
    );
  }
}