/* node modules */
import React, { createContext } from "react";

/* app imports */
import useSoundHook from "../hooks/use-sound";
import { SoundContextInt, ContextWrapperProps } from "./types";

/**
  * sound context - will help control aspects related to activating sounds based on user interactions
  */
export const SoundContext = createContext<SoundContextInt | null>(null);

/* component wrapper */
function ContextWrapper(props: ContextWrapperProps) {
  const { children } = props;
  let { sound, soundOn, soundOff } = useSoundHook();

  if (props.hasSound !== undefined) {
    sound = props.hasSound;
  }

  return (
    <SoundContext.Provider value={{sound, soundOff, soundOn}}>
      { children }
    </SoundContext.Provider>
  );
}

/* exports */
export default ContextWrapper;
