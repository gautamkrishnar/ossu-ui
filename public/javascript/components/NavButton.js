import React, {PropTypes} from 'react';
import { Link } from 'react-router';

export class NavButton extends React.Component {
  constructor (props) {
    super(props);
  }

  // handleClick () {
  //   // console.log(this.props);
  //   return this.props.onCheckClick;
  // }

  getLink (link) {
    return '/' + link.toLowerCase();
  }

  render () {
    const {linkTo} = this.props;
    return (
      <Link to={this.getLink(linkTo)} className='navButton item'>{linkTo}</Link>
    );
  }
}

NavButton.propTypes = {
  // onCheckClick: PropTypes.func.isRequired,
  linkTo: PropTypes.string.isRequired
};

/*
<a href='#' onClick={this.handleClick()} className='navButton item'>
        A Button!
      </a>*/
