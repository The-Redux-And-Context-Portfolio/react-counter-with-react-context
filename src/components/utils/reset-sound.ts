/* app imports */
import resetSoundFile from "../../assets/sounds/reset-sound.wav";

/* hook */
function playResetSound() {
  const resetSound = new Audio(resetSoundFile);
  return () => {
    resetSound.pause();
    resetSound.currentTime = 0;
    resetSound.play();
  };
}

/* exports */
export default playResetSound();