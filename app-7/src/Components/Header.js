import React, { useState } from "react";

const Header = () => {
    const [header, setHeader] = useState('My to-do list:');

    return(
        <h1>{header}</h1>
    )
}

export default Header;