import { React, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  //increase counter
  const count = () => {
    if (counter > 10) {
      const feedback = "It's higher than 10!";
      setCounter(counter + 1);
      console.log(feedback);
    } else {
      const feedback = "keep counting....";
      setCounter(counter + 1);
      console.log(feedback);
    }
  };

  //reset counter
  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="counter">
      <h1>Counter</h1>
      <span>{counter}</span>
      <div>
        <button onClick={count}>Add 1!</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
