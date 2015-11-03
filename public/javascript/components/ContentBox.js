import React from 'react';
import { Cell } from 'react-mdl/lib/Grid.js';
import Card, { CardText, CardMenu, CardTitle, CardActions } from 'react-mdl/lib/Card/Card.js';

export class ContentBox extends React.Component {
  
  constructor (props) {
    super(props);
  }

  render () {
    return (
<<<<<<< HEAD
      <Cell col={4} tablet={12} phone={12}>
      <div className='mdl-card cell-width cast-shadow image-card'>
        <div className='mdl-card__media'>
          <img src='img/octocatvector.svg' className='card-img' />
        </div>
        <div className='mdl-card__title'>
        <h4 className='mdl-card__title-text'>Github</h4>
        </div>
        <p> Our curriculum is based around sharing github projects. Don't know what github is? <a href='https://help.github.com/articles/set-up-git/'> Click to learn more </a></p>
      </div>
=======
      <Cell col={4} tablet={7} phone={12} className='center-cell'>
        <Cell col={12}>    
          <Card className='cell-width cast-shadow image-card'>
            <div className='mdl-card__media'>
              <img src={this.props.img} className='card-img' />
            </div>
            <CardTitle>
              <h3>{this.props.title}</h3>
            </CardTitle>
            <CardText  className='card-text'> {this.props.blurb} </CardText> 
            <CardActions linkTo={this.props.link} > {this.props.linkText} </CardActions>
          </Card>
        </Cell>
>>>>>>> 189e6e033eb532d645c6b13284d0404570006ff9
    </Cell>
    );
  }
}
