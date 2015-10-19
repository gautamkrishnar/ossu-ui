import React from 'react';
import { ContentBox } from './ContentBox.js';

export class HorizontalAlignedRow extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='horizontalAlignedRow vertical stripe quote segment'>
        <div className='ui equal width stackable internally celled grid'>
          <div className='center aligned row'>
            <ContentBox />
            <ContentBox />
            <ContentBox />
          </div>
        </div>
      </div>
    );
  }
}
