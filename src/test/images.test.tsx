import { render } from "@testing-library/react";
import { Images } from "../pages/images-container/images";

let container: any = null;
beforeEach(() => {
    
    container = document.createElement("div");
    document.body.appendChild(container);
    render(
          <Images/>
      , container);
});

it('should have Image panel component', () => {
    expect(container.getElementsByClassName("container")).toBeTruthy();
});

it('should have CircularProgress loader', () => {
    expect(container.getElementsByClassName("loader-color")).toBeTruthy();
});

it('should have Pagination component', () => {
    expect(container.getElementsByClassName("pagination-container")).toBeTruthy();
});

it('should have Modal', () => {
    expect(container.getElementsByClassName("modal-header")).toBeTruthy();
});