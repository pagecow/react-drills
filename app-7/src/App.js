import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header';
import NewTaskInput from './Components/NewTaskInput';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <NewTaskInput />
       
      </div>
    );
  }
}

export default App;
