/* node modules */
import { PropsWithChildren } from "react";
import { render } from "@testing-library/react";

/* app imports */
import CounterContextWrapper from "../components/context/counter";
import SoundContextWrapper from "../components/context/sound";

/* interface */
interface WrapperProps extends PropsWithChildren{
  children: JSX.Element | JSX.Element[];
}

/* a re-useable context wrapper function that helps to check context updates during unit testing */
function ContextWrapper(props: WrapperProps) {
  const { children } = props;

  return render(
    <CounterContextWrapper>
       {/* in this case, keeing sound as false since its easier to test without it */}
      <SoundContextWrapper hasSound={false}>
        { children }
      </SoundContextWrapper>
    </CounterContextWrapper>
  );
}

/* exports */
export default ContextWrapper;
