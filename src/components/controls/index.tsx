/* node modules */
import React, { useContext, useState, useEffect } from "react";

/* app imports */
import resetIconWhite from "../../assets/icons/reset-icon-white.svg";
import soundIconWhite from "../../assets/icons/sound-icon-white.svg";
import muteIconWhite from "../../assets/icons/mute-icon-white.svg";
import { CounterContext } from "../context/counter";
import { CounterContextInt } from "../context/types";
import { SoundContext } from "../context/sound";
import { SoundContextInt } from "../context/types";
import { soundOnIcon, soundOffIcon } from "../utils/sound-icons";
import resetSound from "../utils/reset-sound";

/* component */
function Controls(): JSX.Element {
  /** subscribing to the counter and sound context, and updating required component state. also providing required 
    * functionalities
    */
  const { counterReset } = useContext(CounterContext) as CounterContextInt;
  const { sound, soundOn, soundOff } = useContext(SoundContext) as SoundContextInt;

  /* local state */
  const [soundIcon, setSoundIcon] = useState<Record<string, any>>(sound ? soundOnIcon : soundOffIcon);

  /* event handler */
  function handleOnReset() {
    counterReset();
    sound && resetSound();
  }

  /* event handler */
  function handleOnToggleSound() {
    if (sound) {
      soundOff();
    }
    else {
      soundOn();
    }
  }

  /* update after state change for the 'sound' variable */
  useEffect(() => {
    if (sound) {
      setSoundIcon(() => soundOnIcon);
    }
    else {
      setSoundIcon(() => soundOffIcon);
    }
  }, [sound]);

  return (
    <>
      <div className="controls customRow">
        {/* Sound Button */}
        <button
          type="button"
          className="btn btn-default"
          aria-label="Sound Button"
          onClick={handleOnToggleSound}
        >
          <img {...soundIcon} data-testid="soundIcon"/>
        </button>

        {/* Counter Reset Button */}
        <button
          type="button"
          className="btn btn-default"
          aria-label="Reset Button"
          onClick={handleOnReset}
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
