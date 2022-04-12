import { render } from "@testing-library/react";
import GiphyImages from "../pages/images-giphy-react-component/giphy-images";

let container: any = null;
beforeEach(() => {
    
    container = document.createElement("div");
    document.body.appendChild(container);
    render(
          <GiphyImages searchValue="galaxy"/>
      , container);
});

it('should have Grid to display images', () => {
    expect(container.getElementsByClassName("giphy-grid")).toBeTruthy();
});

it('should have loader', () => {
    expect(container.getElementsByClassName("loader")).toBeTruthy();
});