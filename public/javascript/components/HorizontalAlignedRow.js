import React from 'react';
import { ContentBox } from './ContentBox.js';
import Grid, { Cell } from 'react-mdl/lib/Grid.js';
import { ContentBoxData } from './ContentBoxData.js'


export class HorizontalAlignedRow extends React.Component {
  constructor (props) {
    super(props)
  }


  getContentProps (name) {
    return this.props = ContentBoxData.getProps(name)
  }

  render () {
    return (
      <Cell col={10} tablet={8} phone={12} className='center-cell' id='primary-cards'>
        <Grid className='card-container cell-width'>
          <ContentBox {...this.getContentProps('moocs')} />
          <ContentBox {...this.getContentProps('github')} />
          <ContentBox {...this.getContentProps('projects')} />
        </Grid>
      </Cell>
    );
  }
}