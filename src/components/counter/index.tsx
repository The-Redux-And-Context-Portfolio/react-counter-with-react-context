/* node modules */
import React, { useContext, useEffect, useState } from "react";
import converter from "number-to-words";

/* app imports */
import { CounterContext } from "../context/counter";
import {CounterContextInt} from "../context/types";

/* component */
function Counter(): JSX.Element {
  /* subscribing to the state updates from the counter context */
  const { counter }  = useContext(CounterContext) as CounterContextInt;

  /* local state updates */
  const [numberName, setNumberName] = useState<string>("");

  /* update with the name once the counter value changes */
  useEffect(() => {
    setNumberName(() => converter.toWords(counter));
  }, [counter])

  return (
    <>
      <div className="posContainer text-center">
        {/* counter value */}
        <span className="num" data-testid="counterElem">{ counter }</span>

        {/* name of the counter value - in words */}
        <span className="name" data-testid="counterNameElem">{ numberName }</span>
      </div>
    </>
  );
}

/* exports */
export default Counter;
