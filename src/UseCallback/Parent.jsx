import React, { useState, useCallback } from "react";

const ChildComponent = React.memo(({ handleClick }) => {
  console.log("ChildComponent rendered!");
  return <button onClick={handleClick}>Click Me</button>;
});

const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
};

export default Parent;
