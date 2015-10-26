import React from 'react';
import Button from 'react-mdl/lib/Button.js';

export class NavButton extends React.Component {
  constructor (props) {
    super(props);
  }

  handleClick () {
    // console.log(this.props);
    return this.props.onCheckClick;
  }

  render () {
    return (
       <a href='#primary-cards' onClick={this.handleClick()}><Button ripple className='nav-text'>
        A Button!</Button>
      </a>
    );
  }
}
