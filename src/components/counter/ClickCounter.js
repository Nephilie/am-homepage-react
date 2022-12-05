import { React, useEffect, useState } from "react";
import { FaHistory, FaPlus, FaMinus } from "react-icons/fa";
import './ClickCounterStyles.css'

const ClickCounter = () => {
  const [counter, setCounter] = useState(5);

  // useEffect 
   useEffect (() => {
     console.log('counter: ' + counter) 
   }, [counter])
  
  // increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  // decrease counter, only if counter > 0
  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };

  // reset counter
  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div className="btn-container">
        <button className="control-btn" onClick={increase}>
          <FaPlus />
        </button>
      <span className='counter-output'>{counter}</span>
        <button className="control-btn" onClick={decrease}>
          <FaMinus />
        </button>
        <button className="reset" onClick={reset}>
          <FaHistory />
        </button>
      </div>
    </div>
  );
};

export default ClickCounter;
