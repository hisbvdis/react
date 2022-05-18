import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { store } from "./store";
import React from "react";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);