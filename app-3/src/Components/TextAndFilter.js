import React, {Component} from 'react';

class TextAndFilter extends Component {
    constructor(){
        super();

        this.state = {
            filterString: "",
            myArray: ['food', 'money', 'cows', 'dentistry', 'stickiness']
        }
    }

    changeHandler = (filter) => {
        this.setState({
            filterString: filter,
        })
    }

    render(){
        let thingsToDisplay = this.state.myArray
            .filter((e, i) => {
                return e.includes(this.state.filterString);
            })
            .map((e, i) => {
                return <h2 key={i}>{e}</h2>
            })

        return(
            <div>
                <input onChange={e => this.changeHandler(e.target.value)} type="text"></input>
                {thingsToDisplay}
            </div>
        )
    }
}

export default TextAndFilter