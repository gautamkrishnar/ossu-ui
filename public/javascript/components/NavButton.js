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
      <Button ripple> <a href='#' onClick={this.handleClick()} className='nav-text'>
        A Button!
      </a></Button>
    );
  }
}
