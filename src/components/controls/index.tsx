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
  const { counterReset } = useContext(CounterContext) as CounterContextInt;
  const { sound, soundOn, soundOff } = useContext(SoundContext) as SoundContextInt;
  const [soundIcon, setSoundIcon] = useState<Record<string, any>>(sound ? soundOnIcon : soundOffIcon);

  function handleOnReset() {
    counterReset();
    sound && resetSound();
  }

  function handleOnToggleSound() {
    if (sound) {
      soundOff();
    }
    else {
      soundOn();
    }
  }

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
        <button
          type="button"
          className="btn btn-default"
          aria-label="Sound Button"
          onClick={handleOnToggleSound}
        >
          <img {...soundIcon} data-testid="soundIcon"/>
        </button>
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
