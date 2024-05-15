/* node modules */
import { useState } from "react";

/**
  * @returns - the 'sound' variable that determines if sound can be played in the app as well as functionalities 
  * that help control the state.
  */
function useSoundHook() {
  const [sound, setSound] = useState<boolean>(true);

  /* activates the sound in the app */
  function soundOn() {
    setSound(() => true);
  }

  /* deactivates the sound in the app */
  function soundOff() {
    setSound(() =>  false);
  }

  return { sound, soundOn, soundOff };
}

/* exports */
export default useSoundHook;
