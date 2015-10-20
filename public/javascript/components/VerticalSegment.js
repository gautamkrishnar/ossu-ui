import React from 'react';
import { VerticalSegmentContent } from './VerticalSegmentContent.js';

export class VerticalSegment extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='verticalSegment ui vertical stripe segment'>
        <VerticalSegmentContent />
      </div>
    );
  }
}
