import React from 'react';

export class NavLogo extends React.Component {
 
 /* Use props instead o local storage to retrieve
 
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
      	name: ' ',
      	picture: '/public/favicons/mstile-70x70.png',
      	href: '#',
      	id: 'logo-fade-in-out'
      }
      return navLeft;
    }
  }
  
  
  render () {
    return (
      <a href={this.isLoggedIn().href}><div className='nav-text'>
        <img id={this.isLoggedIn().id} className='nav-img' src={this.isLoggedIn().picture} /><p className='hide-on-mobile nav-text'> {this.isLoggedIn().name} </p>
      </div></a>
    );
  }
}

*/

  render () {
    return (
      <a href='#'><div className='nav-text'>
        <img id='logo-fad-in-out' className='nav-img' src='/public/favicons/mstile-70x70.png' /><p className='hide-on-mobile nav-text'>  </p>
      </div></a>
    );
  }
}
