import React from 'react';
import { Cell } from 'react-mdl/lib/Grid.js';

export class ContentBox extends React.Component {
  render () {
    return (
      <Cell col={4} tablet={6} phone={12} className='center-cell'>
      <div className='mdl-card cell-width cast-shadow image-card'>
        <div className='mdl-card__media'>
        	<img src='img/octocatvector.svg' className='card-img' />
        </div>
        <div className='mdl-card__title'>
        <h4 className='mdl-card__title-text'>Github</h4>
        </div>
        <p> Our curriculum is based around sharing github projects. Don't know what github is?</p> <a linkTo="https://help.github.com/articles/set-up-git/"> Click to learn more </a>
      </div>
    </Cell>
    );
  }
}