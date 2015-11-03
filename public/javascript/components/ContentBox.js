import React, { PropTypes } from 'react';
import { Cell } from 'react-mdl/lib/Grid.js';
import Card, { CardText, CardTitle, CardActions } from 'react-mdl/lib/Card/Card.js';

export class ContentBox extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Cell col={4} tablet={7} phone={12} className='center-cell'>
        <Cell col={12}>
          <Card className='cell-width cast-shadow image-card'>
            <div className='mdl-card__media'>
              <img src={this.props.img} className='card-img' />
            </div>
            <CardTitle>
              <h3>{this.props.title}</h3>
            </CardTitle>
            <CardText className='card-text'> {this.props.blurb} </CardText>
            <CardActions linkTo={this.props.link} > {this.props.linkText} </CardActions>
          </Card>
        </Cell>
    </Cell>
    );
  }
}

ContentBox.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired
};
