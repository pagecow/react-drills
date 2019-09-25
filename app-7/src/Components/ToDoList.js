import React, { Component } from "react";

class ToDoList extends Component {
    render(){
        return(
            <div>{this.state.toDoList
                .map(e => {
                    return <h2>{e}</h2>
            })}</div>
        )
    }
}

export default ToDoList;