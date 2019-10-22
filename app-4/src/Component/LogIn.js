import React, {useState} from 'react';

const LogIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    console.log(username);
    console.log(password)

    const myAlert = () => {
        return alert(`Username: ${username} Password: ${password}`)
    }

    return(
        <div>
            <input onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
            <input onChange={(e) => setPassword(e.target.value)} placeholder="password"/>

            <button onClick={() => myAlert()}>Login</button>
        </div>
    )
}

export default LogIn