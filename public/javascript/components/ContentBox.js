import React from 'react';
import Grid, { Cell } from 'react-mdl/lib/Grid.js'


export class ContentBox extends React.Component {
  render () {
    return (
      <Cell col={4} tablet={12} phone={12}>
      <div className='mdl-card cell-width cast-shadow image-card'>
        <div className='mdl-card__media'>
        	<img src='./public/img/octocatvector.svg' className='card-img' />
        </div>
        <div className='mdl-card__title'>
        <h4 className='mdl-card__title-text'>Github</h4>
        </div>
        <p> Our curriculum is based around sharing github projects. Don't know what github is? Click to learn more</p>
      </div>
      </Cell>
    );
  }
}
