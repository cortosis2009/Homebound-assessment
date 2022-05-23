import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { render } from "../test_utils/testRender";


describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders and matches snapshot", async () => {    
    const c = await render(<App />);
    expect(c.baseElement).toMatchSnapshot();
  });
});