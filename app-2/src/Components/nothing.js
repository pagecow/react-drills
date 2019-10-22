import React, {useState} from 'react';

const Blah = () => {
    const [name, setName] = useState('');
    const [nameList, setNameList] = useState([]);

    const addName = () => {
        nameList.push(name);
        setName('')
    }

    const mappedNames = nameList.map((e) => {
        return(
            <p>{e}</p>
        )
    })

    return (
        <div>
            <input onChange={(e) => setName(e.target.value)} value={name}/>
            <button onClick={addName}>Add to List</button>

            {mappedNames}
        </div>
    )
}

export default Blah