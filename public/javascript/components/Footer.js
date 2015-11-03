import React, {Component} from 'react';
import {Link} from 'react-router';

export class Footer extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <footer className='mdl-mini-footer'>
        <div className='mdl-mini-footer--left-section'>
          <ul className='mdl-mini-footer--link-list'>
            <li><Link to='/home'>Home</Link></li>
            <li><a href='http://github.com/open-source-society'>Contribute</a></li>
            <li><a href='#'>Help</a></li>
          </ul>
        </div>
        <div className='mdl-mini-footer--right-section'>
          <span>&copy; 2015 Open Source Society</span>
        </div>
      </footer>
    );
  }
}
