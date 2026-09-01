import React, { useState } from 'react';

export default function IncreaseDecrease () {
  // Declare a state variable named "count" initialized to 0
  const [count, setCount] = useState(0);

  // Handler functions
  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrease = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1:0))};


  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      
      {/* Action Buttons */}
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleIncrease}>Increase</button>

      {/* Conditional Rendering Example */}
      {/* {count < 0 && </p>} */}
    </div>
  );
};