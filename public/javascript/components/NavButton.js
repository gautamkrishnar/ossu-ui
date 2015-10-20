import React from 'react';

export class NavButton extends React.Component {
  constructor (props) {
    super(props);
  }

  handleClick () {
    console.log(this.props);
    return this.props.onCheckClick;
  }

  render () {
    return (
      <a href='#' onClick={this.handleClick()} className='navButton item'>
        A Button!
      </a>
    );
  }
}
