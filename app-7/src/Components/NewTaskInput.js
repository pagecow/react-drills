import React, { Component } from "react";

class NewTaskInput extends Component {
    constructor(){
        super()

        this.state = {
            myInput: '',
            toDoList: []
        }
    }

    handleInputChange = (value) => {
        this.setState({
            myInput: value
        })
    }

    handleListChange = (value) => {
        this.setState({
            toDoList: [...this.state.toDoList, value]
        })
    }
    
    render(){
        return(
            <div>
                <input onChange={e => this.handleInputChange(e.target.value)} type='text'></input>
                <button onClick={e => this.handleListChange(this.state.myInput)}>Add</button>
                <div>
                    {this.state.toDoList.map(e => <h2>{e}</h2>)}
                </div>
            </div>
        )
    }
}

export default NewTaskInput;