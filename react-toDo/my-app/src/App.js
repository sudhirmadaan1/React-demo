import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './component/todo/index';
import {addTodo, generateId} from './component/lib/todoHelpers';

class App extends Component {
  constructor(){
    super()
    this.state = {
      todos:[
        {"id":1, "name":"Learn Jsx", isCompleted:true},
        {"id":2, "name":"Build an Awesome App", isCompleted:false},
        {"id":3, "name":"Ship it", isCompleted:false}
      ],
      currentTodo:'',
    }
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    const newId = generateId();
    const newTodo = {id:newId, name:this.state.currentTodo, isCompleted:false}
    const updatedTodo = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updatedTodo,
      currentTodo:'' 
    })
  }
  handleInputChange(evt) {
    this.setState({
      currentTodo:evt.target.value
    });
  }
  render() {
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Sudhir Madaan React First App</h2>
          </div>
          <div className="To-do">
            <TodoForm handleInputChange={this.handleInputChange} 
              handleSubmit={this.handleSubmit}
              currentTodo={this.state.currentTodo} />
            <TodoList todos={this.state.todos}  />
          </div>
        </div>
      )
  }
}

export default App;