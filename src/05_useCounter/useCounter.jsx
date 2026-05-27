import { useState } from "react";

const useCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };

  return { count, increment };
};

export default useCounter;
