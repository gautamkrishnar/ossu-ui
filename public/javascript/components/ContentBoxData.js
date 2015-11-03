import React from 'react';

export class ContentBoxData extends React.Component {

  static getProps = function (name) {
    if (name !== undefined) {
      let cardProps = 'this.' + name;
        if (eval(cardProps) !== undefined ){
          return eval(cardProps); 
        }
        else { 
          return this.defaultProps;
        }
    }
    else {
      return this.defaultProps;
    }
  }

  static defaultProps = {
        img:        'img/octocatvectr.svg',
        title:      'Untitled',
        blurb:      "This is an unused card that has no particular content. This will appear if no content is specified",
        link:       "#",
        linkText:   "Click for top of page"
  }

  static moocs = {
        img:        'img/octocatvector.svg',
        title:      'MOOCs', 
        blurb:      "Massively Open Online Courses.Free, open source classes from amazing universities.",
        link:       "this should reveal a card with a more detailed description and a link to a larger decirption",
        linkText:   "Click here to learn more"
  }

  static github = {
        img:        'img/octocatvector.svg',
        title:      'Github', 
        blurb:      "Github is 'Social Coding' Make your progress open source and share with the world!",
        link:       "this should reveal a card with a more detailed description and a link to a larger decirption",
        linkText:   "Click here to learn more"
  }

  static projects = {
        img:        'img/octocatvector.svg',
        title:      'Projects', 
        blurb:      "Learn by doing. Build a portifolio of projects showcasing what you've learned.",
        link:       "this should reveal a card with a more detailed description and a link to a larger decirption",
        linkText:   "Click here to learn more"
  }

}