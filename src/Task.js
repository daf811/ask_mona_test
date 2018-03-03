import React, { Component } from 'react';
import axios from 'axios';


class Task extends Component {
    
    handleClick(){
      console.log(this.props.id);
      axios.delete('https://todo-test-mona.herokuapp.com/tasks',{ 
        id : this.props.id 
      })
      .then(result => {
        this.props.remove();
        console.log(result.data);
      });
    }
 
    render() {
      return (
        <div className="Task">
          { this.props.name }
          <button className="remove" onClick={this.handleClick.bind(this)}>X</button>
        </div>
      );
    }
  }
  
  export default Task;