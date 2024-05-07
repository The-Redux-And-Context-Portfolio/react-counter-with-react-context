/* node modules */
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

/* app imports */
import ContextWrapper from "./context-wrapper";
import App from "../App";
import clickSound from "../components/utils/click-sound";
import resetSound from "../components/utils/reset-sound";

jest.mock("../components/utils/click-sound", () => {
  return jest.fn();
});
jest.mock("../components/utils/reset-sound", () => {
  return jest.fn();
});

/* t-suite */
describe("Functional Test Suite", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  test("check if state counter value resets on button click", async () => {
    /* setup */
    const user = userEvent.setup();
    ContextWrapper({children: <App />});

    /* element(s) */
    const incBtn = screen.getByRole("button", {name: "Increment Button"});
    const resetBtn = screen.getByRole("button", {name: "Reset Button"});
    const counterElem = screen.getByTestId("counterElem");

    /* #1. event + assertions */
    await user.click(incBtn);
    await user.click(incBtn);
    expect(counterElem.textContent).toBe("2");

    /* #2. event + assertions */
    await user.click(resetBtn);
    expect(counterElem.textContent).toBe("0");
  });

  test("check if state decrement happends on button click", async () => {
    /* setup */
    const user = userEvent.setup();
    ContextWrapper({children: <App />});

    /* element(s) */
    const button = screen.getByRole("button", {name: "Decrement Button"});
    const counterElem = screen.getByTestId("counterElem");
    const counterNameElem = screen.getByTestId("counterNameElem");

    /* event */
    await user.click(button);

    /* assertions */
    expect(counterElem.textContent).toBe("-1");
    expect(counterNameElem.textContent).toBe("minus one");
  });

  test("check if state increment happends on button click", async () => {
    /* setup */
    const user = userEvent.setup();
    ContextWrapper({children: <App />});

    /* element(s) */
    const button = screen.getByRole("button", {name: "Increment Button"});
    const counterElem = screen.getByTestId("counterElem");
    const counterNameElem = screen.getByTestId("counterNameElem");

    /* event */
    await user.click(button);

    /* assertions */
    expect(counterElem.textContent).toBe("1");
    expect(counterNameElem.textContent).toBe("one");
  });

  test("check if sound icon toggles correctly on click", async () => {
    /* setup */
    const user = userEvent.setup();
    ContextWrapper({children: <App />});

    /* element */
    const button = screen.getByRole("button", {name: "Sound Button"});
    const soundIcon = screen.getByTestId("soundIcon");

    /* #1. event + assertions */
    await user.click(button);
    expect(soundIcon).toHaveAttribute("title", "Sound Off");
    expect(soundIcon).toHaveAttribute("src", "mute-icon-white.svg");

    /* #2. event + assertions */
    await user.click(button);
    expect(soundIcon).toHaveAttribute("title", "Sound On");
    expect(soundIcon).toHaveAttribute("src", "sound-icon-white.svg");
  });

});
