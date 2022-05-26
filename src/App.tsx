import React, {useState} from 'react';
import './App.css';
import {SecondVariant} from "./SecondVariant/SecondVariant";

function App() {
  const [min,setMin] = useState<number>(0)
  const [max,setMax] = useState<number>(0)
  const [value, setValue] = useState(min)
  const increaseHandler = () => {
    const newValue = value + 1
    setValue(newValue)
  }
  const decreaseHandler = () => {
      const newValue = value - 1
      setValue(newValue)
  }
  const resetToMin = () => {
      setValue(min)
  }
  return (
    <div className="App">
        {/*<div>{value}</div>
        <button onClick={increaseHandler}>increase</button>
        <button onClick={decreaseHandler}>decrease</button>
        <button onClick={resetToMin}>reset</button>
        <button>set</button>*/}
        <SecondVariant />
    </div>
  );
}

export default App;
