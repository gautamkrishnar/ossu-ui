import React from 'react';
import {Masthead} from './Masthead.js';
import {VerticalSegment} from './VerticalSegment.js';
import {HorizontalAlignedRow} from './HorizontalAlignedRow.js';
import Grid from 'react-mdl/lib/Grid.js';

export default class BodyContent extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Grid>
        <Masthead />
        <VerticalSegment />
        <HorizontalAlignedRow />
        <VerticalSegment />
        <VerticalSegment />
      </Grid>
    );
  }
}
