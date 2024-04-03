import React from 'react'
import TodoList from './TodoList';
import Form from './Form'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Organize Garage',
          completed: false
        },
        {
          id: 2,
          text: 'Bake Cookies',
          completed: false
        }
      ],
      inputValue: ''
    };
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: this.state.inputValue,
        completed: false
      };
      this.setState({
        todos: [...this.state.todos, newTodo],
        inputValue: ''
      });
    }
  };

  toggleTodo = (id) => {
    const updatedTodos = this.state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.setState({ todos: updatedTodos });
  };

  clearCompleted = () => {
    const filteredTodos = this.state.todos.filter((todo) => !todo.completed);
    this.setState({ todos: filteredTodos });
  };

  render() {
    return (
      <div>
        <h2>Todos:</h2>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
        <Form
          inputValue={this.state.inputValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          clearCompleted={this.clearCompleted}
        />
       
      </div>
    );
  }
}

