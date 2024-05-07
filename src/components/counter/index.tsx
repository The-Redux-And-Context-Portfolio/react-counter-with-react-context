/* node modules */
import React, { useContext, useEffect, useState } from "react";
import converter from "number-to-words";

/* app imports */
import { CounterContext } from "../context/counter";
import {CounterContextInt} from "../context/types";

/* component */
function Counter(): JSX.Element {
  const { counter }  = useContext(CounterContext) as CounterContextInt;
  const [numberName, setNumberName] = useState<string>("");

  /* update with the name once the counter value changes */
  useEffect(() => {
    setNumberName(() => converter.toWords(counter));
  }, [counter])

  return (
    <>
      <div className="posContainer text-center">
        <span className="num">{ counter }</span>
        <span className="name">{ numberName }</span>
      </div>
    </>
  );
}

/* exports */
export default Counter;
