import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList, Footer} from './component/todo/index';
import {addTodo, generateId, findById, toggleToDo, updateTodos, removeToDo, filterTodos} from './component/lib/todoHelpers';
import {pipe, partial} from './component/lib/utils';
import {loadTodos, createTodos, saveTodos, destoryTodos} from './component/lib/todoService';

class App extends Component {
  state = {
      todos:[
        // {"id":1, "name":"Learn Jsx", isCompleted:true},
        // {"id":2, "name":"Build an Awesome App", isCompleted:false},
        // {"id":3, "name":"Ship it", isCompleted:false}
      ],
      currentTodo:'',
      errorMessage:''
  }
  static contextTypes = {
    routes:React.PropTypes.string
  }
  componentDidMount() {
    loadTodos().then(todos => this.setState({todos}));
  }
  handleRemove = (id, evt) => {
    evt.preventDefault();
    const removeUpdateTodo = removeToDo(this.state.todos, id);
    this.setState({
      todos:removeUpdateTodo
    })
    destoryTodos(id).then(() => this.showMessage('Todo Removed'));
  }
  handleToggle = (id) => {
   // const updatedList = updateTodos(this.state.todos, toggleToDo(findById(id, this.state.todos)));
    const getToggledTodo = pipe(findById, toggleToDo); //toggleToDo(findById(id, this.state.todos)
    const updated = getToggledTodo(id, this.state.todos); // return updatedtodo
    const getUpdateTodo = partial(updateTodos, this.state.todos); // bind object with function
    const updatedList = getUpdateTodo(updated); // passing updatedtodo
    this.setState({
      todos:updatedList
    })

    saveTodos(updated).then(() => this.showMessage('todo Updated'));
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    const newId = generateId();
    const newTodo = {id:newId, name:this.state.currentTodo, isCompleted:false}
    const updatedTodo = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updatedTodo,
      currentTodo:'',
      errorMessage:''
    });
    createTodos(newTodo).then(() => this.showMessage('Todos Added'));
  }
  showMessage = (msg) => {
    this.setState({message:msg})
    setTimeout(() => this.setState({message:''}), 2500)
  }
  handleEmptySubmit = (evt) => {
    evt.preventDefault()
    this.setState({
      errorMessage:'Please Enter a Message'
    })
  }
  handleInputChange = (evt) => {
    this.setState({
      currentTodo:evt.target.value
    });
  }
  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    const displayItems = filterTodos(this.state.todos, this.context.routes)
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Sudhir Madaan React First App</h2>
          </div>
          <div className="To-do">
            {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
            {this.state.message && <span className='success'>{this.state.message}</span>}
            <TodoForm handleInputChange={this.handleInputChange} 
              handleSubmit={submitHandler}
              currentTodo={this.state.currentTodo} />
            <TodoList handleToggle={this.handleToggle} handleRemove={this.handleRemove} todos={displayItems}  />
            <Footer />
          </div>
        </div>
      )
  }
}

export default App;



  // constructor(){
  //   super()
  //   this.state = {
  //     todos:[
  //       {"id":1, "name":"Learn Jsx", isCompleted:true},
  //       {"id":2, "name":"Build an Awesome App", isCompleted:false},
  //       {"id":3, "name":"Ship it", isCompleted:false}
  //     ],
  //     currentTodo:'',
  //     errorMessage:''
  //   }
  //     this.handleInputChange = this.handleInputChange.bind(this);
  //     this.handleSubmit = this.handleSubmit.bind(this);
  //     this.handleEmptySubmit = this.handleEmptySubmit.bind(this);
  // }
  // handleSubmit(evt) {
  //   evt.preventDefault();
  //   const newId = generateId();
  //   const newTodo = {id:newId, name:this.state.currentTodo, isCompleted:false}
  //   const updatedTodo = addTodo(this.state.todos, newTodo);
  //   this.setState({
  //     todos: updatedTodo,
  //     currentTodo:'' 
  //   })
  // }
  // handleEmptySubmit(evt) {
  //   evt.preventDefault()
  //   this.setState({
  //     errorMessage:'Please Enter a Message'
  //   })
  // }
  // handleInputChange(evt) {
  //   this.setState({
  //     currentTodo:evt.target.value
  //   });
  // }
