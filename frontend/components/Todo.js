import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <li
        onClick={() => this.props.toggleTodo(this.props.todo.id)}
        style={{ textDecoration: this.props.todo.completed ? 'line-through' : 'none' }}
      >
        {this.props.todo.text}
      </li>
    );
  }
}

