import React from 'react';

export class VerticalSegmentContent extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='verticalSegmentContent ui text container'>
        <h3 className='ui header'> This is just a little paragraph about nothing </h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
      </div>
    );
  }
}
