import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Task from './Task';
// import Done from './Done';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
     taskName: '',
      tasks: []
    };

  this.handleClick = this.handleClick.bind(this);    
  this.removeTask = this.removeTask.bind(this);
}

handleClick(e) {
  this.setState(prevState => ({
    isToggleOn: !prevState.isToggleOn
  }));
}

  updateList() {
    axios
      .get('https://todo-test-mona.herokuapp.com/tasks')
      .then(tasks => this.setState({
        tasks: tasks.data
        
      }));
  }

componentDidMount(){
  axios.get('https://todo-test-mona.herokuapp.com/tasks')
  .then(tasks => this.setState({
    tasks: tasks.data
  }));

}

handleChange(e) {
  this.setState({
    taskName: e.target.value
  });
}

handleSubmit(e) {
  // Bloque le refresh du navigateur
  e.preventDefault();

  // Envoie les informations du formulaire en back 
  axios
    .post('https://todo-test-mona.herokuapp.com/tasks', {
      name: this.state.taskName
    })
    .then(result => {
      console.log(result.data.error);
      this.setState({
        taskName: ''
      });
      this.updateList();
    });
}

removeTask() {
  this.updateList();
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='https://zupimages.net/up/18/10/mrfa.png' className="App-logo" alt="" />
          <h1 className="App-title">Welcome to Ask Mona To Do!</h1>
        </header> 
        <br/><br/>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" value={this.state.taskName} onChange={this.handleChange.bind(this)} onUpdate={this.handleChange.bind(this)} />
          <button type="submit"> + TASK </button>
          </form>
          <br/>
      {this.state.tasks.map(task => <Task name={task.name} remove={this.removeTask} key={task.id} id={task.id} />)}
      </div>
     
          );
        }
}

export default App;
