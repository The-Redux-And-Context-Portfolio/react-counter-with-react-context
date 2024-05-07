/* node modules */
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

/* app imports */
import ButtonComponent from "../../components/buttons/index";
import ContextWrapper from "../context-wrapper";
import CounterContextWrapper from "../../components/context/counter";
import SoundContextWrapper from "../../components/context/sound";

/* t-suite */
describe("ButtonComponent Test Suite", () => {
  beforeAll(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  test("check if 'decrement icon' is rendered correctly on load", () => {
    /* setup */
    ContextWrapper({ children: <ButtonComponent />});

    /* element(s) */
    const decIcon = screen.getByTitle("Decrement");

    /* assertions */
    expect(decIcon).toBeInTheDocument();
    expect(decIcon).toHaveAttribute("src", "minus-icon-ffffff.svg");
  });

  test("check if 'increment icon' is rendered correctly on load", () => {
    /* setup */
    ContextWrapper({ children: <ButtonComponent />});

    /* element(s) */
    const incIcon = screen.getByTitle("Increment");

    /* assertions */
    expect(incIcon).toBeInTheDocument();
    expect(incIcon).toHaveAttribute("src", "plus-icon-ffffff.svg");
  });

  test("check if buttons are rendered correctly on load", () => {
    /* setup */
    ContextWrapper({ children: <ButtonComponent />});

    /* element(s) + assertion in forEach loop */
    const buttons = screen.getAllByRole("button");
    buttons.forEach((element) => {
      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute("type", "button");
      expect(element).not.toBeDisabled();
      expect(element.classList.toString().indexOf("btn btn-default counterBtn")).toBeGreaterThan(-1)
    });
  });
});
