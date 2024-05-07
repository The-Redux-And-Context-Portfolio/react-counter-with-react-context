/* node modules */
import { useState } from "react";

/* hook */
function useCounterHook() {
  const [counter, setCounter] = useState<number>(0);

  function counterIncrement() {
    setCounter((prevState) =>  prevState + 1);
  }

  function counterDecrement() {
    setCounter((prevState) =>  prevState - 1);
  }

  function counterReset() {
    setCounter(() => 0);
  }

  return {
    counter,
    counterIncrement,
    counterDecrement,
    counterReset
  };
}

/* exports */
export default useCounterHook;
