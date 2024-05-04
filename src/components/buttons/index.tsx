/* node modules */
import React from "react";

/* app imports */
import plusIconWhite from "../../assets/icons/plus-icon-ffffff.svg";
import minusIconWhite from "../../assets/icons/minus-icon-ffffff.svg";

/* component */
function Buttons(): JSX.Element {
  return (
    <>
      <div className="buttonContainer text-center customRow">
        <button
          type="button"
          className="btn btn-default counterBtn white decrement"
          aria-label="Decrement Button"
        >
          <img src={minusIconWhite} className="img-fluid center-block"
          alt="Decrement" title="Decrement"/>
        </button>
        <button
          type="button"
          className="btn btn-default counterBtn white increment"
          aria-label="Increment Button"
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
