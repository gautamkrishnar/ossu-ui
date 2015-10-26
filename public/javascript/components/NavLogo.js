import React from 'react';

export class NavLogo extends React.Component {
  
    
  isLoggedIn () {
    if (window.localStorage.getItem('jwt')) {
      
      let token = window.localStorage.getItem('jwt');
      
      let navLeft = {
      	name: token.name,
      	picture: token.githubAvatar,
      	href: '#drawer'
      }
      return navLeft;
    }
    
    else {
      let navLeft = {
      	name: 'Brandon Stapleton',
      	picture: './public/favicons/favicon-32x32.png',
      	href: '#'
      }
      return navLeft;
    }
  }

  render () {
    return (
      <a href={this.isLoggedIn().href}><div className='nav-text' href='#'>
        <img className='nav-logo' src={this.isLoggedIn().picture} /><p className='hide-on-mobile nav-text'> {this.isLoggedIn().name} </p>
      </div></a>
    );
  }
}