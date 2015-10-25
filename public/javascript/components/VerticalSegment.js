import React from 'react';
import { VerticalSegmentContent } from './VerticalSegmentContent.js';

export class VerticalSegment extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='ossu-purpose'>
        <VerticalSegmentContent />
      </div>
    );
  }
}
