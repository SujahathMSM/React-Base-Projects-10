import { useState } from "react";
import "../styles.css";
const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(c => c+1);
  };

  const handleDecrement = () => {
    setCount(c => c-1);
  };
  return (
    <div className="container">
      <div>
        <h1 className="">{count}</h1>
      </div>
      <div className="btns-container">
        <button className="increment" onClick={handleIncrement}>+</button>
        <button className="increment" onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
};

export default Counter;
