import React from 'react';
import { ContentBox } from './ContentBox.js';
import Grid, { Cell } from 'react-mdl/lib/Grid.js'


export class HorizontalAlignedRow extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Cell col={10} phone={12} className='center-cell'>
        <Grid className='card-container'>
            <ContentBox />
            <ContentBox />
            <ContentBox />
        </Grid>
      </Cell>
    );
  }
}
