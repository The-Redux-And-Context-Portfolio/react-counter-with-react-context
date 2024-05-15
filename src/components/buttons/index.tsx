/* node modules */
import React, { useContext } from "react";

/* app imports */
import plusIconWhite from "../../assets/icons/plus-icon-ffffff.svg";
import minusIconWhite from "../../assets/icons/minus-icon-ffffff.svg";
import { CounterContext } from "../context/counter";
import { SoundContext } from "../context/sound";
import { CounterContextInt, SoundContextInt } from "../context/types";
import clickSound from "../utils/click-sound";

/* component */
function Buttons(): JSX.Element {
  /* picking up state updates and required functionalities from the contexts that were created */
  const { counterDecrement, counterIncrement } = useContext(CounterContext) as CounterContextInt;
  const { sound } = useContext(SoundContext) as SoundContextInt;

  /* event handler */
  function handleOnIncrement() {
    counterIncrement();
    sound && clickSound();
  }

  /* event handler */
  function handleOnDecrement() {
    counterDecrement();
    sound && clickSound();
  }

  return (
    <>
      <div className="buttonContainer text-center customRow">
        {/* Decrement Button */}
        <button
          type="button"
          className="btn btn-default counterBtn white decrement"
          aria-label="Decrement Button"
          onClick={handleOnDecrement}
        >
          <img src={minusIconWhite} className="img-fluid center-block"
          alt="Decrement" title="Decrement"/>
        </button>
        
        {/* Increment Button */}
        <button
          type="button"
          className="btn btn-default counterBtn white increment"
          aria-label="Increment Button"
          onClick={handleOnIncrement}
        >
          <img src={plusIconWhite} className="img-fluid center-block"
          alt="Increment" title="Increment"/>
        </button>
      </div>
    </>
  );
}

/* exports */
export default Buttons;
