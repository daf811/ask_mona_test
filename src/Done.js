import React, { Component } from 'react';
import axios from 'axios';

class Task extends Component {
    
    handleClick(){
      
 
    render() {
      return (
        <div className="Task">
          {this.props.name}
          <button className="checkbox" onClick={this.handleClick.bind(this)}></button>
        </div>
      );
    }
  }
  
  export default Task;