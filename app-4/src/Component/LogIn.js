import React, {Component} from 'react';

class LogIn extends Component {
    constructor(){
        super();

        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsernameChange = (value) => {
        this.setState({
            username: value,
        })
    }

    handlePasswordChange = (value) => {
        this.setState({
            password: value,
        })
    }

    handleLogin = () => {
        alert(`Username: ${this.state.username} Password ${this.state.password}`)
    }

    render() {
        return(
            <div>
                <input className='username' onChange={(e) => this.handleUsernameChange(e.target.value)} type='text'/>
                <input className='password' onChange={(e) => this.handlePasswordChange(e.target.value)} type='text'/>
                <button onClick={this.handleLogin}>Log In</button>
            </div>
        )
    }
}

export default LogIn