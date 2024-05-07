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

/* module */
function ContextWrapper(props: WrapperProps) {
  const { children } = props;

  return render(
    <CounterContextWrapper>
      <SoundContextWrapper hasSound={false}>
        { children }
      </SoundContextWrapper>
    </CounterContextWrapper>
  );
}

/* exports */
export default ContextWrapper;
