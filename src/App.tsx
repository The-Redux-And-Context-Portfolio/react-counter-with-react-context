/* node modules */
import React from "react";

/* app imports */
import "./common/css/common.scss";
import "./style.scss";
import Counter from "./components/counter/index";
import Buttons from "./components/buttons";
import Controls from "./components/controls";
import CounterContextWrapper from "./components/context/counter";
import SoundContextWrapper from "./components/context/sound";

function App(): JSX.Element {
  return (
    <CounterContextWrapper>
      <SoundContextWrapper>
        <div className="mainContainer positionRelative">
          <Controls />
          <Counter />
          <Buttons />
        </div>
      </SoundContextWrapper>
    </CounterContextWrapper>
  );
}

export default App;
