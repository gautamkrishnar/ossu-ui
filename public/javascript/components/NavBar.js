import React from 'react';
import { NavLogo } from './NavLogo.js';
import { NavButton } from './NavButton.js';
import { Login } from './Login.js';

export class NavBar extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const {...other} = this.props;
    return (
      <div className='navBar ui fixed inverted menu'>
        <div className='ui container'>
          <NavLogo />
          <NavButton 
            {...other}
          />
          <NavButton 
            {...other}
          />
          <Login 
            {...other}
          />
        </div>
      </div>
    );
  }
}
