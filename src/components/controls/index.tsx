/* node modules */
import React from "react";

/* app imports */
import resetIconWhite from "../../assets/icons/reset-icon-white.svg";
import soundIconWhite from "../../assets/icons/sound-icon-white.svg";
import muteIconWhite from "../../assets/icons/mute-icon-white.svg";

/* component */
function Controls(): JSX.Element {
  return (
    <>
      <div className="controls customRow">
        <button
          type="button"
          className="btn btn-default"
          aria-label="Sound Button"
        >
          <img src={soundIconWhite} className="img-fluid center-block"
          alt="Sound On" title="Sound On"/>
        </button>
        <button
          type="button"
          className="btn btn-default"
          aria-label="Reset Button"
        >
          <img src={resetIconWhite} className="img-fluid center-block"
          alt="Counter - Reset" title="Counter - Reset"/>
        </button>
      </div>
    </>
  );
}

/* exports */
export default Controls;
