import React, {useState} from 'react';

const ArrayOfData = () => {
    const [array, setArray] = useState(['spaghetti', 'pasta', 'the Joker']);

    return (
        <div>
            {array.map(e => {
                return(
                    <h1>{e}</h1>
                )
            })}
        </div>
    )
}

export default ArrayOfData