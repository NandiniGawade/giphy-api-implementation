import { render } from "@testing-library/react";
import { CenteredCircularProgress } from "../pages/loader/centered-circular-progress";

let container: any = null;
beforeEach(() => {
    
    container = document.createElement("div");
    document.body.appendChild(container);
    render(
          <CenteredCircularProgress/>
      , container);
});

it('should have box container page', () => {
    expect(container.getElementsByClassName("box-container")).toBeTruthy();
});

it('should have CircularProgress loader', () => {
    expect(container.getElementsByClassName("loader-color")).toBeTruthy();
});