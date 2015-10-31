import React, {Component} from 'react';
import {VerticalSegment} from './VerticalSegment.js';

export default class AboutPage extends Component {
  render () {
    return (
      <div>
        <div className='mdl-layout__content masthead'>
          <div className='page-header'>
            <h1> OSS </h1>
            <h2> Come learn about us </h2>
          </div>
          <div className='center-text-box constrain-text-box'>
            <h3> An about page is a place that you can learn things about us! We appreciate the fact that you have visited our about page
            and we really hope that in the process you have learned tons and tons about us! Never stop learning, That is my motto!</h3>
          </div>
        </div>
        <VerticalSegment />
        <VerticalSegment />
      </div>
    );
  }
}
