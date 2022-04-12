import { render } from "@testing-library/react";
import ImagesContainer from "../pages/images-container/images-container";

let container: any = null;
beforeEach(() => {
    
    container = document.createElement("div");
    document.body.appendChild(container);
    render(
          <ImagesContainer/>
      , container);
});

it('should have Image search component', () => {
    expect(container.getElementsByClassName("search")).toBeTruthy();
});

it('should have Image panel to show treading images', () => {
    expect(container.getElementsByClassName("container")).toBeTruthy();
});

it('should have Giphy image panel to show searched images', () => {
    expect(container.getElementsByClassName("giphy-grid")).toBeTruthy();
});


