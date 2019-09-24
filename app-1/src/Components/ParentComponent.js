import React, {Component} from 'react';

class ParentComponent extends Component {
    constructor(){
        super();

        this.state = {
            myInput: ''
        }
    }

    changeHandler = (value) => {
        this.setState({
            myInput: value
        })
    }

    render(){
        return(
            <div>
                <input onChange={(e) => this.changeHandler(e.target.value)} type='text'/>
                <p>{this.state.myInput}</p>
            </div>
        )
    }


}

export default ParentComponent