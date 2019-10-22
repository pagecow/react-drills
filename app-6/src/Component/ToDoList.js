import React, {Component} from 'react';

class ToDoList extends Component {
    constructor(){
        super()

        this.state = {
            myTaskInputs: '',
            myCurrentTasks: []
        }
    }

    handleChange = (value) => {
        this.setState({
            myTaskInputs: value
        })
    }

    handleCurrentTasks = (value) => {
        this.setState({
            myCurrentTasks: [...this.state.myCurrentTasks, value]
        })
    }

    render(){
        console.log(this.state.myCurrentTasks)
        return(
            <div>
                <h1>My to-do list:</h1>
                <input onChange={e => this.handleChange(e.target.value)} type='text'/>
                <button onClick={e => this.handleCurrentTasks(this.state.myTaskInputs)}>Add</button>
                <div>               
                {this.state.myCurrentTasks
                        .map(e => {
                            return <h2>{e}</h2>
                })}</div>
            </div>
        )
    }
}

export default ToDoList