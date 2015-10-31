import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import Button from 'react-mdl/lib/Button.js';

export class NavButton extends React.Component {
  constructor (props) {
    super(props);
  }

  getLink (link) {
    return '/' + link.toLowerCase();
  }

  render () {
    const {linkTo} = this.props;
    return (
      <Link to={this.getLink(linkTo)} className='navButton item'>
        <Button ripple className='nav-text'>{linkTo}</Button>
      </Link>
    );
  }
}

NavButton.propTypes = {
  linkTo: PropTypes.string.isRequired
};
