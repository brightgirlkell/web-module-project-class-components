import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          type="text"
          value={this.props.inputValue}
          onChange={this.props.handleChange}
          placeholder="Type todo"
        />
        <button type="submit">Submit</button>
        <br/><br/>
        <button type="button" onClick={this.props.clearCompleted}>
          Clear Completed
        </button>
      </form>
    );
  }
}

