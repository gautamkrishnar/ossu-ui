import React, {Component} from 'react';

export default class AboutPage extends Component {
  render () {
    return (
      <div className='mastHead ui inverted masthead center aligned segment'>
        <div className='ui text container'>
          <h1 className='ui inverted header shadow' style={{color: 'White', marginTop: '2em'}}> This is an About page </h1>
        </div>
        <div className='ui text container'>
          <h2> An about page is a place that you can learn things about us! We appreciate the fact that you have visited our about page
          and we really hope that in the process you have learned tons and tons about us! Never stop learning, That is my motto!</h2>
        </div>
      </div>
    );
  }
}
