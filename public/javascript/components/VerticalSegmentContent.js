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
        <p className='large-body-text'> Open Source Society University is a community of students of all levels, completing a comprhensive, project based, open-source computer science curriculum, helping each other and sharing their experiences and code through github and our community forums.</p>
      </div>
    </Cell>
  </Cell>
    );
  }
}
