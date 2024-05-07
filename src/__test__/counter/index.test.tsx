/* node modules */
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

/* app imports */
import Counter from "../../components/counter/index";
import ContextWrapper from "../context-wrapper";

/* t-suite */
describe("CounterComponent Test Suite", () => {
  test("check if 'counterNameElem' is rendered correctly on load", () => {
    /* setup */
    ContextWrapper({children: <Counter />});

    /* element(s) + assertions */
    const element = screen.getByTestId("counterNameElem");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("name");
    expect(element.textContent).toBe("zero");
  });

  test("check if 'counterElem' is rendered correctly on load", () => {
    /* setup */
    ContextWrapper({children: <Counter />});

    /* element(s) + assertions */
    const element = screen.getByTestId("counterElem");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("num");
    expect(element.textContent).toBe("0");
  });
});
