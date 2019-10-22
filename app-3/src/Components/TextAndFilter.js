import React, {useState} from 'react';

const TextAndFilter = () => {
    const [array, setArray] = useState(['spaghetti', 'pasta', 'the Joker', 'crying horses', 'vestibule maneuvers']);
    const [filteredStrings, setFilteredStrings] = useState('')

    const thingsToDisplay = array.filter(e => {return e.includes(filteredStrings)})

    return (
        <div>
            <input onChange={(e) => setFilteredStrings(e.target.value)}/>
            {thingsToDisplay.map(e => {return(<h1>{e}</h1>)})}
            
        </div>
    )
}

export default TextAndFilter