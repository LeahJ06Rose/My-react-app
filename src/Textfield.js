import React from 'react';

const Textfield = ({ value, onChange }) =>
{
    return(
        <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter text!" />
    );
}

export default Textfield;