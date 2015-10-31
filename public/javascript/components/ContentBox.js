import React from 'react';
import { Cell } from 'react-mdl/lib/Grid.js';

export class ContentBox extends React.Component {
  
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Cell col={4} tablet={6} phone={12} className='center-cell'>
        <div className='mdl-card cell-width cast-shadow image-card'>
          <div className='mdl-card__media'>
          	<img src={this.props.img} className='card-img' />
          </div>
          <div className='mdl-card__title'>
            <h4 className='mdl-card__title-text'>{this.props.title}</h4>
          </div>
        <p> {this.props.blurb} </p> <a linkTo={this.props.link} > {this.props.linkText} </a>
      </div>
    </Cell>
    );
  }
}