import React, { useState } from 'react';

function ToDoList()
{
    const [todos, setToDos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function handleInputChange(event)
    {
        setInputValue(event.target.value);
    }

    function handleSubmit()
    {
        if(inputValue.trim())
        {
            setToDos([...todos, inputValue.trim()]);
            setInputValue('');
        }
    }

    function handleDelete(index)
    {
        setToDos(todos.filter((_, i) => i !== index));
    }

    return(
        <div>
            <h2>ToDoList</h2>
            <input type="text"
            value={inputValue}
            onChange={handleInputChange} />
            <button onClick={handleSubmit}>Add ToDo</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;