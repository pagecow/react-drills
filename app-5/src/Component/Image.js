import React, {useState} from 'react';

const Image = () => {
    const [image, setImage] = useState('https://i.pinimg.com/236x/36/a0/b1/36a0b1ed71713bd21dbb0b9cc3ed6464--memes.jpg')
    
    return(
        <img className='image' src={image} />
    )
}

export default Image