import React, { useState } from 'react';
import './App.css';
import Button from './Button';
import Textfield from './Textfield';
import ToDoList from './ToDoList';

function App()
{
  const [count, setCount] = useState(0);

  const [inputValue, setInputValue] = useState('');

  const handleIncrement = () => {setCount(count + 1);};

  const handleDecrement = () => 
  {
    setCount(prevCount => Math.max(0, prevCount - 1));
  }

  const handleChange = (e) =>
  {
    setInputValue(e.target.value);
  };

  return(
    <div className="App">
      <h1>Counter: {count}</h1>
      <Button label="Increment" onClick={handleIncrement} />
      <Button label="Decrement" onClick={handleDecrement} />
      <br/>
      <br />
      <Textfield value={inputValue} onChange={handleChange} />
      <br />
      Textfield: {inputValue}
      <br />
      <header className = "App">
        <ToDoList />
      </header>
    </div>
  );
}

export default App;