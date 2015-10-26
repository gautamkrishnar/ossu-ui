import React from 'react';

export class NavLogo extends React.Component {
  
    
  isLoggedIn () {
    if (window.localStorage.getItem('jwt')) {
      
      let token = window.localStorage.getItem('jwt');
      
      let navLeft = {
      	name: token.name,
      	picture: token.githubAvatar,
      	href: '/user-profile',
      	id: 'user-avatar'

      }
      return navLeft;
    }
    
    else {
      let navLeft = {
      	name: 'Brandon ',
      	picture: './public/favicons/mstile-70x70.png',
      	href: '#',
      	id: 'logo-fade-in-out'
      }
      return navLeft;
    }
  }

  render () {
    return (
      <a href={this.isLoggedIn().href}><div className='nav-text' href='#'>
        <img id={this.isLoggedIn().id} className='nav-img' src={this.isLoggedIn().picture} /><p className='hide-on-mobile nav-text'> {this.isLoggedIn().name} </p>
      </div></a>
    );
  }
}