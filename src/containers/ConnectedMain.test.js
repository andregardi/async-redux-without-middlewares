import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import ConnectedMain from "./ConnectedMain";

describe("connected main", () => {
  const store = {
    getState: () => ({ repos: { repos: [], status: "" } }),
    subscribe: () => {},
    dispatch: () => {}
  };
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <ConnectedMain />
      </Provider>,
      div
    );
  });
});
