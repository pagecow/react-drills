import React, { useState } from "react";

const NewTaskInput = () => {
    const [task, setTask] = useState([]);
    const [input, setInput] = useState('');

    const updateList = () => {
        task.push(input);
        setInput('');
    }

    const mappedItems = task.map(e => {return(<h3>{e}</h3>)})

    return(
        <div>
            <input onChange={e => setInput(e.target.value)}/>
            <button onClick={updateList}>Add</button>

            {mappedItems}
        </div>
    )
}

export default NewTaskInput;