export interface CounterContextInt {
  counter: number;
  counterIncrement: () => void;
  counterDecrement: () => void;
  counterReset: () => void;
}

export interface SoundContextInt {
  sound: boolean;
  soundOn: () => void;
  soundOff: () => void;
}

export interface ContextWrapperProps {
  children: JSX.Element | JSX.Element[];
}

