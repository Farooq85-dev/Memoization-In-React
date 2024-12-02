import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [states, setOtherStates] = useState(true);
  const handleInc = () => {
    setCount((count) => count + 1);
  };
  const handlerForOtherState = () => {
    setOtherStates(!states);
  };

  return (
    <div>
      <button onClick={handleInc}>Increment</button>
      {states}
      <button onClick={handlerForOtherState}>Other State ko Chnage Kro</button>
      <Child count={count} />
    </div>
  );
};

export default Parent;
