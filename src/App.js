import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todoList: Todo
    }
  }
  render() {
    return (
      <div>
        <h2>Welcome to the Todo App!</h2>
        <TodoList data={this.state.todoList} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
