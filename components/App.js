import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../action.js';
import Reqwest from 'reqwest';
import {BodyContent} from './BodyContent.js';
import {NavBar} from './NavBar.js';

export class App extends React.Component {
  constructor (props) {
    super(props);
  }

  readFromAPI (url, callback) {
    Reqwest({
      url: url,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      headers: {'Authorization': localStorage.getItem('jwt')},
      success: callback,
      error: error => { console.error(url, error['response']); }
    });
  }

  writeToAPI (method, url, data, callback) {
    Reqwest({
      url: url,
      data: data,
      type: 'json',
      method: method,
      contentType: 'application/json',
      headers: {'Authorization': localStorage.getItem('jwt')},
      success: callback,
      error: error => { console.error(url, error['response']); }
    });
  }

  storeJWT (jwt) {
    if (jwt !== undefined) {
      localStorage.setItem('jwt', jwt);
    }
  }

  render () {
    const {...other } = this.props;
    console.log(NavBar);
    return (
      <div className='app'>
        <NavBar
          {...other}
          readFromAPI={this.readFromAPI}
          writeToAPI={this.writeToAPI}
          storJWT={this.storeJWT}
        />
        <BodyContent 
          {...other}
          readFromAPI={this.readFromAPI}
          writeToAPI={this.writeToAPI}
        />
      </div>
    );
  }
}



function selectTodos(todos, filter) {
  switch (filter) {
  default:
    return '';
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);