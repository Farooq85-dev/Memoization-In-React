import { useMemo, useState } from "react";

const Parent = () => {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  const computeFactorial = (n) => {
    console.log("Calcualtion again!");
    return n <= 1 ? 1 : n * computeFactorial(n - 1);
  };

  const compute = useMemo(() => computeFactorial(number), [number]);

  const handleCalculation = () => {
    setNumber((n) => n + 1);
  };

  const handleToggle = () => {
    setToggle(!toggle);
    console.log("State is toggling...");
  };

  return (
    <div>
      Factorial Of Number {number} is :- {compute}
      <button onClick={handleCalculation}>Re Calculate</button>
      <button onClick={handleToggle}>Toggle Me</button>
    </div>
  );
};
export default Parent;
