/* node modules */
import { useState } from "react";

/* hook */
function useSoundHook() {
  const [sound, setSound] = useState<boolean>(true);

  function soundOn() {
    setSound(() => true);
  }

  function soundOff() {
    setSound(() =>  false);
  }

  return { sound, soundOn, soundOff };
}

/* exports */
export default useSoundHook;
