import React, {useState} from 'react';

const ParentComponent = () => {
    const [words, setWords] = useState('');

    return(
        <div>
            <input onChange={(e) => setWords(e.target.value)} type='text'/>
            <p>{words}</p>
        </div>
        )
    }

export default ParentComponent