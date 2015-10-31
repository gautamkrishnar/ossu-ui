import React from 'react';
import { Cell } from 'react-mdl/lib/Grid.js';

export class VerticalSegmentContent extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Cell col={12}>
        <Cell col={10} phone={12} className='constrain-text-box'>
          <div className='center-text-box'>
            <p className='large-body-text'> Open Source Society University is a community of students and professionals alike of all skill levels from around the wordl dedicated to increasing their understanding of computer science and helping others who are learning with them</p>
          </div>
        </Cell>
      </Cell>
    );
  }
}
