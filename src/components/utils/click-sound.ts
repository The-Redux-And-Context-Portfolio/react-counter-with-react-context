/* app imports */
import clickSoundFile from "../../assets/sounds/click-sound.wav";

/* hook */
function playClickSound() {
  const clickSound = new Audio(clickSoundFile);
  return () => {
    clickSound.pause();
    clickSound.currentTime = 0;
    clickSound.play();
  }
}

/* exports */
export default playClickSound();
