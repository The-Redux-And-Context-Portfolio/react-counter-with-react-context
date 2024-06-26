/* node modules */
import React, { createContext } from "react";

/* app imports */
import useCounterHook from "../hooks/use-counter";
import { CounterContextInt, ContextWrapperProps } from "./types";

/**
  * counter context will control aspects related to the counter value as well as functionalities for updating 
  * the values based on user interactions.
  */
export const CounterContext = createContext<CounterContextInt | null>(null);

/* component wrapper */
function ContextWrapper(props: ContextWrapperProps) {
  const { children } = props;
  const { counter, counterReset, counterDecrement, counterIncrement } = useCounterHook();

  return (
    <CounterContext.Provider value={{counter, counterDecrement, counterIncrement, counterReset}}>
      { children }
    </CounterContext.Provider>
  );
}

/* exports */
export default ContextWrapper;
