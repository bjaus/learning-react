import React, { Component } from 'react';

import ToDoItems from './ToDoItems';

import './ToDoList.css';

class ToDoList extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if ( this.inputElement.value !== '' ) {
      
      const newItem = {
        text: this.inputElement.value,
        key: Date.now()
      };

      this.setState( (prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this.inputElement.value = '';
    }

  e.preventDefault();

  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter( function(item) {
      return ( item.key !== key );
    });

    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className='todoListMain'>
        <h1>To Do List App</h1>
        <div className='header'>
          <form onSubmit={ this.addItem }>
            <input 
              placeholder='Enter Task'
              ref={ (a) => this.inputElement = a }
            ></input>
            <button type='submit'>Add</button>
          </form>
        </div>
        <ToDoItems 
          entries={ this.state.items } 
          delete={ this.deleteItem }
        />
      </div>
    );
  }
}

export default ToDoList;
