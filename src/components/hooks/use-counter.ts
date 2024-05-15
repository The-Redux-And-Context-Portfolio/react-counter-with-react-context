/* node modules */
import { useState } from "react";

/**
  * @returns - value of the counter, along with functionalities for updating/mutating the value of the counter
  * as per user interactions.
  */
function useCounterHook() {
  const [counter, setCounter] = useState<number>(0);

  /* increments value of counter by 1 */
  function counterIncrement() {
    setCounter((prevState) =>  prevState + 1);
  }

  /* decrements value of counter by 1 */
  function counterDecrement() {
    setCounter((prevState) =>  prevState - 1);
  }

  /* resets the counter value to zero */
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
