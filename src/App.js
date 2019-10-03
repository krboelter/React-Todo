import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo';
import { makeStyles } from '@material-ui/core';

import './components/TodoComponents/Todo.css';

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
  
  
  handleChange = (e, todoId) => {
    e.preventDefault();
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }else {
          return todo
        }
      })
    })
  }
  
  addTodo = (e, addTodo) => {
    const newTodo = {
      task: addTodo,
      id: Date.now(),
      completed: false
    }
    
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    })
  }
  
  handleDelete = (event) => {
    event.preventDefault()
    
    this.setState({
      todoList: this.state.todoList.filter(todo => {
        return !todo.completed
      })
    })
  }
  
  render() {
    return (
      <div className='container'>
        <h2>Welcome to the Todo App!</h2>
        {this.state.todoList.map(todo => (
          <TodoList key={todo.id} todoList={todo} onClick={e => this.handleChange(e, todo.id)} />
          ))}
        <TodoForm addTodo={this.addTodo} />
        <button className='delete-btn' onClick={this.handleDelete} className='delete-btn'>Delete Items</button>
      </div>
    );
  }
}

export default App;
