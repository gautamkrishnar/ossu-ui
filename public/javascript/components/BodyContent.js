import React from 'react';
import {Masthead} from './Masthead.js';
import {VerticalSegment} from './VerticalSegment.js';
import {HorizontalAlignedRow} from './HorizontalAlignedRow.js';

export default class BodyContent extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='bodyContent'>
        <Masthead />
        <VerticalSegment />
        <HorizontalAlignedRow />
        <VerticalSegment />
        <VerticalSegment />
        Hello, I am the BodyContent
      </div>
    );
  }
}
