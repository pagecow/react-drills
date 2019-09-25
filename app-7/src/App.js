import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header';
import NewTaskInput from './Components/NewTaskInput';
import ToDoList from './Components/ToDoList';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <NewTaskInput />
       <ToDoList />
      </div>
    );
  }
}

export default App;
