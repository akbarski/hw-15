import { useState } from "react";

const useCounter = (initialState = 4) => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount((prevState) => prevState + initialState);
  };

  const decrementHandler = () => {
    if (count > 0) {
      setCount((prevState) => prevState - initialState);
    }
  };

  const resetHandler = () => {
    setCount(0);
  };

  return {
    count,
    incrementHandler,
    decrementHandler,
    resetHandler,
  };
};

export default useCounter;
