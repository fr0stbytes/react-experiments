import React, { Component } from 'react';
import logo from './assets/todo-logo.png';
import appTitle from './assets/app-title.png';

import AddTodo from './addTodo';
import EmptyState from './emptyState';

class App extends Component {
  state = {
    todos: []
  }
  addTodo = (content) => {
    
    let id = Math.random() * 10;
    let todo = {
      content: content,
      id : id
    }
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  }
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <div><img src={logo} className="app-logo" alt="logo" /></div>
          <div><img src={appTitle} className="app-title" alt="title" /></div>
          <h6>Plan your daily tasks and monitor your progress through a simple app.</h6>
        </header>
        <EmptyState todos={this.state.todos}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
