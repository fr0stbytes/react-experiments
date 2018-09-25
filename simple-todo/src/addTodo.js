import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    content : '',
    label: 'Add a ToDo item here...'
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.content);
    this.setState({
      content: ''
    })
    document.getElementById("todo-form").reset();
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }


  render() {
    return (
      <div className="add-todo-container">
        <form onSubmit={this.handleSubmit} id="todo-form">
          <div className="add-todo-container-inner">
            <div className="input-field">
              <input type="text" id="content" value={this.state.content} onChange={this.handleChange}/>
              <label for="content">{this.state.label}</label>
            </div>
            <button className="waves-effect waves-light btn-large blue darken-1 righ">
              <span>ADD TODO</span>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddTodo;
