import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import * as serviceWorker from "./serviceWorker";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./index.css";
import ConnectedMain from "./containers/ConnectedMain";
import reducer from "./reducers";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline>
      <ConnectedMain />
    </CssBaseline>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
